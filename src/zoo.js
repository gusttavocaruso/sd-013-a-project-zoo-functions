const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // if (!ids) { return []; }
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  const xablau = species.find((specie) => animal === specie.name);
  const { residents } = xablau;
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manages = employees.filter(({ managers }) => managers
    .some((manager) => manager === id));
  return (manages.length >= 1);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species.find(({ name }) => name === specie).residents.length;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function calculateEntry(entrants) {
  if (entrants === {} || !entrants) return 0;
  Object.keys(entrants)
    .reduce((acc, cur) => acc + prices[cur] * entrants[cur]);
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
  const operand = (percentage * 0.01) + 1;
  prices.Child = Math.round((prices.Child * operand) * 100) / 100;
  prices.Adult = Math.round((prices.Adult * operand) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * operand) * 100) / 100;
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
