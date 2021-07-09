const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.find((id) => id === specie.id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((specie) => specie.name === animal);
  return getAnimal.residents.every((individual) => individual.age >= age);
}
console.log(getAnimalsOlderThan('bears', 4));

function getEmployeeByName(employeeName) {
  const emp = employeeName;
  const em = data.employees.filter((person) => emp === person.firstName || emp === person.lastName);
  const personNotFound = {};
  return em.length > 0 ? em[0] : personNotFound;
}
console.log(getEmployeeByName('sdfsdf'));
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
