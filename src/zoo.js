const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return ids.map((param) => data.species.find((section) => section.id === param));
}

function getAnimalsOlderThan(specie, minAge) {
  const section = data.species.find((block) => block.name === specie);
  const animals = section.residents.every((animal) => animal.age >= minAge);
  return animals;
}

function getEmployeeByName(employeeName = {}) {
  if (Object.values(employeeName).length === 0) {
    return employeeName;
  }
  let human = data.employees.find((person) => person.firstName === employeeName);
  if (human === undefined) {
    human = data.employees.find((person) => person.lastName === employeeName);
  }
  return human;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((human) => human.managers.some((adult) => adult === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species !== undefined) {
    const animals = data.species.find((animal) => animal.name === species);
    return animals.residents.length;
  }
  const animalsQuantities = data.species.reduce((previous, current) => {
    const add = previous;
    add[current.name] = current.residents.length;
    return previous;
  }, {});
  return animalsQuantities;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const { Adult: Ad, Senior: Se, Child: Ch } = data.prices;
  return (Adult * Ad) + (Senior * Se) + (Child * Ch);
}

function getAnimalMap(options) {
  const loc = data.species.reduce((accumulator, current) => {
    const local = accumulator;
    local[current.location] = push(current.name);
  }, {});
  return loc;
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
