const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}
console.log(getSpeciesByIds());

// ===================

// Requisito 2
function getAnimalsOlderThan(animal, age) {
  const findSpecie = species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return findSpecie;
}

// ===================

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployee;
}

// ====================

// Requisito 4
function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

// function createEmployee2(personalInfo, associatedWith) {
//   const objeto = {
//     id: personalInfo.id,
//     firstName: personalInfo.firstName,
//     lastName: personalInfo.lastName,
//     managers: associatedWith.managers,
//     responsibleFor: associatedWith.responsibleFor,
//   };
//   return objeto;
// }

// ==================

// Requisito 5
function isManager(id) {
  const findManager = employees
    .some((employee) => employee.managers.includes(id));
  return findManager;
}

// ==================

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

// =================

// Requisito 7
function countAnimals(animal) {
  const newObject = {};
  species.forEach((specie) => {
    newObject[specie.name] = specie.residents.length;
  });
  if (animal === undefined) return newObject;
  return newObject[animal];
}

// Requisito 8
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

// Requisito 11
function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldest[0]);
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
