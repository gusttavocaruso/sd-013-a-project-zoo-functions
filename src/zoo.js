const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  const speciesIdArray = data.species.filter((keyId) => ids.includes(keyId.id));
  return speciesIdArray;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimalsByKey = data.species.find((key) => key.name === animal);
  return findAnimalsByKey.residents.every((key) => key.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((k) => k.firstName === employeeName || k.lastName === employeeName);
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

function countAnimals(speciesCounting) {
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
