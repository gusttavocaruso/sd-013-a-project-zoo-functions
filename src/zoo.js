const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const speciesById = [];

  ids.forEach((id) => {
    const result = species.filter((specie) => specie.id === id);
    speciesById.push(...result);
  });

  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const currentSpecie = species.find((specie) => specie.name === animal);

  const { residents } = currentSpecie;
  const hasMinAge = residents.every((resident) => resident.age > age);

  return hasMinAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const { employees } = data;
  const employeeData = employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return employee;
    }
    return null;
  });

  return employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;

  const currentEmployee = employees.some((employee) => {
    const { managers } = employee;
    const isInManagerList = managers.find((manager) => manager === id);

    return isInManagerList;
  });

  return currentEmployee;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  employees.push({ id, firstName, lastName, managers, responsibleFor });
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
