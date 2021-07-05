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

const { employees, species, prices, hours } = data;

function getSpeciesByIds(...ids) {
  if (!ids || !ids.length) return [];
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((a) => a.name === animal).residents.every(((r) => r.age >= age));
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((e) => {
    if (e.firstName === employeeName) return true;
    if (e.lastName === employeeName) return true;
    return false;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((e) => e.managers.some((ids) => ids === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(animalSpecies) {
  if (animalSpecies) {
    return species.find((a) => a.name === animalSpecies)
      .residents.length;
  }
  const countAll = {};
  species.forEach((a) => {
    countAll[a.name] = a.residents.length;
  });
  return countAll;
}

function calculateEntry({ Adult, Senior, Child } = 0) {
  const calc = [];
  if (Adult) calc.push(Adult * prices.Adult);
  if (Senior) calc.push(Senior * prices.Senior);
  if (Child) calc.push(Child * prices.Child);
  return calc.reduce((a, c) => a + c, 0);
}

// Feito com Erick Santos
function createAnimalMap(param, cardinalPoints) {
  return cardinalPoints.map((cardinalPoint) => ([
    cardinalPoint,
    species.filter((specie) => specie.location === cardinalPoint)
      .map((animal) => {
        const residents = animal.residents.map((resident) => resident.name);
        if (param === 'no-options') return animal.name;
        if (param === 'include-names') {
          return ({ [animal.name]: residents });
        }
        return ({ [animal.name]: residents.sort() });
      }),
  ]));
}

// Feito com Erick Santos
function getAnimalMap(options) {
  const cardinalPoints = ['NE', 'NW', 'SE', 'SW'];
  console.log(options);
  if (!options) return Object.fromEntries(createAnimalMap('no-options', cardinalPoints));
  if (options.includeNames) {
    if (options.sorted) {
      return Object.fromEntries(createAnimalMap('sorted', cardinalPoints));
    }
    return Object.fromEntries(createAnimalMap('include-names', cardinalPoints));
  }
}

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const msg = ['CLOSED'];
  days.slice(0, -1).forEach((e, i) => (
    msg.push(`Open from ${hours[days[i]].open}am until ${hours[days[i]].close - 12}pm`)));
  msg.push(msg.shift());

  const schedule = Object.assign(...days.map((k, i) => ({ [k]: msg[i] })));

  if (!dayName) return schedule;
  const day = Object.entries(schedule).find((e) => e[0] === dayName);
  return {
    [dayName]: day[1],
  };
}

function getOldestFromFirstSpecies(id) {
  const firstID = employees.find((e) => e.id === id).responsibleFor[0];
  const oldest = Object.values(species.find((a) => a.id === firstID).residents
    .sort((a, b) => b.age - a.age)[0]);
  return oldest;
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    prices[key] = Math.round((prices[key] * (1 + (percentage / 100))) * 100) / 100;
  });
}

function createArray(coverageId) {
  const list = {};
  const employee = employees.find((e) => e.id === coverageId);
  const animals = [];
  employee.responsibleFor.forEach((a) => {
    animals.push(species.find((s) => s.id === a).name);
  });
  list[`${employee.firstName} ${employee.lastName}`] = animals;
  return list;
}

function getEmployeeCoverage(idOrName) {
  const list = {};
  employees.forEach((e) => {
    const animals = [];
    e.responsibleFor.forEach((a) => {
      animals.push(species.find((s) => s.id === a).name);
    });
    list[`${e.firstName} ${e.lastName}`] = animals;
  });
  if (!idOrName) return list;
  if (/\d/.test(idOrName)) return createArray(idOrName);
  return Object.entries(list).map((e) => ({ [e[0]]: e[1] }))
    .find((o) => Object.keys(o)[0].includes(idOrName));
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
