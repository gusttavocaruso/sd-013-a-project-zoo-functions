const data = require('./data');

function getSpeciesByIds(ids) {
  if (ids === undefined) return [];
  const especies = data.species.find((especie) => especie.id === ids);
  return especies;
}

console.log(getSpeciesByIds());

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const especimes = species.find((especie) => especie.name === animal);
  return especimes.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;
  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
}

function isManager(id) {
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals() {
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
