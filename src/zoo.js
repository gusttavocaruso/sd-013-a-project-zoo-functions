const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // acessa o objeto species e filtra os itens com mesmo id;
  return species.filter((nome, index) => nome.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  // o filter percorre todo o objeto e retorna somente aquele cujo o nome é igual, apos isso verifica se cada posição do residents tem a idade minima selecionada

  return species
    .filter((pet) => pet.name === animal)
    .every((bicho, index) => bicho.residents[index].age > age);
}

function getEmployeeByName(employeeName) {
  // aqui checamos se o nome ou sobrenome passado como parametro é igual ao de algum item do objeto e se sim, retornamos o primeiro objeto com essas caracteristicas
  if (employeeName === undefined) {
    return {};
  } return employees
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  return employees
    // .filter((pessoa, index) => pessoa.managers[index] === id)
    .some((allPeoples, index) => allPeoples.managers[index] === id);
}

console.log(isManager(('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')));
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(/* species */) {
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
