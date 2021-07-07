const data = require('./data');

function getSpeciesByIds(...ids) {

}

function getAnimalsOlderThan(animal, age) {
  const dataSpecies = data.species;

  const getAnimalSpecie = dataSpecies.find((item) => item.name === animal);

  const verify = getAnimalSpecie.residents.every((element) => element.age >= age);

  return verify;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  const verify = data.employees.some((i) => i.managers.some((elem) => elem === id || elem === []));
  return verify;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  const allAnimals = data.species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (typeof species === 'undefined') return allAnimals;

  return allAnimals[species];
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  // const array = entrants.forEach((item) => Object.entries(item));
  const entrantsValues = Object.values(entrants);

  console.log(entrantsValues);
}
// unfinished
// calculateEntry({ Adult: 3, Child: 1 });

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getSpecie = data.species.find((specie) =>
    specie.id === getEmployee.responsibleFor[0]);
  const getOldest = getSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(getOldest[0]);
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
