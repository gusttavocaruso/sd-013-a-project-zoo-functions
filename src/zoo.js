const data = require('./data');
const { species: speciesData, employees, prices, hours } = require('./data');

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
         .find((employee) => (employee.firstName === employeeName) || (employee.lastName === employeeName));
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
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  return Object.keys(entrants).reduce((accumulator, currentValue) =>
         accumulator + (entrants[currentValue] * prices[currentValue]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const arrayHours = Object.entries(hours).map((hour) => {
    if (hour[1].open !== 0) {
      return [hour[0], `Open from ${hour[1].open}am until ${hour[1].close - 12}pm`];
    }
    return [hour[0], 'CLOSED'];
  });
  if (dayName === undefined) {
    return Object.fromEntries(arrayHours);
  }
  return Object.fromEntries(arrayHours.filter((hour) => hour[0] === dayName));
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
