/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');
const { hours, employees, species, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((getSpecies) => ids.some((id) => getSpecies.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((allAnimals) => {
  allAnimals.name === animal}).residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? data.employees.find((name) => name.firstName === employeeName || name.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  if (data.employees.find((name) => (name.id === id)).managers.length === 1) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const object = {};
    species.forEach((value) => {
      object[value.name] = value.residents.length;
    });
    return object;
  }

  return species.find((value) => value.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, currentValue) => acc + (currentValue[1] * data.prices[currentValue[0]]), 0);
}

function getAnimalMap(options = {}) {
 // seu código aqui
}

function getSchedule(dayName) {
  const schedule = {};

  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') schedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    else schedule[day] = 'CLOSED';
  });
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const animais = species.filter((specie) => specie.id === firstSpecie)[0].residents;
  const ages = [];
  animais.forEach((animal) => ages.push(animal.age));
  const oldAge = ages.reduce((acc, curr) => {
    if (acc > curr) return acc;
    return curr;
  }, 0);
  const string = animais.find((animal) => animal.age === oldAge);
  return Object.values(string);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((visit) => {
    prices[visit] = Math.round((prices[visit] + prices[visit] * (percentage / 100)) * 100) / 100;
  });
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
