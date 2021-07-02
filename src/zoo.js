const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, ageAnimal) {
  const animalName = data.species.filter(({ name }) => name === animal);
  const residentsAge = animalName.map(({ residents }) => residents.map((age) => age.age));

  return residentsAge[0].every((ages) => ages >= ageAnimal);
}

function getEmployeeByName(employ) {
  if (!employ) {
    return {};
  }
  if (data.employees.find(({ firstName }) => firstName === employ) !== undefined) {
    return data.employees.find(({ firstName }) => firstName === employ);
  }
  return data.employees.find(({ lastName }) => lastName === employ);
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = Object.assign(personalInfo, associatedWith);
  data.employees.push(newObj);
  return newObj;
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
