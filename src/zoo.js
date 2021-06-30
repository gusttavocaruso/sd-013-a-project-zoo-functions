const { species } = require('./data');
const data = require('./data');
// console.log(data);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((element) => ids.includes(element.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalList = species.find((element) => element.name === animal);
  const ageList = animalList.residents.every((element) => element.age >= age);
  // console.log(animalList)
  return ageList;
}
// console.log(getAnimalsOlderThan('penguins', 10));
// console.log(getAnimalsOlderThan('otters', 7));

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

function countAnimals(species2) {
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
