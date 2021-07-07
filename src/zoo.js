const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesSelected = species.filter((specie, index) => specie.id === ids[index]);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  const implementation = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return implementation;
}

function createEmployee(personalInfo, associatedWith) {
  const result = {...personalInfo, ...associatedWith};

  return result;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
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
