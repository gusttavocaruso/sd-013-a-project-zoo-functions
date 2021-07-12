const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) =>
    specie.name === animal).residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  const quantity = () => {
    const animals = {};
    species.forEach(({ name, residents }) => {
      animals[name] = residents.length;
    });
    return animals;
  };
  const theAnimal = () => species.find(({ name }) => name === animal).residents.length;
  return animal === undefined ? quantity() : theAnimal();
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const entrances = (prices.Child * Child) + (prices.Senior * Senior) + (prices.Adult * Adult);
  return entrances;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const expected = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return expected;
  }
  return { [dayName]: expected[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalId = species.find((animal) => animal.id === employeeId).residents;
  const animalOld = animalId.sort((a, b) => b.age - a.age)[0];
  return [animalOld.name, animalOld.sex, animalOld.age];
}

function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
}

const persons = () => {
  const personsCoverage = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const animals = responsibleFor.map((animalId) =>
      species.find(({ id }) => id === animalId).name);
    personsCoverage[`${firstName} ${lastName}`] = animals;
  });
  return personsCoverage;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return persons();
  }
  const allPersons = employees.find(({ id, firstName, lastName }) => {
    const person = idOrName === id || idOrName === firstName || idOrName === lastName;
    return person;
  });
  const { firstName, lastName } = allPersons;
  const personName = `${firstName} ${lastName}`;
  return { [personName]: persons()[personName] };
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
