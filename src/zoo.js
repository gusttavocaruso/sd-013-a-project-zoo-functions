const data = require('./data');
const { hours } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesIds = [];

  ids.forEach((id) => {
    const searchId = data.species.filter((specie) => specie.id === id);
    speciesIds.push(...searchId);
  });
  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => (employee.firstName === employeeName)
    || (employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees
    .some((employee) => employee.managers
      .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addNewEmployee);
}

function countAnimals(species2) {
  if (!species2) {
    const speciesObj = {};
    data.species.forEach((specie) => { speciesObj[specie.name] = specie.residents.length; });
    return speciesObj;
  }
  return data.species.find((specie) => specie.name === species2).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  return Object.keys(entrants)
    .reduce((accumulator, currenValue) =>
      accumulator + entrants[currenValue] * data.prices[currenValue], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName = 0) {
  const openClosed = {};
  if (dayName === 0) {
    Object.keys(hours).forEach((key) => {
      openClosed[key] = key === 'Monday' ? 'CLOSED'
        : `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    });
    return openClosed;
  }
  openClosed[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return openClosed;
}

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === getEmployee.responsibleFor[0]);
  const oldestSpecie = firstSpecie.residents.sort((x, y) => y.age - x.age)[0];
  return Object.values(oldestSpecie);
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
