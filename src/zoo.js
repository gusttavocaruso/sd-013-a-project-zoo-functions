const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const littleAnimal = species.filter((anim) => anim.name === animal);
  return littleAnimal.every((animalResid) =>
    animalResid.residents.every((old) => old.age >= age));
}

function getEmployeeByName(employeeName = {}) {
  const enp = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return enp === undefined ? {} : enp;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((manager) =>
    manager.managers.some((d) => d === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  return specie !== undefined
    ? species.find((a) => a.name === specie).residents.length : {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
}

function calculateEntry(entrants = {}) {
  return (entrants.Adult === undefined ? 0 : entrants.Adult) * prices.Adult
  + (entrants.Child === undefined ? 0 : entrants.Child) * prices.Child
  + (entrants.Senior === undefined ? 0 : entrants.Senior) * prices.Senior;
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
