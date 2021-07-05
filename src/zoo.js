const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const speciesById = [];
  data.species.forEach((eachSpecie) => {
    ids.forEach((id) => {
      if (eachSpecie.id === id) {
        speciesById.push(eachSpecie);
      }
    });
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimalName = data.species.find((specie) => specie.name === animal);
  return getAnimalName.residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
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
