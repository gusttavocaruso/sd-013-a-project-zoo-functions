const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0)
  return [];

  const animais = data.species.filter((specie) => specie.id === ids);
  return animais;
}

function getAnimalsOlderThan(animal, agee) {
  const bichos = data.species
  const {name, age, ...rest}  = bichos;
  const veryfiName = (animal) => animal === name;
  const veryfiAge = (agee) => age >= agee;
  const filtro = bichos.filter(veryfiName);
 return filtro.every(veryfiAge);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
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
