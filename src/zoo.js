const data = require('./data');

const { species } = data;
const { employees } = data;
const { prices } = data;

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const search = species.filter((specie) => ids.includes(specie.id));
  return search;
}

function getAnimalsOlderThan(animal, age) {
  const searchName = species.find((specie) => specie.name === animal);
  const searchAge = searchName.residents.every((resident) => resident.age >= age);
  return searchAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const get = employees.find((param) => employeeName === param.firstName || employeeName === param.lastName);
  return get;
}

function createEmployee(personalInfo, associatedWith) {
  const newCollaborator = { ...personalInfo, ...associatedWith };
  return newCollaborator;
}

function isManager(id) {
  const collaborator = employees.some((employee) => employee.managers.includes(id));
  return collaborator;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesAnimal) {
  const totalAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (!speciesAnimal) {
    return totalAnimals;
  }
  return totalAnimals(speciesAnimal);
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Chil = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Chid * data.prices.Child;
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
