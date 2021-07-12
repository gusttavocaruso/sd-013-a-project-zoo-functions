const data = require('./data');

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));

  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimalName = species.find((specie) => specie.name === animal);
  const verifyAnimalAge = findAnimalName.residents.every((resident) => resident.age >= age);

  return verifyAnimalAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const empName = employees
    .find((employe) => employeeName === employe.firstName || employeeName === employe.lastName);

  return empName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.find((employe) => employe.managers.includes(id));
  if (manager) return true;

  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const emp = data.employees.push({ id, firstName, lastName, managers, responsibleFor });

  return emp;
}
function countAnimals(speciesNames) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;

    return acc;
  }, {});

  if (!speciesNames) return allAnimals;

  return allAnimals[speciesNames];
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
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldest[0]);
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
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
