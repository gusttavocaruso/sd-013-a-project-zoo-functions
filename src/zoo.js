/* eslint-disable no-constant-condition */
const { species, employees, prices } = require('./data');
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

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;
  const array = Object.keys(entrants);

  return array.reduce((acc, element) => {
    const total = acc + (entrants[element] * prices[element]);
    return total;
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {

}

function getOldestFromFirstSpecies(ids) {
  /* const lisIds = employees.find((m1) => m1.id === ids).responsibleFor;
  const listAnimals = species.find((m2) => m2.id === lisIds[0]);
  console.log(listAnimals); */
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

function increasePrices(percentage) {

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
