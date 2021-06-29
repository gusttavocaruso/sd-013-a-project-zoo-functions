const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrSpecie = [];
  ids.forEach((id) => data.species.forEach((specie) => {
    if (specie.id === id) arrSpecie.push(specie);
  }));
  return arrSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = data.species.filter((specie) => specie.name === animal);
  return selectedAnimal[0].residents.every((ser) => ser.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = data
    .employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName);
  const [funcionario] = employee;
  if (typeof funcionario === 'undefined') return {};
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
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
