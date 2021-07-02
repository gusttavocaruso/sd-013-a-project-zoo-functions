const data = require('./data');

function getSpeciesByIds(...ids) {
  const arr = [];
  ids.forEach((id) => {
    data.species.filter((specie) => {
      if (specie.id === id) {
        arr.push(specie);
      } return arr;
    });
  });
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  const dataAnimal = data.species.find((specie) => specie.name === animal);
  return dataAnimal.residents.every((residente) => residente.age > age);
}

function getEmployeeByName(employeeName = []) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee
      .lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {
    ...personalInfo,
    ...associatedWith,
  };
  return obj;
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  const manager = data.employees.find((employee) => employee.id === id);
  return manager.managers.includes(...managers);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }; return data.employees.push(newEmployee);
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
