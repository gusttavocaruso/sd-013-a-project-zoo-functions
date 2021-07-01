const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { 
  return species
    .filter((specie) => ids
      .find(id => specie.id === id));
  }

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
      .every(resident => resident.age >= age);
} 

function getEmployeeByName(employeeName) {
 const search = employees.find((employee) => (employeeName === employee.firstName) || (employeeName === employee.lastName));
 return search === undefined ? {} : search;
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith}
}

function isManager(id) {
  const employee = employees.find((employee) => employee.id === id)
  return employee.managers.length <= 1 ? true : false; 
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id, 
    firstName, 
    lastName, 
    managers,
    responsibleFor,
  }
  return employees.push(obj)
}

/* console.log(1,'a','b','adad'); */

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
