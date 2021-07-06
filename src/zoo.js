const data = require('./data');

const { species } = data;
const { employees } = data;

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
  const get = employees.find((param) =>
    employeeName === param.firstName
 || employeeName === param.lastName);
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

function countAnimals(speciesNames) {
  const totalAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (!speciesNames) {
    return totalAnimals;
  }
  return totalAnimals[speciesNames];
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

}

function getOldestFromFirstSpecies(id) {
  const peopleEmployee = employees.find((employee) => employee.id === id);
  const specie1 = species.find((specie) => specie.id === peopleEmployee.responsibleFor[0]);
  const old = specie1.residents.sort((a, b) => b.age - a.age);
  return Object.values(old[0]);
}

function increasePrices(percentage) {
  const upPrices = Object.keys(data.prices);
  upPrices.forEach((price) => {
    data.prices[price] = Math.round(data.prices[price] * (1 + percentage / 100) * 100) / 100;
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
