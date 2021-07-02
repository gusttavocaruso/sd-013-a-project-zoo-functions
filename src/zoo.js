const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui //
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal).residents
    .every((specieObtained) => specieObtained.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const returnedEmployee = employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return !returnedEmployee ? {} : returnedEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const createEmployeeObj = () => ({ id, firstName, lastName, managers, responsibleFor });
  const employeeObject = createEmployeeObj();
  employees.push(employeeObject);
}

function countAnimals(specieName) {
  // seu código aqui
  if (specieName) {
    return species.find((specie) => specie.name === specieName).residents.length;
  }
  const countAnimalsObj = {};
  species.forEach((resident) => { countAnimalsObj[resident.name] = resident.residents.length; });
  return countAnimalsObj;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return Number.isNaN(price) ? 0 : price;
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
