const data = require('./data');

// ==========================================================================================================
// Requisito 1
// ==========================================================================================================

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
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

// ==========================================================================================================
// Requisito 4
// ==========================================================================================================

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

// ==========================================================================================================
// Requisito 5 - Feito com ajuda de Pedro Delicoli
// ==========================================================================================================

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

// ==========================================================================================================
// Requisito 6
// ==========================================================================================================

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const object = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(object);
}

// ==========================================================================================================
// Requisito 7
// ==========================================================================================================

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
