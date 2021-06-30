const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');
// console.log(employees);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((element) => ids.includes(element.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalList = species.find((element) => element.name === animal);
  const ageList = animalList.residents.every((element) => element.age >= age);
  return ageList;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeCheck = employees.find((element) => (
    element.firstName === employeeName || element.lastName === employeeName));
  return employeeName === undefined ? {} : employeCheck;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const createInfo = {};
  Object.assign(createInfo, personalInfo, associatedWith);
  return createInfo;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species2) {
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
