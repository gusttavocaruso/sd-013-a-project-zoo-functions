const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return ids;

  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSpecie = data.species.filter((specie) => specie.name.includes(animal));
  const ages = animalSpecie[0].residents.find((info) => info.age < age);
  if (ages) return false;
  return true;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const result = {};
  const findEmployer = data.employees.filter((employer) => {
    let found = employer.firstName.includes(employeeName);
    if (!found) found = employer.lastName.includes(employeeName);
    return found;
  });
  return findEmployer.length ? findEmployer[0] : result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const managers = [];
  data.employees.forEach((employee) => employee.managers.forEach((Id) => managers.push(Id)));
  return managers.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employee);
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
// vamos que vamos
