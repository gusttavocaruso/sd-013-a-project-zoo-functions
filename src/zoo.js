const { species, employees, prices } = require('./data');
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
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  // seu código aqui
  return Object.keys(entrants).reduce((accumulator, currentValue) =>
    accumulator + (entrants[currentValue] * prices[currentValue]), 0);
}

function getAnimalMap(options) {
  // const region = { NE: [], NA: [], SE: [], SW: [], };
  // if (options === undefined) {
  //   const locationSpecies = species.reduce((actualAnimal , nextAnimal) =>
  //     nextAnimal.filter((local) => {
  //       local.location === `'${region}'`;
  //     }) ? actualAnimal.push(nextAnimal.name) : actualAnimal
  //   , region);
  // seu código aqui
  // }
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const getResponsible = employees.find((employee) => employee.id === id);
  const getAnimal = getResponsible.responsibleFor[0];
  const getAnimalList = species.find((specie) => specie.id === getAnimal);
  const sortAnimals = getAnimalList.residents.sort((aAnimal, bAnimal) =>
    bAnimal.age - aAnimal.age);
  return Object.values(sortAnimals[0]);
  // seu código aqui
}

function increasePrices(percentage) {
  const getPrices = Object.keys(prices);
  return getPrices.forEach((price) => {
    prices[price] = Math.round((prices[price] * ((percentage / 100) + 1) * 100)) / 100;
  });
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  const employeeData = {};
  if (idOrName) {
    const getEmployees = employees.find((employee) =>
      employee.firstName === idOrName || employee.lastName === idOrName
    || employee.id === idOrName);
    employeeData[`${getEmployees.firstName} ${getEmployees.lastName}`] = (getEmployees
      .responsibleFor.map((animal) =>
        species.find((specie) => specie.id === animal).name));
    return employeeData;
  }
  if (idOrName === undefined) {
    employees.forEach((employee) => {
      employeeData[`${employee.firstName} ${employee.lastName}`] = employee
        .responsibleFor.map((animal) => species.find((specie) =>
          specie.id === animal).name);
    });
  }
  return employeeData;
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
