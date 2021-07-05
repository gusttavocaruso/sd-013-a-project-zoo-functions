const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const checkEmployee = (employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName));
  if (checkEmployee !== undefined) {
    return checkEmployee;
  }

  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const criadoEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return criadoEmployee;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
  return newEmployee;
}

function countAnimals(specie) {
  if (specie !== undefined) {
    const contAnimal = species.find((animal) => animal.name === specie).residents.length;
    return contAnimal;
  }
  return 0;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants !== undefined) {
    const keys = Object.values(prices);
    const { Child = '0' } = entrants;
    const { Adult = '0' } = entrants;
    const { Senior = '0' } = entrants;
    const adult = Adult * keys[0];
    const senior = Senior * keys[1];
    const child = Child * keys[2];
    return child + adult + senior;
  }

  return 0;
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
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    prices[key] = Math.round((prices[key]) * (1 + (percentage / 100)) * 100) / 100;
  });
  return keys;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

// countAnimals('snakes');

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
