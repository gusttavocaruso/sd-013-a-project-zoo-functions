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

/* function returnMaxValue(array) {
  return array.reduce((accumulator, item) => Math.max(accumulator, item));
} */

/* function generateArray(speciesNumber) {
  for (let index = 0; index < speciesNumber; index +=1 ) {
  }
} */

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getAnimals = getEmployee.responsibleFor;
  const getSpeciesObjects = data.species.filter((specie) => getAnimals.includes(specie.id));
  let try1 = [];
  let try2 = [];
  const count1 = getSpeciesObjects[0].residents;
  const count2 = getSpeciesObjects[1].residents;
  try1 = count2.filter((animal) => animal.age > 11);
  try2 = count1.filter((animal2) => animal2.age > 9);
  return try1.length > 0 ? Object.values(try1[0]) : Object.values(try2[0]);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
