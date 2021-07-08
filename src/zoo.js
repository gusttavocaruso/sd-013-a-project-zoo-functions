const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

// Requisito 2
function getAnimalsOlderThan(animal, age) {
  const findSpecie = species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return findSpecie;
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmplyee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmplyee;
}

// Requisito 4
function createEmployee({ id, firstName, lastName },
  { managers, responsibleFor }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

// Requisito 5
function isManager(id) {
  const findManager = employees
    .some((employee) => employee.managers.includes(id));
  return findManager;
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

// Requisito 7
function countAnimals(animal) {
  const newObject = {};
  species.forEach((specie) => {
    newObject[specie.name] = specie.residents.length;
  });
  if (animal === undefined) return newObject;
  return newObject[animal];
}

// Requisito 8
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10
function getSchedule(dayName) {
  // seu código aqui
}

// Requisito 11
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

// Requisito 12
function increasePrices(percentage) {
  // seu código aqui
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

// Requisito 13
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
