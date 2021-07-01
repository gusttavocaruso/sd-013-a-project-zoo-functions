const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const animais = species.filter((specie) => ids.includes(specie.id));
  return animais;
}

function getAnimalsOlderThan(animal, agee) {
  const bichos = species.find((nome) => nome.name === animal);
  return bichos.residents.every((bichoAge) => bichoAge.age >= agee);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const funcionario = employees.find((employ) => (employ.firstName === employeeName)
  || (employ.lastName === employeeName));
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
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
