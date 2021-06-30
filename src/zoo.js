const { species, employees, prices } = require('./data');
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
// junta os parametros passados, com base no spread operator
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
// apos receber o id passado como parametro percorre o id de todos os funcionarios e verifica se o id passado consta como gerente de algum funcionario
  return employees
    // .filter((pessoa, index) => pessoa.managers[index] === id)
    .some((allPeoples, index) => allPeoples.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(specie) {
  // primeiro criamos o objeto vazio e apos isso prenchemos ele percorrendo cada indice do objeto species atribuindo a chave name, o valor do numero de animais.
  const objeto = {};
  species.forEach((valor) => {
    objeto[valor.name] = valor.residents.length;
  });
  // nesse if, se o objeto for undefined, eu retorno o objeto vazio.
  if (specie === undefined) {
    return objeto;
  }
  let contador = 0;
  species.forEach((valor) => {
    // e se a especie for definida na hora de passar o parametro, retono apenas a quantidade de animais dela.
    if (valor.name === specie) contador = valor.residents.length;
  });
  return contador;
}
function calculateEntry(entrants = 0) {
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChildPrices, Senior: SeniorPrices, Adult: AdultPrices } = prices;
  const total = ChildPrices * Child + SeniorPrices * Senior + AdultPrices * Adult;
  return total;
}
console.log(calculateEntry({ Adult: 2, Child: 3, Senior: 1 }));
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
