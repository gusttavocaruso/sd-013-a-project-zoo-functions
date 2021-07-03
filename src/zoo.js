const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return data.species.filter((specie, i) => specie.id === ids[i]);
}

// Negativo o parametro para ele retornar um array vazio.
// Filtro os elementos que possuem id igual ao numero passado no parâmetro.

function getAnimalsOlderThan(animal, age) {
  const residentsSpecie = data.species.find((specie) => specie.name === animal).residents;
  return residentsSpecie.every((resident) => resident.age > age);
}

// Eu quero que retorne a chave residents do primeiro animal dado como parâmetro (por isso o find).
// Comparo as idades de todos os residentes daquela espécie com a idade mínima dada como parmâmetro.

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

// Negativo o parâmetro para ele retornar um array vazio.
// Retorno o primeiro objeto que consta o nome ou sobrenome passados como para

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// Utilização de spread.

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.includes(id));
}

// Com o includes, estou analisando se o meu array (managers) contém o parametro solicitado (id).

function addEmployee(idP, firstNameP, lastNameP, managersP = [], responsibleForP = []) {
  const personAdd = {
    id: idP,
    firstName: firstNameP,
    lastName: lastNameP,
    managers: managersP,
    responsibleFor: responsibleForP,
  };
  employees.push(personAdd);
}

// O requisito pede para que retorne arrays vazios em managers e resposibleFor caso não sejam passados como parâmetros.

function countAnimals(species) {
  if (!species) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

// Levei bastante tempo neste requisito. Tentei primeiro usar o map, mas como retornava um array usei o forEach (também por ser mais genérico).
// Na primeira parte, não existindo parâmetros é criado um novo objeto vazio, que recebe o nome da espécie e sua quantidade em cada iteração do forEach.
// Na segunda parte, para cada espécie dada como parâmetro o find percorre o objeto até encontrar o primeiro elemento, e retorna a quantidade daquela espécie. 

function calculateEntry(entrants) {
if (!entrants) return 0;
if (entrants === {}) return 0;
const { Adult, Senior, Child } = prices;
const price = prices.reduce((acc, crr) => {

}, 0);


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


