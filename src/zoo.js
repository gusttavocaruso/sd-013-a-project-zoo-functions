const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const arraySpecies = [];
  ids.forEach((id) => {
    const espcSpecies = species.find((specie) => specie.id === id);
    arraySpecies.push(espcSpecies);
  });
  return arraySpecies;
}

function getAnimalsOlderThan(animal, age) {
  const specieAnimal = species.filter((specie) => (
    specie.name === animal));
  const specieRes = specieAnimal[0].residents.filter((residents) => residents.age < age);
  return specieRes.length === 0;
}

function getEmployeeByName(employeeName) {
  const employeeFindFirst = employees.filter((employee) => employee.firstName === employeeName);
  const employeeFindLast = employees.filter((employee) => employee.lastName === employeeName);
  if (employeeFindFirst.length !== 0) {
    return employeeFindFirst[0];
  }
  if (employeeFindLast[0] !== undefined) {
    return employeeFindLast[0];
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  const idSearch = employees.filter((employee) => employee.id === id);
  return idSearch[0].managers.length <= 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeToAdd = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employeeToAdd);
}

function countAnimals(species1) {
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
