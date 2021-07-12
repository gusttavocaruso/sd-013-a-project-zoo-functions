const { species, employees, prices, hours } = require('./data');
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
/* Requisito 8 - verificação do objeto vazio realizada com auxĺio do link:
https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery */
function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const totalPrice = Object.keys(entrants).reduce((total, currentKey) =>
    total + (entrants[currentKey] * prices[currentKey]), 0);
  return totalPrice;
}

function getAnimalMap(options) {
  // seu código aqui
}

/* Requisito 10 - Realizado com auxílio do Plantão Guiado Turma 8 */
function getSchedule(dayName) {
  const newGet = Object.entries(hours).reduce((newObj, [key, value]) => Object.assign(newObj, {
    [key]: value.open && value.close > 0
      ? `Open from ${value.open}am until ${value.close % 12}pm` : 'CLOSED',
  }), {});
  if (typeof dayName === 'string' && dayName.length !== 0) return { [dayName]: newGet[dayName] };
  return newGet;
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
