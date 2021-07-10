const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
}

// Requisito 2
function getAnimalsOlderThan(animal, age) {
  const findSpecie = species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return findSpecie;
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployee;
}

// Requisito 4
function createEmployee({ id, firstName, lastName },
  { managers, responsibleFor }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

// Requisito 5
function isManager(id) {
  const someManager = employees.some((employee) => employee.managers.includes(id));
  return someManager;
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

// Requisito 7
function countAnimals(animal) {
  const newObject = {};
  species.forEach((specie) => {
    newObject[specie.name] = specie.residents.length;
  });
  if (animal === undefined) return newObject;
  return newObject[animal];
}

// Requisito 8
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10
function getSchedule(dayName) {
  // seu código aqui
}

// Requisito 11
function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldest[0]);
}

// Requisito 12
function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

// Requisito 13
function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const fullName = (person) => `${person.firstName} ${person.lastName}`;
  const verifyIdOrName = (person) => (person.firstName === idOrName)
  || (person.lastName === idOrName) || (person.id === idOrName);
  const findName = (arrayOfIds) => {
    const specieName = [];
    arrayOfIds.forEach((id) => specieName
      .push(data.species.find(((specie) => specie.id === id)).name));
    return specieName;
  };
  const employeesList = data.employees
    .reduce((acc, person) => ({ ...acc, [fullName(person)]: findName(person.responsibleFor) }), {});

  if (!idOrName) return employeesList;
  const result = data.employees
    .find((employee) => verifyIdOrName(employee));
  return { [fullName(result)]: findName(result.responsibleFor) };
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
