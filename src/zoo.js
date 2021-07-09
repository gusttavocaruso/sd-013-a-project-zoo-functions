const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  // return ids.map(id => especies.find((especie) => especie.id === id));
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  let result = species.find((specie) => specie.name === animal);
  if (result) result = result.residents.every((specie) => (specie.age >= age));
  return result;
}

function getEmployeeByName(employeeName) {
  // if (employeeName === undefined) return {};
  if (!employeeName) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  // return Object.assign({}, personalInfo, associatedWith);
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(speciess) {
  const animals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (!speciess) return animals;
  return animals[speciess];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child);
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
