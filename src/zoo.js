const { employees, prices } = require('./data');
const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// seu código aqui
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// function countAnimals(species) {
// seu código aqui
function countAnimals(specie) {
  const allAnimals = {};
  if (specie === undefined) {
    species.forEach((animalSpecie) => {
      allAnimals[animalSpecie.name] = animalSpecie.residents.length;
    });
    return allAnimals;
  }
  const animals = species.find((animalSpecie) => animalSpecie.name === specie);
  return animals.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const adult = prices.Adult * Adult;
  const child = prices.Child * Child;
  const senior = prices.Senior * Senior;
  return adult + child + senior;
}
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return days;
  }
  return { [dayName]: days[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getManageryById = employees
    .find((employee) => employee.id === id);
  const getFirstSpecie = species
    .find((specie) => specie.id === getManageryById.responsibleFor[0]);
  const getOlderAnimal = getFirstSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(getOlderAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices)
    .forEach((categ) => {
      prices[categ] = Math.round(prices[categ] * (percentage / 100 + 1) * 100) / 100;
    });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const idToName = (responsibleFor) => responsibleFor.map((respFor) => species
    .find((animal) => animal.id === respFor).name);
  const employeeAndResponsibleFor = {};
  if (!idOrName) {
    employees.forEach((person) => {
      const fullName = `${person.firstName} ${person.lastName}`;
      employeeAndResponsibleFor[fullName] = idToName(person.responsibleFor);
    });
    return employeeAndResponsibleFor;
  }
  const employee = employees.find((emp) => emp.id === idOrName
    || emp.firstName === idOrName || emp.lastName === idOrName);
  const fullName = `${employee.firstName} ${employee.lastName}`;
  employeeAndResponsibleFor[fullName] = idToName(employee.responsibleFor);
  return employeeAndResponsibleFor;
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
