const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((item) => item.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeObj = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return employeeObj || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(especie) {
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
