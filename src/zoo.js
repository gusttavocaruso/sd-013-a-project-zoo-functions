// REQUIRIMENTOS .DATA-
const data = require('./data');

const { species } = require('./data');

const { employees } = data;

const { prices } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal);
  const checkAge = getAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const eN = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
  return eN;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const eManager = data.employees.find((employee) => employee.managers.includes(id));
  if (eManager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmp;
}

// parametro alterado devido a erro de escopo no lint
function countAnimals(especies) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});

  if (!especies) {
    return allAnimals;
  }
  return allAnimals[especies];
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const time = Object.keys(data.hours);
  const agenda = time.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  agenda.Monday = 'CLOSED';
  if (time.includes(dayName) === true) {
    return { [dayName]: agenda[dayName] };
  }
  return agenda;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const number = 1 + (percentage / 100);
  const value = Object.keys(prices);
  value.forEach((key) => {
    const priceIncreased = prices[key] * number;
    const priceRounded = Math.round(priceIncreased * 100) / 100;
    prices[key] = priceRounded;
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
