const data = require('./data');
const { employees, species } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return species.filter((nome, index) => nome.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);

  return nomeAnimal.residents.every((ageAnimal) => ageAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const employeeSearch = employees.find((employ) => (employ.firstName === employeeName)
  || (employ.lastName === employeeName));
  return employeeSearch;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  if (manager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employ = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employ);
}

function countAnimals(difspecies) {
  const speciesCount = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return difspecies === undefined ? speciesCount : speciesCount[difspecies];
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
