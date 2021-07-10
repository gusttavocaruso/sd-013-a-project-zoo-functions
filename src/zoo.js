const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const filteredSpecies = species.filter((specie) => ids.includes(specie.id));
  return filteredSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const everyAnimalHasTheMinAge = species
    .filter((specie) => specie.name === animal)
    .every((specie) => specie.residents.every((resident) => resident.age >= age));
  return everyAnimalHasTheMinAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const findEmployeeInfo = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployeeInfo;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  const someManeger = employees.some((employee) => employee.managers.includes(id));
  return someManeger;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(specieAnimals) {
  if (specieAnimals === undefined) {
    const allCountSpecies = species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length;
      return accumulator;
    }, {});
    return allCountSpecies;
  }
  const specieFound = species.find((specie) => specie.name === specieAnimals);
  return specieFound.residents.length;
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
