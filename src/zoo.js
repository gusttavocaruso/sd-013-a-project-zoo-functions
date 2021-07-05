const { species, employees, prices, hours } = require('./data');
const data = require('./data');

// REQUISITO 1
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

// REQUISITO 2 _______________________________________________________________________
function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// REQUISITO 3 _______________________________________________________________________
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName));
}

// REQUISITO 4 _______________________________________________________________________
function createEmployee(personalInfo, associatedWith) {
  const newObject = { ...personalInfo, ...associatedWith };
  return newObject;
}

// REQUISITO 5 _______________________________________________________________________
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// REQUISITO 6 _______________________________________________________________________
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newObject);
}

// REQUISITO 7 _______________________________________________________________________
function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

// REQUISITO 8 _______________________________________________________________________
function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const totalPrice = Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
  return totalPrice;
}

// REQUISITO 9 _______________________________________________________________________
function getAnimalMap(options) {
  // seu código aqui
}

// REQUISITO 10 _______________________________________________________________________
function checkPamameters(findDay) {
  return findDay.reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
}

function getSchedule(dayName) {
  const findDay = Object.entries(hours);
  if (!dayName) return checkPamameters(findDay);

  const days = findDay.find((day) => day[0] === dayName);
  const object = {};

  if (dayName === 'Monday') {
    object[days[0]] = 'CLOSED';
    return object;
  }
  object[days[0]] = `Open from ${days[1].open}am until ${days[1].close - 12}pm`;
  return object;
}

// REQUISITO 11 _______________________________________________________________________
function getOldestFromFirstSpecies(id) {
  const person = employees.find((idP) => id === idP.id);
  const animal = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

// REQUISITO 12 _______________________________________________________________________
function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (1 + percentage / 100) * 100) / 100;
  prices.Senior = Math.round(prices.Senior * (1 + percentage / 100) * 100) / 100;
  prices.Child = Math.round(prices.Child * (1 + percentage / 100) * 100) / 100;
}

// REQUISITO 13 _______________________________________________________________________
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
