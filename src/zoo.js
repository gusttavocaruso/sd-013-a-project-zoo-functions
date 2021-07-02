const { employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((param) => data.species.find((specie) => param === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = data.species.find((specie) => specie.name === animal);
  return searchAnimal.residents.every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some((idManager) => idManager.managers.includes(id)); // consulta ao site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addNewEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(addNewEmployee);
}

function countAnimals(species) {
  const allSpecies = {
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
  return species === undefined ? allSpecies : allSpecies[species];
}

function calculateEntry(entrants = {}) {
  const entrantsKey = Object.keys(entrants);
  return entrantsKey.reduce((acc, cur) => acc + prices[cur] * entrants[cur], 0);
}

function getAnimalMap(options) {
  // dificil..requer atenção
}

function getSchedule(dayName) {
  const hour = data.hours;
  const final = {};
  const schedule = {
    Tuesday: `Open from ${hour.Tuesday.open}am until ${hour.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hour.Wednesday.open}am until ${hour.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hour.Thursday.open}am until ${hour.Thursday.close - 12}pm`,
    Friday: `Open from ${hour.Friday.open}am until ${hour.Friday.close - 12}pm`,
    Saturday: `Open from ${hour.Saturday.open}am until ${hour.Saturday.close - 12}pm`,
    Sunday: `Open from ${hour.Sunday.open}am until ${hour.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  final[dayName] = schedule[dayName];
  return !dayName ? schedule : final;
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
