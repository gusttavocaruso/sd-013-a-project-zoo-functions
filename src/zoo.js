const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((item) => item.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeObj = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return employeeObj || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(especie) {
  if (!especie) {
    const animalCount = {};
    species.forEach((item) => {
      animalCount[item.name] = item.residents.length;
    });
    return animalCount;
  } const animals = species.find((item) => item.name === especie);
  return animals.residents.length;
}

function calculateEntry(entrants) {
  const { Adult, Child, Senior } = prices;
  let entriesPrices = [];
  if (entrants) {
    entriesPrices = [
      (entrants.Adult * Adult),
      (entrants.Child * Child),
      (entrants.Senior * Senior),
    ];
  }
  return entriesPrices.reduce((acc, curr) => (curr ? acc + curr : acc), 0);
}

// ------------ Requisito 9

const filterByLocation = (Obj, Loc) => Obj.filter((item) => item.location === Loc);
const getAnimalSpecies = (Arr) => Arr.map((element) => element.name);
const getAnimalNames = (Arr) => Arr.map((element) => {
  const speciesWithNames = {};
  speciesWithNames[element.name] = element.residents.map((animal) => animal.name);
  return speciesWithNames;
});

function getAnimalMap(options) {
  const animalMap = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];

  if (!options) {
    locations.forEach((location) => {
      animalMap[location] = getAnimalSpecies(filterByLocation(species, location));
    });
  } else if (options.includeNames) {
    locations.forEach((location) => {
      animalMap[location] = getAnimalNames(filterByLocation(species, location));
    });
  }
  return animalMap;
}

// ---------------

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
