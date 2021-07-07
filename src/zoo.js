const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(firstId, secondId) {
  const getSpecies = species.filter((specie) => specie.id === firstId || specie.id === secondId);
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const checkAnimalsAge = findAnimal.residents.every((resident) => resident.age >= 7);

  return checkAnimalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const fndEmp = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);

  return fndEmp;
}

function createEmployee(personalInfo, associatedWith) {
  // ENCONTRAR SOLUÇÃO
}

function isManager(id) {
  const findPersonById = employees.find((employee) => employee.id === id);
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

  if (findPersonById.managers[0] === stephanieId || findPersonById.managers[0] === undefined) {
    return true;
  }

  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  if (managers === undefined) {
    newEmployee.managers = [];
  }
  if (responsibleFor === undefined) {
    newEmployee.responsibleFor = [];
  }

  employees.push(newEmployee);
}

function countAnimals(animal) {
  // DESCOBRIR A LÓGICA CERTA:
  //   if (animal === undefined) {
  //     species.map(specie => {specie: specie.residents.length})
  //   }

  //   const findAnimal = species
  //   .find(specie => specie === animal)
  //   .map(specie => specie.residents.length);

  //   return findAnimal;
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
