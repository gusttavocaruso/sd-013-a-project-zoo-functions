const data = require('./data');
// comecando o projeto

function getSpeciesByIds(...ids) {
  const blankArr = [];
  if (ids === null) {
    return blankArr;
  }
  const speciesArr = data.species.filter((specie) => ids.includes(specie.id));
  return speciesArr;
}

function getAnimalsOlderThan(animal, age) {
  const specieToAge = data.species.filter((specie) => specie.name === animal);
  const minimalAge = specieToAge[0].residents.find((resident) => resident.age < age);
  return !minimalAge;
}

function getEmployeeByName(name) {
  const blankObj = {};
  if (name === undefined) {
    return blankObj;
  }
  const epy = data.employees.filter((e) => name === e.firstName || name === e.lastName);
  return epy[0];
}

function createEmployee(personalInfo, associatedWith) {
  const newEmploye = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmploye;
}

function isManager(id) {
  const manager = [];
  data.employees.forEach((manajj) => manager.push(...manajj.managers));
  const result = manager.includes(id);
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
