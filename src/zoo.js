const data = require('./data');

const { prices, species, employees } = data;

function getSpeciesByIds(...ids) {
  const newAnimals = [];
  if (!ids) return [];

  ids.forEach((id) => {
    const findId = species.find((specie) => specie.id === id);
    newAnimals.push(findId);
  });

  return newAnimals;
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees
    .some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(theSpecie) {
  if (!theSpecie) {
    const theAnimals = {};
    species.forEach((specie) => { theAnimals[specie.name] = specie.residents.length; });

    return theAnimals;
  }

  return species
    .find((specie) => specie.name === theSpecie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  return Object.keys(entrants)
    .reduce((acumulator, theEntrant) => acumulator + (entrants[theEntrant] * prices[theEntrant]), 0);
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
