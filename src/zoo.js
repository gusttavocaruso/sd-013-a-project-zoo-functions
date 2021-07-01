const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  const listSpecie = [];
  if (ids.length) {
    ids.forEach((item) => {
      listSpecie.push(species.find((specie) => specie.id === item));
    });
    return listSpecie;
  }
  return listSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal);
  return getAnimal.residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return employees.find((emp) => [emp.firstName, emp.lastName].includes(employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  return employees.some((emp) => emp.id === id && emp.managers.includes(stephanieId));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesName) {
  if (!speciesName) {
    return species.reduce((animals, specie) => {
      const allAnimals = animals;
      allAnimals[specie.name] = specie.residents.length;
      return allAnimals;
    }, {});
  }
  const { residents } = species.find((specie) => specie.name === speciesName);
  return residents.length;
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
