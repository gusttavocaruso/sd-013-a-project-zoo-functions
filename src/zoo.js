const { species, prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const specieAnimal = species.find((specie) => specie.name === animal);
  const specieAge = specieAnimal.residents.every((resident) => resident.age >= age);
  return specieAge;
}

function getEmployeeByName(employeeName) {
  const employer = employees.find((employerName) => (
    employerName.firstName === employeeName || employerName.lastName === employeeName));
  return employeeName === undefined ? {} : employer;
}

function createEmployee(personalInfo, associatedWith) {
  const personalObj = {};
  Object.assign(personalObj, personalInfo, associatedWith);
  return personalObj;
}

function isManager(id) {
  const personal = employees.some((employer) => employer.managers.includes(id));
  return personal;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesId) {
  const animalsTotal = {};
  species.forEach(({ name, residents }) => { animalsTotal[name] = residents.length; });
  const specieName = species.find((specie) => specie.name === speciesId);
  return speciesId === undefined ? animalsTotal : specieName.residents.length;
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
