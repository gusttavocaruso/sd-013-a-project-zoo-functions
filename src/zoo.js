const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const newAnimals = [];
  if (!ids) return [];

  ids.forEach((id) => {
    const findId = species.find((specie) => specie.id === id);
    newAnimals.push(findId);
  });

  return newAnimals;
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;

  return species
    .find((specie) => specie.name === animal).residents
    .every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const { employees } = data;
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
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
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
