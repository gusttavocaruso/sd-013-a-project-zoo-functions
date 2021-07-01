const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const filterById = species.filter((element) => element.id === ids[0] || element.id === ids[1]);
  return filterById;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((element) => (element.name === animal));
  return findAnimal.residents.every((check) => check.age > age);
}

function getEmployeeByName(employeeName) {
  const findEmployee = employees
    .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return (!findEmployee) ? {} : findEmployee;
}

function createEmployee({ id, firstName, lastName }, associatedWith) {
  return { id, firstName, lastName, ...associatedWith };
}

function isManager(id) {
  const ManagersArray = employees.map((element) => element.managers).join();
  return console.log(ManagersArray.split().some((element2) => element2.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(obj);
}

function countAnimals(specie) {
  if (!specie) {
    const obj = {};
    species.forEach(element => obj[element.name] = element.residents.length);
    return obj;
  }
  const findSpecie = species.find((element) => element.name === specie).residents.length;
  return findSpecie;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const total = (Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior);
  return total;
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

