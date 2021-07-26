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
  if (!entrants || entrants === {}) return 0;
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const totalPrice = adult * 49.99 + senior * 24.99 + child * 20.99;
  return totalPrice;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui .find
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
