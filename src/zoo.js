const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((specie) => specie.name === animal);
  return getAnimal.residents.every((individual) => individual.age >= age);
}

function getEmployeeByName(employeeName) {
  const emp = employeeName;
  const em = data.employees.filter((person) => emp === person.firstName || emp === person.lastName);
  const personNotFound = {};
  return em.length > 0 ? em[0] : personNotFound;
}

function createEmployee(personalInfo, associatedWith) {
  const personalData = personalInfo;
  personalData.managers = associatedWith.managers;
  personalData.responsibleFor = associatedWith.responsibleFor;
  return personalInfo;
}

function isManager(id) {
  return data.employees.some((itemArray) => itemArray.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const object = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(object);
  return data.employees;
}

function countAnimals(species) {
  const getAnimal = data.species.find((specie) => specie.name === species);
  const animalCount = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return typeof (getAnimal) === 'undefined' ? animalCount : getAnimal.residents.length;
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const soma = Adult * 49.99 + Senior * 24.99 + Child * 20.99;
  return soma;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const time = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  const objectDay = time[`${dayName}`];
  const result = {};
  result[`${dayName}`] = objectDay;
  return Object.keys(time).includes(dayName) === true ? result : time;
}
console.log(getSchedule('Tuesday'));
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
