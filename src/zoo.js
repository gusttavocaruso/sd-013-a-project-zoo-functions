const data = require('./data');

const { species } = data; // Importar o array species do arquivo data.js

const { employees } = data; // Importar o array employees do arquivo data.js

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));

  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimalName = species.find((specie) => specie.name === animal);
  const verifyAnimalAge = getAnimalName.residents.every((resident) => resident.age >= age);

  return verifyAnimalAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const emN = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);

  return emN;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const getManager = data.employees.find((employee) => employee.managers.includes(id));
  if (getManager) return true;

  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const setEmployee = data.employees.push({ id, firstName, lastName, managers, responsibleFor });

  return setEmployee;
}

function countAnimals(speciesNames) { // O nome do parâmetro precisou ser mudado devido a linha 3
  // seu código aqui
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;

    return acc;
  }, {});

  if (!speciesNames) return allAnimals;

  return allAnimals[speciesNames];
}

function calculateEntry(entrants) {
  // seu código aqui
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
