const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = species.find((specie) => specie.name === animal);
  const animalOlderAge = getAnimal.residents.every((resident) => resident.age > age);
  return animalOlderAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((eN) => eN.firstName === employeeName || eN.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  // pedi ajuda para o colega Bruno Pinho.
  const personId = employees.find((employee) => employee.id === id);
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  if (personId.managers[0] === stephanieId || personId.managers[0] === undefined) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  // Com a ajuda do colega Bruno Pinho.
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (newEmployee.managers === undefined) {
    newEmployee.managers = [];
  }
  if (newEmployee.responsibleFor === undefined) {
    newEmployee.responsibleFor = [];
  }
  return employees.push(newEmployee);
}

function countAnimals(specie) {
  // seu código aqui
  // Com a ajuda do colega Bruno Pinho.
  if (specie === undefined) {
    const arr = {};
    species.forEach((object) => {
      arr[object.name] = object.residents.length;
      return arr;
    });
    return arr;
  }
  const animal = species.find((specieName) => specieName.name === specie);
  const numberOfAnimals = animal.residents.length;
  return numberOfAnimals;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const totalPrice = adult * 49.99 + senior * 24.99 + child * 20.99;
  return totalPrice;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const week = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return week;
  }
  const dayOfWeek = `'${dayName}': `;
  const functionTime = `'${Object.keys(week.dayName)}'`;
  return dayOfWeek + functionTime;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = data.species.find((specie) => specie.id === specieId);
  const olderAge = residents.reduce((older, resident) =>
    ((resident.age > older) ? resident.age : older), 0);
  const olderAnimal = Object.values(residents.find((resident) =>
    resident.age === olderAge));
  return olderAnimal;
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: parseFloat((Adult + Adult * (percentage / 100) + 0.001).toFixed(2)),
    Senior: parseFloat((Senior + Senior * (percentage / 100) + 0.001).toFixed(2)),
    Child: parseFloat((Child + Child * (percentage / 100) + 0.001).toFixed(2)),
  };
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
