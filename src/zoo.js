// const { species } = require("./data");
const data = require("./data");

function getSpeciesByIds(...ids) {
  const filtered = [];
  // busca cada id passado
  ids.forEach((id) =>
    // add cada especie igual no array
    filtered.push(data.species.find((specie) => specie.id === id))
  );
  return filtered;
}

function getAnimalsOlderThan(animal, age) {
  const animalOlder = data.species.filter((specie) => {
    return specie.name === animal;
  });
  const verify = data.species.forEach((element) => {
    if (element.name === animalOlder && element.residents.age > age)
      return verify;
  });
  return animal;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const found = data.employees.find((item) => {
    return item.firstName === employeeName || item.lastName === employeeName;
  });
  return found;
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
