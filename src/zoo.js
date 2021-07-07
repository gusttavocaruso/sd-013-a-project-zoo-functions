const { species } = require('./data');
const data = require('./data');
/* Requisito 1 feito com base na aula de revisão da turma 12,
pesquisa no material do course e notion da turma 13-A */
function getSpeciesByIds(...ids) {
  if (!ids) return undefined;
  const newArray = species.filter((specieItem) => ids.find((idsItem) => specieItem.id === idsItem));
  return newArray;
}

/* Requisito 1 realizado com o auxílio do aluno Micael Maicon - Turma 13 - Tribo A */
function getAnimalsOlderThan(animal, age) {
  const nomeSel = species.filter((nameItem) => nameItem.name === animal);
  return nomeSel[0].residents.every((item) => item.age >= age);
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

function countAnimals(spec) {
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
