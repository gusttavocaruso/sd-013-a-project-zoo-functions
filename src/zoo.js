const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    const arrayVazio = [];
    return arrayVazio;
  }

  const array = [];
  ids.forEach((id) => {
    const found = data.species.find((element) => element.id === id);
    array.push(found);
  });

  return array;
}

function getAnimalsOlderThan(animal, age) {
  const found = data.species.find((element) => element.name === animal);
  const check = found.residents.every((element) => element.age >= age);

  return check;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    const arrayVazio = {};
    return arrayVazio;
  }

  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const create = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };

  return create;
}

function isManager(id) {
  const found = data.employees.some((employee) => employee.managers.includes(id));

  return found;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const objVazio = {};
    data.species.forEach((animal) => { objVazio[animal.name] = animal.residents.length; });
    return objVazio;
  }

  const nSpecies = data.species.find((animal) => animal.name === species).residents.length;

  return nSpecies;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = data.prices;
  const t = (Adult * price.Adult) + (Child * price.Child) + (Senior * price.Senior);
  return t;
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
