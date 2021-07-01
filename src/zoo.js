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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
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
