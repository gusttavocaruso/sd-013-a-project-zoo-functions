const { species, employees, prices, hours } = require('./data');
const data = require('./data');
// ====== OK passou no teste.
function getSpeciesByIds(...ids) {
  // acessa o objeto species e filtra os itens com mesmo id;
  if (ids === undefined) return [];
  return species.filter((nome, index) => nome.id === ids[index]);
}
// ======= ok passou no test
function getAnimalsOlderThan(animal, age) {
  // o filter percorre todo o objeto e retorna somente aquele cujo o nome é igual, apos isso verifica se cada posição do residents tem a idade minima selecionada

  return species
    .filter((pet) => pet.name === animal)
    .every((bicho, index) => bicho.residents[index].age > age);
}
// ======= ok passou no test
function getEmployeeByName(employeeName) {
  // aqui checamos se o nome ou sobrenome passado como parametro é igual ao de algum item do objeto e se sim, retornamos o primeiro objeto com essas caracteristicas
  if (employeeName === undefined) {
    return {};
  } return employees
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}
// ======= ok passou no test
function createEmployee(personalInfo, associatedWith) {
// junta os parametros passados, com base no spread operator
  return { ...personalInfo, ...associatedWith };
}
// ======= ok passou no test
function isManager(id) {
// apos receber o id passado como parametro percorre o id de todos os funcionarios e verifica se o id passado consta como gerente de algum funcionario
  return employees
    // .filter((pessoa, index) => pessoa.managers[index] === id)
    .some((allPeoples, index) => allPeoples.managers[index] === id);
}
// ======= ok passou no test
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}
// ======= ok passou no test
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
// ======= ok passou no test
function calculateEntry(entrants = 0) {
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChildPrices, Senior: SeniorPrices, Adult: AdultPrices } = prices;
  const total = ChildPrices * Child + SeniorPrices * Senior + AdultPrices * Adult;
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}
// ======= ok passou no test
function getSchedule(dayName) {
  const dias = Object.keys(hours); //  armazena as keys do objeto Hours que é um parametro do Data.
  const semana = dias.reduce((accumulator, curr) => { // Utilizando um reduce para
    accumulator[curr] = `Open from ${hours[curr].open}am until ${hours[curr].close - 12}pm`; // Atribuir ao accumulador utilizando o current como index para formatar o template literals com a hora do dia no parametro open e com a hora do dia, no parametro close e retirando 12h desse valor para formatação com o pm.
    return accumulator;
  }, {});
  semana.Monday = 'CLOSED'; // Atribuindo ao dia Monday, o status de fechado.
  if (dias.includes(dayName) === true) { // Condicional para verificar se meu array days inclui o parametro dayName, caso seja true;
    return { [dayName]: semana[dayName] }; // Retorna um objeto contendo o parametro dayName como chave e o dia da semana que contem o dayName como index para buscar seu valor imprimir seu valor que estava contido no accumulator.
  } return semana;
}
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}
// ======= ok passou no test
function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (100 + percentage)) / 100;
  prices.Senior = Math.round(prices.Senior * (100.01 + percentage)) / 100;
  prices.Child = Math.round(prices.Child * (100.01 + percentage)) / 100;
}

function getEmployeeCoverage(idOrName) {
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
