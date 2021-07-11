const { species, employees, prices } = require('./data');
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
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers === undefined ? [] : managers,
    responsibleFor: responsibleFor === undefined ? [] : responsibleFor,
  };
  employees.push(newEmployee);
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

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  const total = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);

  return total;
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const calcPercent = (perc, price) => Math.round((price * ((perc / 100) + 1)) * 100) / 100;

  prices.Adult = calcPercent(percentage, prices.Adult);
  prices.Child = calcPercent(percentage, prices.Child);
  prices.Senior = calcPercent(percentage, prices.Senior);
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
