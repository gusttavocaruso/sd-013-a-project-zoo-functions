const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  // seu código aqui
  const getAnimalId = species.filter((animal) => ids.includes(animal.id));
  return getAnimalId;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((alive) =>
    alive.name === animal).residents.every((older) => older.age >= age);
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  // seu código aqui
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // seu código aqui
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push(
    { id,
      firstName,
      lastName,
      managers,
      responsibleFor },
  );
  // seu código aqui
}

function countAnimals(speciess) {
  const animals = species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
  // seu código aqui

  if (speciess === undefined) {
    return animals;
  }
  return animals[speciess];
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
