const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  const arrayAnimals = [];

  ids.forEach((id) => {
    const searchId = data.species.find((animal) => animal.id === id);
    arrayAnimals.push(searchId);
  });

  return arrayAnimals;
}

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = data.species.find((search) => search.name === animal);
  return searchAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  const searchName = data.employees.find((search) =>
    search.firstName === employeeName || search.lastName === employeeName);
  return searchName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addNewEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  const animalQuantity = data.species.find((animal) => animal.name === species).residents.length;
  return animalQuantity;
}

const { prices } = require('./data');

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  total.toFixed(2);
  return total;
}

function getAnimalMap(options) {

}

const { hours } = require('./data');

function getSchedule(dayName) {
  const keys = Object.keys(data.hours);
  const horarios = {};
  const horario = {};

  keys.forEach((key) => {
    if (key === 'Monday') {
      horarios[key] = 'CLOSED';
    } else horarios[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
  });

  horario[dayName] = horarios[dayName];
  return dayName === undefined ? horarios : horario;
}

function getOldestFromFirstSpecies(id) {
  const searchEmployee = data.employees.find((employee) => employee.id === id);
  const searchFirstSpecie = searchEmployee.responsibleFor[0];
  const searchAnimal = data.species.find((animal) => animal.id === searchFirstSpecie);
  const searchOlderAnimal = searchAnimal.residents.sort((ageA, ageB) => ageB.age - ageA.age);
  return Object.values(searchOlderAnimal[0]);
}

function increasePrices(percentage) {
  const keyPrices = Object.keys(data.prices);

  keyPrices.forEach((key) => {
    prices[key] = Math.round((prices[key] + prices[key] * (percentage / 100)) * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
