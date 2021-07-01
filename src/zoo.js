const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie, i) => specie.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee, i) => employee.managers[i] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speecies) {
  // seu código aqui
  if (speecies === undefined) {
    const ob = {
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
    return ob;
  }
  return species.find((specie) => specie.name === speecies).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  const valorChild = entrants.Child === undefined ? 0 : (entrants.Child * 20.99);
  const valorSenior = entrants.Senior === undefined ? 0 : (entrants.Senior * 24.99);
  const valorAdult = entrants.Adult === undefined ? 0 : (entrants.Adult * 49.99);
  return (valorAdult + valorChild + valorSenior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const funcionamento = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return funcionamento;
  }
  return { [dayName]: funcionamento[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const animal = species.find((specie) => specie.id === idAnimal);
  const biggestAge = animal.residents.reduce((acc, crr) => (crr.age > acc ? crr.age : acc), 0);
  const oldestAnimal = animal.residents.find((resident) => resident.age === biggestAge);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
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
