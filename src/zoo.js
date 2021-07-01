const { species, employees, prices } = require('./data');
const data = require('./data');

// REQUISITO 1
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

// REQUISITO 2 _______________________________________________________________________
function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// REQUISITO 3 _______________________________________________________________________
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName));
}

// REQUISITO 4 _______________________________________________________________________
function createEmployee(personalInfo, associatedWith) {
  const newObject = { ...personalInfo, ...associatedWith };
  return newObject;
}

// REQUISITO 5 _______________________________________________________________________
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// REQUISITO 6 _______________________________________________________________________
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newObject);
}

// REQUISITO 7 _______________________________________________________________________
function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

// REQUISITO 8 _______________________________________________________________________
function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const totalPrice = Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
  return totalPrice;
}

// REQUISITO 9 _______________________________________________________________________
function getAnimalMap(options) {
  // seu código aqui
}

// REQUISITO 10 _______________________________________________________________________
function getSchedule(dayName) {
  // seu código aqui
}

// REQUISITO 11 _______________________________________________________________________
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

// REQUISITO 12 _______________________________________________________________________
function increasePrices(percentage) {
  // seu código aqui
}

// REQUISITO 13 _______________________________________________________________________
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
