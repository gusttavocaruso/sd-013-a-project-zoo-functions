const { species, employees, prices } = require('./data');
const data = require('./data');

// ===========================

// Requisito 1

// ===========================

function getSpeciesByIds(...ids) { // ...ids para receber mais de um parâmetro
  return ids.map((id) => species.find((specie) => specie.id === id)); // fazemos um filtro no obj 'species' para verificar se o parâmetro 'ids' da função
}
// filter encontrar algum animal no array especies que tenha o mesmo id que o meu ids do parametro

// ===========================

// Requisito 2

// ===========================

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents // encontra as espécies e as iguala ao parâmetro digitado
    .every((resident) => resident.age >= age); // depois verifica se todos os animais residentes tem a idade > idade do parâmetro
}

// ===========================

// Requisito 3

// ===========================

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

// ===========================

// Requisito 4

// ===========================

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo; // usando object destructuring para criar um parâmetro que recebe um objeto
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

// ===========================

// Requisito 5

// ===========================

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id)); // verifica SE ALGUM dos ids do parâmetro é manager
}

// ===========================

// Requisito 6

// ===========================

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // predefinição de parâmetros, onde "managers" e "responsibleFor" ao não serem chamados como parâmetro devolvem um array vazio
  const objectAddEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(objectAddEmployee);
}

// ===========================

// Requisito 7

// ===========================

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, currentSpecie) => { // utilizando reduce() para transformar a função vazia em um retorno de obj vazio
      acc[currentSpecie.name] = currentSpecie.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length; // indicando que o parâmetro é o nome do animal, e através do tamanho dele retornamos o número de residents daquela espécie
}

// ===========================

// Requisito 8

// ===========================

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const calculate = ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
  return calculate;
}

// ===========================

// Requisito 9

// ===========================

function getAnimalMap(options) {
  // seu código aqui
}

// ===========================

// Requisito 10

// ===========================

// função que executa quando getSchedule() vem vazia
function checkWeekDay(arrayEntries) { // quando a função principal recebe parâmetro vazio executa essa função aqui, que mostra na tela todos os horários, onde o único dia fechado é na segunda-feira
  return arrayEntries.reduce((acc, curr) => { // reduzimos o retorno dessa função a CLOSED caso open e close sejam 0
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED'; // acumulador é o nome da chave que chama o dia da semana
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`; // caso o open e close não sejam zero, retornamos todos os dias da semana e horários
    return acc;
  }, {});
}

// função principal:

function getSchedule(dayName) { // função principal do exercício (começar leitura do código aqui)
  const arrayEntries = Object.entries(data.hours); // acessando o array que contém os horários
  if (dayName === undefined) return checkWeekDay(arrayEntries); // se função vazia, vai para a função de cima
  const stringDay = arrayEntries.find((weekDay) => weekDay[0] === dayName); // se weekDay for igual ao dayName, retorna o array referente ao dia da semana
  const obj = {};
  if (dayName === 'Monday') { // se o parâmetro for segunda-feira
    obj[stringDay[0]] = 'CLOSED'; // retornamos CLOSED
    return obj;
  }
  obj[stringDay[0]] = `Open from ${stringDay[1].open}am until ${stringDay[1].close - 12}pm`; // se o parâmetro for qualquer outro dia da semana, retornamos o horário daquele dia
  return obj;
}

// ===========================

// Requisito 11

// ===========================

function getOldestFromFirstSpecies(id) {
  const getFirstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0]; // encontrando o primeiro animal que o funcionário é responsável por
  const getFirstAnimalOfResidents = species
    .find((specie) => specie.id === getFirstAnimal).residents; // fazendo link da primeira espécie de animal encontrado com os animais do objeto
  getFirstAnimalOfResidents.sort((a, b) => b.age - a.age); // mostrando os animais em ordem decrescente para que o mais velho possa aparecer primeiro
  const { name, sex, age } = getFirstAnimalOfResidents[0]; // usando Array Destructuring para criar um objeto
  return [name, sex, age]; // transformando em array
}

// ===========================

// Requisito 12

// ===========================

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const percent = (percentage / 100) + 1;
  const pricesAdult = Math.round((percent * Adult) * 100) / 100;
  const pricesSenior = Math.round((percent * Senior) * 100) / 100;
  const pricesChild = Math.round((percent * Child) * 100) / 100;
  data.prices = {
    Adult: pricesAdult,
    Senior: pricesSenior,
    Child: pricesChild,
  };
  return data.prices;
}

// ===========================

// Requisito 13

// ===========================

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
