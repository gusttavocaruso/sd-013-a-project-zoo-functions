const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => {
    return species.find((specie) => specie.id === id)
  })
}

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) => specie.name === animal).
          every((specie) => specie.residents.
          every((animal) => animal.age > age));
}

function getEmployeeByName(employeeName) {
  const result = employees.find((employee) => (employee.firstName === employeeName ||
    employee.lastName === employeeName));
  return (result === undefined) ? {} : result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith
  }
}

function isManager(id) {
  return employees.some((employee) => employee.managers.
          some((managerID) => managerID === id))
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers: [...managers],
    responsibleFor: [...responsibleFor]
  });
}

function countAnimals(specieName) {
  let result = {};
  if (specieName === undefined) {
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    })
    return result;
  }
  return species.find((specie) => specie.name === specieName).residents.length;
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
