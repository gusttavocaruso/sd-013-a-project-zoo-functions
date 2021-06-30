const data = require('./data');

function getSpeciesByIds(...args) {
  const arr = [];
  if (args.length > 0) {
    args.forEach((animalsIds) => {
      const objectAnimals = data.species.filter((item) => item.id === animalsIds);
      arr.push(...objectAnimals);
    });
    return arr;
  }
  return arr;
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
  let objectReturn = {};
  data.employees.forEach((employeeObject) => {
    if (employeeObject.firstName === employeeName || employeeObject.lastName === employeeName) {
      objectReturn = { ...employeeObject };
    }
  });
  return objectReturn;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let managerOrNot = true;
  for (let i = 0; i < data.employees.length; i += 1) {
    managerOrNot = data.employees[i].managers.some((item) => item === id);
    if (managerOrNot) {
      break;
    } else {
      managerOrNot = false;
    }
  }
  return managerOrNot;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const returnEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(returnEmployee);
}

function countAnimals(species) {

}

function calculateEntry(entrants) {
  let valorTotal = 0;
  if (typeof entrants !== 'undefined' && Object.keys(entrants).length !== 0) {
    const pagantes = Object.keys(entrants);
    pagantes.forEach((item) => {
      valorTotal += data.prices[item] * entrants[item];
    });
    return valorTotal;
  }
  return valorTotal;
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
