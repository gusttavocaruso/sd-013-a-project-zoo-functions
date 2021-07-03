const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  let animal = [];
  if (ids.length === 0) {
    return animal;
  }
  animal = species.filter((specie) => ids.some((id) => specie.id === id));
  return animal;
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function getAnimalsOlderThan(animal, age) {
  const animalElement = species.find((specie) => specie.name === animal);
  const result = animalElement.residents
    .every((animalResident) => animalResident.age >= age);

  return result;
}
getAnimalsOlderThan('otters', 7);

function getEmployeeByName(employeeName = undefined) {
  if (employeeName === undefined) {
    return {};
  }
  const employees = data.employees
    .filter((loy) => loy.firstName.includes(employeeName) || loy.lastName.includes(employeeName));
  return employees[0];
}
getEmployeeByName('Emery');

function createEmployee(personalInfo = undefined, associatedWith = undefined) {
  if (personalInfo === undefined || associatedWith === undefined) {
    return {};
  }
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}
createEmployee({
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
});

function isManager(id) {
  const manager = data.employees
    .filter((worker) => worker.managers[0] === id);
  if (manager.length === 0) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
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
