const data = require('./data');

function getSpeciesByIds(...rest) {
  const array = [];
  if (rest.length > 0) {
    rest.forEach((id) => {
      const dadosSpecies = data.species.filter((objA) => objA.id === id);
      array.push(...dadosSpecies);
    });
  }
  return array;
}

function getAnimalsOlderThan(animal, age) {

}

function getEmployeeByName(employeeName) {

}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {

}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {

}

function countAnimals(species) {

}

function calculateEntry(entrants) {

}

function getAnimalMap(options) {

}

function getSchedule(dayName) {

}

function getOldestFromFirstSpecies(id) {

}

function increasePrices(percentage) {

}

function getEmployeeCoverage(idOrName) {

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
