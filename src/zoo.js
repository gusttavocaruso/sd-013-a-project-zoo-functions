const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return findSpecie;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmplyee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmplyee;
}

function createEmployee({ id, firstName, lastName },
  // seu código aqui
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

function isManager(id) {
  // seu código aqui
  const findManager = employees
    .some((employee) => employee.managers.includes(id));
  return findManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(animal) {
  // seu código aqui
  const newObject = {};
  species.forEach((specie) => {
    newObject[specie.name] = specie.residents.length;
  });
  if (animal === undefined) return newObject;
  return newObject[animal];
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
