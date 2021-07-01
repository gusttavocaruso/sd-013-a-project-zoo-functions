const { species, employees } = require('./data');
const data = require('./data');

// REQUISITO 1
function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.includes(element.id));
}

// REQUISITO 2
function getAnimalsOlderThan(animal, age) {
  return species.filter((tipo) => tipo.name.includes(animal))[0]
    .residents.every((element) => element.age >= age);
}

// REQUISITO 3
function getEmployeeByName(employeeName) {
  const employ = {};
  if (employeeName === undefined) {
    return employ;
  }
  return employees.find((people) =>
    people.firstName.includes(employeeName) || people.lastName.includes(employeeName));
}

// REQUISITO 4
function createEmployee(personalInfo, associatedWith) {
  employees.push({
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  });
  return employees.find((people) => people.id.includes(personalInfo.id));
}

// REQUISITO 5
function isManager(id) {
  return employees.some((managers) =>
    managers.managers.some((people) => people.includes(id)));
}

// REQUISITO 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor,
  });
}

function countAnimals(specie) {
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
