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
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
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
