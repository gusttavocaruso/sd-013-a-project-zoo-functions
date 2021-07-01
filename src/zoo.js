const { species } = require('./data');
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
  const { employees } = data;
  if (employeeName) {
    return employees.filter((element) =>
      element.firstName === employeeName || element.lastName === employeeName).find((m1) => m1);
  }

  return {};
}

console.log(getEmployeeByName());

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
