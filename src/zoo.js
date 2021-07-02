const data = require('./data');

const { species } = data;

const { employees } = data;

const { prices } = data;

const emptyParam = (parametro) => !parametro
|| (parametro && Object.keys(parametro).length === 0 && parametro.constructor === Object);

function getSpeciesByIds(...ids) {
  return (!ids.length ? [] : species.filter((specie) => ids.includes(specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find((specie) => specie.name === animal).residents
      .every((animalAge) => animalAge.age >= age)
  );
}

function getEmployeeByName(employeeName) {
  return (!employeeName ? {}
    : employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return (employees.some((employee) => employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function countAnimals(animal = {}) {
  if (emptyParam(animal)) {
    const animalListTotal = animal;
    const speciesName = (species.map((specieName) => specieName.name));
    const animalsTotal = (species.map((specieName) => specieName.residents.length));
    speciesName.forEach((specie, index) => {
      animalListTotal[specie] = animalsTotal[index];
    });
    return animalListTotal;
  }
  return (species.find((specie) => specie.name === animal).residents.length);
}

function calculateEntry(entrants) {
  return (emptyParam(entrants) ? 0
    : Object.entries(entrants)
      .map((entrant) => prices[entrant[0]] * entrant[1])
      .reduce((total, price) => total + price));
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
