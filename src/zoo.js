const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, i) =>
    specie.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  const compareName = species.find((specie) => (specie.name === animal));
  return compareName.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newPerson);
}

function countAnimals(speciesParam) {
  const allAnimals = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (!speciesParam) return allAnimals;
  return allAnimals[speciesParam];
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

// váriavel para guardar a primeira condição do requisito
const shedule = (hourKeys) => hourKeys.reduce((acc, curr) => {
  if (curr[1].open === 0 && curr[1].close === 0) {
    acc[curr[0]] = 'CLOSED';
    return acc;
  }
  acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
  return acc;
}, {});

function getSchedule(dayName) {
  const hourKeys = Object.entries(hours);
  const days = hourKeys.find((key) => key[0] === dayName);
  const obj = {};
  if (!dayName) {
    return shedule(hourKeys);
  } if (dayName === 'Monday') {
    obj[days[0]] = 'CLOSED';
    return obj;
  }
  obj[days[0]] = `Open from ${days[1].open}am until ${days[1].close - 12}pm`;
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const checked = employees.find((check) => check.id === id).responsibleFor[0];
  const objResidents = species.find((specie) => specie.id === checked).residents;
  const orderAnimals = objResidents.sort((a, b) => b.age - a.age)[0];
  return Object.values(orderAnimals);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
