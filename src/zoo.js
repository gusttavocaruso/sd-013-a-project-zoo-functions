const data = require('./data');

const { species, employees, prices } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((specie) => specie.name === animal);
  const verifyAnimalAge = animalName.residents.every((resident) => resident.age >= age);

  return verifyAnimalAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.keys(personalInfo).forEach((key, item) => {
    newObject[key] = Object.values(personalInfo)[item];
  });
  Object.keys(associatedWith).forEach((key, item) => {
    newObject[key] = Object.values(associatedWith)[item];
  });
  return newObject;
}

function isManager(id) {
  const getManager = employees.find((employ) => employ.managers.includes(id));
  if (getManager) return true;

  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  const animais = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;

    return acc;
  }, {});

  if (!speciesName) return animais;

  return animais[speciesName];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
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
  const chave = Object.keys(prices);
  chave.forEach((key) => {
    chave[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
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
