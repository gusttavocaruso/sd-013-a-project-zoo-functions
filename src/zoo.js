const data = require('./data');

// ==========================================================================================================
// Requisito 1
// ==========================================================================================================

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

// ==========================================================================================================
// Requisito 2
// ==========================================================================================================

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find(({ name }) => name === animal);

  const trueOrFalse = specie.residents.every((resident) => resident.age >= age);

  return trueOrFalse;
}

// ==========================================================================================================
// Requisito 3
// ==========================================================================================================

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((ob) => ob.firstName === employeeName || ob.lastName === employeeName);
}

console.log(getEmployeeByName());

// ==========================================================================================================
// Requisito 4
// ==========================================================================================================

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
