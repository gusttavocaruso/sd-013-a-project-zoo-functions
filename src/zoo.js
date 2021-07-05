const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === []) return [];
  return ids
    .map((id) => data.species
      .find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((anim) => anim.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(name) {
  if (name === undefined) return {};
  return data.employees
    .find((employee) => ((employee.firstName === name) || (employee.lastName === name)));
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
  return data.employees
    .some((employee) => employee.managers
      .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  data.employees[data.employees.length] = newEmployee;
}

function countAnimals(species) {
  const counts = {};
  data.species.forEach((animal) => { counts[animal.name] = animal.residents.length; });
  return species === undefined ? counts : counts[species];
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
