const { prices, species, employees } = require('./data');
const data = require('./data');

// REQUISITO 1
function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.includes(element.id));
}

// REQUISITO 2
function getAnimalsOlderThan(animal, age) {
  return species.filter((tipo) => tipo.name.includes(animal))[0]
    .residents.every((element) => element.age >= age);
}

// REQUISITO 3
function getEmployeeByName(employeeName) {
  const employ = {};
  if (!employeeName) {
    return employ;
  }
  return employees.find((people) =>
    people.firstName.includes(employeeName) || people.lastName.includes(employeeName));
}

// REQUISITO 4
function createEmployee(personalInfo, associatedWith) {
  employees.push({
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  });
  return employees.find((people) => people.id.includes(personalInfo.id));
}

// REQUISITO 5
function isManager(id) {
  return employees.some((managers) =>
    managers.managers.some((people) => people.includes(id)));
}

// REQUISITO 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// REQUISITO 7
function countAnimals(param) {
  if (!param) {
    const arraySpecies = species.map((animal) => animal.name);
    const arrayResidents = species.map((animal) => animal.residents.length);
    const newObjectSpecies = {};

    for (let index = 0; index < arraySpecies.length; index += 1) {
      newObjectSpecies[`${arraySpecies[index]}`] = arrayResidents[index];
    }
    return newObjectSpecies;
  }
  const populationSpecie = species.find((animal) => animal.name.includes(param));
  return populationSpecie.residents.length;
}

// REQUISITO 8
function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const result = (prices.Child * Child) + (prices.Senior * Senior)
  + (prices.Adult * Adult);

  return result;
}

// REQUISITO 9
function getAnimalMap(options) {
  // seu código aqui
}

// REQUISITO 10
function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return days;
  return { [dayName]: days[dayName] };
}

// REQUISITO 11
function getOldestFromFirstSpecies(id) {
  const idEmploy = employees.find((people) =>
    people.id.includes(id)).responsibleFor[0];

  const animalOld = species.filter((animal) => animal.id.includes(idEmploy))[0]
    .residents.map((itemAge) => itemAge.age).reduce((a, b) => Math.max(a, b));

  const objResult = species.filter((animal) => animal.id.includes(idEmploy))[0]
    .residents.filter((animal) => animal.age === animalOld)[0];

  const result = [objResult.name, objResult.sex, objResult.age];

  return result;
}

// REQUISITO 12
function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(prices.Senior * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(prices.Child * (1 + (percentage / 100)) * 100) / 100;

  return prices;
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
