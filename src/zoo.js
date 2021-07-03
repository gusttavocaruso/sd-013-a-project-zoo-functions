const data = require('./data');

function getSpeciesByIds(ids) {
  // seu código aqui
  return data.species.filter((animal) => animal.id === ids);
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName !== true) {
    return data.employees.find((nome) => nome.lastName === employeeName
      || nome.firstName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  // seu código aqui
  return data.employees.find((indexItem) => indexItem.id === id)
    .managers.some((cargo) => cargo === '9e7d4524-363c-416a-8759-8aa7e50c0992');
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
