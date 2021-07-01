const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  const arrayAnimals = [];

  ids.forEach((id) => {
    const searchId = species.find((animal) => animal.id === id);
    arrayAnimals.push(searchId);
  });

  return arrayAnimals;
}

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = species.find((search) => search.name === animal);
  return searchAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  const searchName = employees.find((search) =>
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
  return employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addNewEmployee);
}

function countAnimals(speciess) {
  if (speciess === undefined) {
    return species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  const animalQuantity = species.find((animal) => animal.name === speciess).residents.length;
  return animalQuantity;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  return total.toFixed(2);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
