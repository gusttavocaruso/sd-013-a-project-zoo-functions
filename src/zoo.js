const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.some((id) => element.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal).residents
    .every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const criarObjeto = { ...personalInfo, ...associatedWith };
  return criarObjeto;
}

function isManager(id) {
  return employees
    .map((element) => element.managers)
    .reduce((acumulador, array) => [...acumulador, ...array], [])
    .some((manager) => manager === id);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees;
}

function countAnimals(species1) {
  if (species1) {
    return species
      .find((especie) => especie.name === species1).residents.length;
  }
  const obj = {};
  species.map((element) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
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
