const data = require('./data');

const { species, employees } = data;

function getSpeciesByIds(...rest) {
  const array = [];
  if (rest.length > 0) {
    rest.forEach((id) => {
      const dadosSpecies = species.filter((objA) => objA.id === id);
      array.push(...dadosSpecies);
    });
  }
  return array;
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimais = species.find((specie) => specie.name === animal);
  return nomeAnimais.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((fun) =>
    fun.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {

}

function countAnimals(speciesName) {

}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
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
