const data = require('./data');
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const especiesId = species.filter((especie) => ids.includes(especie.id));
  return especiesId;
}

function getAnimalsOlderThan(animal, age) {
  const encontraAnimal = species.find((specie) => specie.name === animal);
  const verificaIdade = encontraAnimal.residents.every((resident) => resident.age >= age);
  return verificaIdade;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const funcionario = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const getManager = data.employees.find((employee) => employee.managers.includes(id));
  if (getManager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const dadosEmployee = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return dadosEmployee;
}

function countAnimals(speciesNames) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (!speciesNames) return allAnimals;
  return allAnimals[speciesNames];
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
