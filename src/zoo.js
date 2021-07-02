const { species: theSpecies, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesId = [];
  ids.forEach((id) => {
    const specieId = theSpecies.find((specie) => specie.id === id);
    speciesId.push(specieId);
  });
  return speciesId;
}

function getAnimalsOlderThan(animal, age) {
  return theSpecies.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const information = personalInfo;
  information.managers = associatedWith.managers;
  information.responsibleFor = associatedWith.responsibleFor;

  return information;
}

function isManager(id) {
  let managerInfo = false;
  employees.forEach((employee) => {
    employee.managers.forEach((managerId) => {
      if (managerId === id) managerInfo = true;
    });
  });
  return managerInfo;
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
