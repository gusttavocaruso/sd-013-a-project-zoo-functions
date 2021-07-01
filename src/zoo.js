const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
function getSpeciesByIds(...ids) {
  // seu código aqui
}

// Requisito 2
function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

// Requisito 4
function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

// Requisito 5
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const EmployeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(EmployeeAdd);
}

// Requisito 7
function countAnimals(specie) {
  // seu código aqui
}

// Requisito 8
function calculateEntry(entrants) {

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
