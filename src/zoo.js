const { species, employees, prices, hours } = require('./data');
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
  const { id, firstName, lastName } = personalInfo;
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

function checarParametro(arrayEntries) {
  return arrayEntries.reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
}

function getSchedule(dayName) {
  const arrayEntries = Object.entries(data.hours);
  if (dayName === undefined) return checarParametro(arrayEntries);
  const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);
  const object = {};
  if (dayName === 'Monday') {
    object[day[0]] = 'CLOSED';
    return object;
  }
  object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  return object;
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
