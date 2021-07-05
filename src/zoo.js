const { employees, species, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, animalAge) {
  return (
    species.filter(
      ({ name, residents }) =>
        name === animal && residents.every(({ age }) => age >= animalAge),
    ).length > 0
  );
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (person) =>
      person.firstName === employeeName || person.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((idNumber) => idNumber.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees;
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => speciesName === name).residents.length;
  }
  return species.reduce((acc, { name, residents }) => {
    if (!acc[name]) acc[name] = 0;

    acc[name] = residents.length;

    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).reduce((acc, [key, value]) => {
    const multi = prices[key] * value;
    let aux = acc;
    aux += multi;
    return aux;
  }, 0);
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
