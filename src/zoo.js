const { species, employees, prices } = require('./data');
const data = require('./data');

// requisito 1 check
function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((idArray) => species.find((specie) => specie.id === idArray));
}

// requisito 2 check
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

// requisito 3 check
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

// requisito 4 check
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newE = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newE;
}

// requisito 5 check
function isManager(id) {
  // seu código aqui,
  return employees.some((employee) => employee.managers.includes(id));
}

// requisito 6 check
function addEmployee(id, firstName, lastName, managers =[], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

// requisito 7 check
function countAnimals(Specie) {
  // seu código aqui
  const object = {};
  species.forEach((specie) => {
    object[specie.name] = specie.residents.length;
  });

  if (Specie === undefined) {
    return object;
  }
  return object[Specie];
}

// requisito 8 check
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const calculate = ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
  return calculate;
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
