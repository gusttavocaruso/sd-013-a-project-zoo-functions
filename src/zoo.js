const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(theSpecies) {
  const animals = species.reduce((acc, currentValue) => {
    acc[currentValue.name] = currentValue.residents.length;
    return acc;
  }, {});
  if (!theSpecies) return animals;

  return animals[theSpecies];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (typeof dayName === 'string' && dayName.length !== 0) return { [dayName]: result[dayName] };
  return result;
}

// function getOldestFromFirstSpecies(id) {
//   const collaborator = employees.find((employee) => employee.id === id);
//   const firstSpeciesId = collaborator.responsibleFor[0];
//   const animal = getSpeciesByIds(firstSpeciesId)[0];
//   const { residents } = animal;
//   const oldest = residents.reduce((old, atual) => atual.age > old.age ? atual : old);
//   return Object.values(oldest);
// }
function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employeefunc) => employeefunc.id === id);
  const firstSpecie = employee.responsibleFor[0];
  const animal = getSpeciesByIds(firstSpecie)[0];
  const { residents } = animal;
  const maisVelho = residents.reduce((velho, atual) => (
    atual.age > velho.age ? atual : velho
  ));
  return Object.values(maisVelho);
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
