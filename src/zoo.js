const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.some((n1) => n1 === element.id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((element) => element.name === animal).residents
    .every((element2) => element2.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.filter((element) =>
      element.firstName === employeeName || element.lastName === employeeName).find((m1) => m1);
  }

  return {};
}

function createEmployee(personalInfos, associatedWith) {
  return { ...personalInfos, ...associatedWith };
}

function isManager(id) {
  return employees.map((element) => element.managers)
    .reduce((acumulador, array) => [...acumulador, ...array], [])
    .some((manager) => manager === id);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(especie) {
  if (especie) {
    const test = species.find((element1) => element1.name === especie).residents.length;
    return test;
  }

  const a = {};
  species.map((element) => {
    a[element.name] = element.residents.length;
    return null;
  });

  return a;
}

function calculateEntry(entrants) {
  // seu código aqui
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
