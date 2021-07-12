const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((idAtual) => data.species.find((specie) => specie.id === idAtual));
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);
  return nomeAnimal.residents.every((ageAnimal) => ageAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employe) => employe.firstName === employeeName
  || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  if (manager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployer = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addEmployer);
}

function countAnimals(species) {
  if (!species) {
    const objectAnimal = {};
    data.species.forEach((animal) => {
      objectAnimal[animal.name] = animal.residents.length;
    });
    return objectAnimal;
  }
  return data.species.find((animal) => animal.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const valorTotal = ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
  return valorTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.find((emplo) => emplo.id === id);
  const animal1 = data.species.find((animal) => animal.id === employeeId.responsibleFor[0]);
  const oldAnimal = animal1.residents.sort((animalA, animalB) => animalB.age - animalA.age);
  const arrayValor = Object.values(oldAnimal[0]);
  return arrayValor;
}

function increasePrices(percentage) {
  const percent = (percentage / 100) + 1;
  const newPrice = Object.keys(prices);
  newPrice.forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] * percent) * 100) / 100;
  });
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
