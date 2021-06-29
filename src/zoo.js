const data = require('./data');

function getSpeciesByIds(...args) {
  const array = [];
  if (args.length > 0) {
    args.forEach((animalsIds) => {
      const objectAnimals = data.species.filter((item) => item.id === animalsIds);
      array.push(...objectAnimals);
    });
    return array;
  }
  return array;
}

function getAnimalsOlderThan(animal, age) {
  let minAge = false;
  data.species.forEach(({ name, residents }) => {
    if (name === animal) {
      minAge = residents.every((item) => item.age >= age);
    }
  });
  return minAge;
}

function getEmployeeByName(employeeName = {}) {
  // seu código aqui
  let objectReturn = {};
  data.employees.forEach((employeeObject) => {
    if (employeeObject.firstName === employeeName || employeeObject.lastName === employeeName) {
      objectReturn = { ...employeeObject };
    }
  });
  return objectReturn;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
