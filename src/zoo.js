const { species, employees } = require('./data');
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
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
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
  const {id, firstName, lastName} = personalInfo;
  const {managers, responsibleFor} = associatedWith;
  return {
    id, 
    firstName, 
    lastName, 
    managers, 
    responsibleFor}
}

// ===========================

// Requisito 5

// ===========================

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// ===========================

// Requisito 6

// ===========================

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
    return species.reduce((acc, currentSpecie) => {
      acc[currentSpecie.name] = currentSpecie.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

// ===========================

// Requisito 8

// ===========================

function calculateEntry(entrants) {
  // seu código aqui
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

function getSchedule(dayName) {
  // seu código aqui
}

// ===========================

// Requisito 11

// ===========================

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

// ===========================

// Requisito 12

// ===========================

function increasePrices(percentage) {
  // seu código aqui
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
