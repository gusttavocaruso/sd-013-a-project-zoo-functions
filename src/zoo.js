const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    const arrayVazio = [];
    return arrayVazio;
  }

  const array = [];
  ids.forEach((id) => {
    const found = data.species.find((e) => e.id === id);
    array.push(found);
  });

  return array;
}

function getAnimalsOlderThan(animal, age) {
  const found = data.species.find((e) => {e.name = animal});
  const check = found.residents.every((e) => {e.age >= age});

  return check;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    const arrayVazio = [];
    return arrayVazio;
  }

  const found = data.employeeName.find((e) => {e.firstName = employeeName || e.lastName === employeeName});

  return found;
}

function createEmployee(personalInfo, associatedWith) {
  const create = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };

  return create;
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
