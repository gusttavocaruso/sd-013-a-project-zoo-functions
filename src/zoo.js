const { hours } = require('./data');
const { species } = require('./data');
const { prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(ids) {// requisito 01
  return species
  .filter((elemento) => ids.includes(elemento.id));
}

function getAnimalsOlderThan(animal, age) {// requisito 02
  return species
  .find((elemento) => elemento.name === animal).residents
  .every((elemento) => elemento.age >= age);
  }
}

function getEmployeeByName(employeeName) {// requisito 03
  if (!employeeName) return {};
  return employees
    .find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
