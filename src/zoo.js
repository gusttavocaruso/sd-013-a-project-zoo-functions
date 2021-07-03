const data = require('./data');

function getSpeciesByIds(...listIds) {
  const arrayAnimals = [];
  listIds.forEach((id) => {
    const animalId = data.species.find((animalsId) => animalsId.id === id);
    arrayAnimals.push(animalId);
  });
  return arrayAnimals;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((each) => each.name === animal);
  return animals.residents.every((animalsAge) => animalsAge.age > age);
}

function getEmployeeByName(employeeName) {
  // if estava com null. Josue me explicou que eu teria que usar uma negação (!employeeName) ou comparar com undefined para retornar um boolean false.
  if (employeeName === undefined) {
    return {};
  }
  // havia colocado o escopo da minha arrowfunction entre {}. Josue me mostrou que eu deveria retirar as {} para que pudesse retornar um obj.
  return data.employees.find((each) => each.firstName === employeeName
  || each.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Feito com ajuda do Josue.
  return { ...personalInfo, ...associatedWith };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function isManager(id) {
  return data.employees.some((each) => each.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers=[], responsibleFor=[]) {
  const newEmployee = {id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
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
