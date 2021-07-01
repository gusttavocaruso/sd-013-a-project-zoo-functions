const { species } = require('./data');
const data = require('./data');

console.table(species);
console.table(species[0]);
console.table(species[0].residents);
function getSpeciesByIds(...ids) {
  const resultadoBusca = [];
  ids.forEach((specieId) => {
    const buscaId = data.species.find((elemento) => elemento.id === specieId);
    resultadoBusca.push(buscaId);
  });
  return resultadoBusca;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elementoX) => elementoX.name === animal)
    .residents.every((elementoY) => elementoY.age >= age);
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

function countAnimals(specie) {
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
