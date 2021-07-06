const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  // return ids.map(id => especies.find((especie) => especie.id === id));
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  let result = species.find((specie) => specie.name === animal);
  if (result) result = result.residents.every((specie) => (specie.age >= age));
  return result;
}

function getEmployeeByName(employeeName) {
  // if (employeeName === undefined) return {};
  if (!employeeName) return {};
  return employees.find((employee) => { 
    return employee.firstName === employeeName || employee.lastName === employeeName});
}

function createEmployee(personalInfo, associatedWith) {
  // return Object.assign({}, personalInfo, associatedWith);
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(speciess) {
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
