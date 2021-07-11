const data = require('./data');

// console.log(data.species);

function getSpeciesByIds(...ids) {
  return data.species
    .filter((animals) => ids.includes(animals.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animals) => animal === animals.name).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const createColaborator = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };

  return createColaborator;
}

function isManager(id) {
  return data.employees
    .some((employee) => employee.managers
      .find((idManager) => id === idManager));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const info = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(info);
}

function countAnimals(species) {
  if (!species) {
    return data.species
      .reduce((accumulator, animals) => {
        accumulator[animals.name] = animals.residents.length;

        return accumulator;
      }, {});
  }

  return data.species
    .find((animals) => animals.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const categories = Object.keys(entrants);

  return categories
    .reduce((accumulator, category) => accumulator + entrants[category] * data.prices[category], 0);
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
