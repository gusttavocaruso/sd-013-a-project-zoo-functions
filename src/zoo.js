const { species, employees } = require('./data');
const data = require('./data');
/* Requisito 1 feito com base na aula de revisão da turma 12,
pesquisa no material do course e notion da turma 13-A */
function getSpeciesByIds(...ids) {
  if (!ids) return undefined;
  const newArray = species.filter((specieItem) => ids.find((idsItem) => specieItem.id === idsItem));
  return newArray;
}

/* Requisito 2 realizado com o auxílio do aluno Micael Maicon - Turma 13 - Tribo A */
function getAnimalsOlderThan(animal, age) {
  const nomeSel = species.filter((nameItem) => nameItem.name === animal);
  return nomeSel[0].residents.every((item) => item.age >= age);
}

/* Requisito 3 */
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const peopleSearch = employees.find((firstItem) =>
    firstItem.firstName === employeeName || firstItem.lastName === employeeName);
  return peopleSearch;
}

/* Requisito 4 realizado com auxĺio do link:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */
function createEmployee(personalInfo, associatedWith) {
  const create = {};
  return Object.assign(create, personalInfo, associatedWith);
}

/* Requisito 5 realizado com auxĺio do link:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */
function isManager(id) {
  return employees.some((employeeItem) => employeeItem.managers.includes(id));
}

/* Requisito 6 */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employees;
}

/* Requisito 7 realizado com auxĺio do link:
https://danielobara.wordpress.com/2018/11/20/como-converter-array-de-objetos-para-um-unico-objeto-em-javascript-com-es6/ */
function countAnimals(spec) {
  const newObject = species.reduce((obj, currentItem) => Object.assign(obj, {
    [currentItem.name]: currentItem.residents.length,
  }), {});
  if (spec) return newObject[spec];
  return newObject;
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
