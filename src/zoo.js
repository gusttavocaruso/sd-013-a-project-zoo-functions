const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const arrOut = [];
  ids.forEach((idIn) => {
    arrOut.push(species.find((specie) => specie.id === idIn));
  });
  return arrOut;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents.every((resident) =>
    resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const objAnimals = {};
    species.forEach((item) => { objAnimals[item.name] = item.residents.length; });
    return objAnimals;
  }
  return species.find((item) => item.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, curr) =>
    acc + (entrants[curr] * prices[curr]), 0);
}

function getAnimalMap({ includeNames = false, sorted = true, sex = 'all' }) {
  const locate = (coord) => species.filter((specie) => specie.location === coord);
  const baseObj = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(baseObj).forEach((key) => {
    baseObj[key] = locate(key).map((item) => item.name);
  });
  return baseObj;
}

function getSchedule(dayName) {
  const objOut = {};
  Object.keys(hours).forEach((day) => {
    if (hours[day].open === 0) {
      objOut[day] = 'CLOSED';
    } else {
      objOut[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    }
  });
  if (dayName) {
    const dayObj = {};
    dayObj[dayName] = objOut[dayName];
    return dayObj;
  }
  return objOut;
}

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((emplo) => emplo.id === id).responsibleFor[0];
  const animalArr = species.find((specie) => specie.id === animalId).residents;
  const { age, name, sex } = animalArr.reduce((older, curr) =>
    (older.age < curr.age ? curr : older));
  return [name, sex, age];
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
