const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {//1
  // seu código aqui
  return ids.map((idArray) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {//2
  // seu código aqui
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {//3
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  return employees.find((employees) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {//4
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newE = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newE;
}

function isManager(id) {//5
  // seu código aqui,
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {//6
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
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
