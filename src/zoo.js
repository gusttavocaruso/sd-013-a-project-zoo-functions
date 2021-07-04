const data = require('./data');

const { species, employees } = data;

function getSpeciesByIds(...args) {
  const newArray = [];
  args.forEach((element) => {
    const elemento = data.species.filter((specie) => species.id === element);
    newArray.push(...elemento);
  });
  return newArray;
}

function getAnimalsOlderThan(animal, age) {

}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
  // seu código aqui
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
