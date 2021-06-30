const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return ids.map((param) => data.species.find((section) => section.id === param));
}

function getAnimalsOlderThan(specie, minAge) {
  const section = data.species.find((block) => block.name === specie);
  const animals = section.residents.every((animal) => animal.age >= minAge);
  return animals;
}

function getEmployeeByName(employeeName = {}) {
  if (Object.values(employeeName).length === 0) {
    return employeeName;
  }
  let human = data.employees.find((person) => person.firstName === employeeName);
  if (human === undefined) {
    human = data.employees.find((person) => person.lastName === employeeName);
  }
  return human;
}

function createEmployee(personalInfo, associatedWith) {

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
