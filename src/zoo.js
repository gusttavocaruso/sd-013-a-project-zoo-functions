const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return []; // Se a função for chamada sem parâmetro...
  const speciesReturn = [];
  ids.filter((id) => data.species.forEach((idSpecies) => {
    if (idSpecies.id === id) speciesReturn.push(idSpecies);
  }));
  return speciesReturn;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const accessSpecies = data.species;
  const AnimalsAccess = accessSpecies.filter((namesAccess) => namesAccess.name === animal);
  return AnimalsAccess[0].residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const searchEmployee = data.employees
    .find((name) => (name.firstName === employeeName) || (name.lastName === employeeName));
  return searchEmployee;
  // Usa-se o find, pois deseja-se achar o primeiro correspondente. Com filter não funciona.
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // Percebi que a estrutura desejada, é praticamente a que é passada nos parâmetros.
  // Uma lógica interessante aqui é utilizar o spread operator. Para espalhar os elementos
  // de cada objeto passado como parametro.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const office = data.employees.find((manager) =>
    manager.managers.find((managerID) => managerID === id));
  if (office) return true;
  return false;
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
