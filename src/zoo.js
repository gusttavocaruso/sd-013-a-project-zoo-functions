const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = species.find((specie) => specie.name === animal);
  return searchAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const dataEmploye = employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return dataEmploye;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animalName) {
  const animals = species.find((specie) => specie.name === animalName);
  if (animalName === undefined) {
    const list = {};
    species.forEach((animal) => {
      list[animal.name] = animal.residents.length;
    });
    return list;
  }
  return animals.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((item) => item.id === id);
  const animal = species.find((specie) => specie.id === employee.responsibleFor[0]);
  const animalOldest = animal.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalOldest);
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] * (1 + (percentage / 100))) * 100) / 100;
  });
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
