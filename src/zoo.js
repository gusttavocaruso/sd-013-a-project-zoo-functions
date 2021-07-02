const data = require('./data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
};

const getAnimalsOlderThan = (animal, age) => data.species.find(({ name }) => name === animal)
  .residents.every((resident) => resident.age > age);

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) => firstName === employeeName
    || lastName === employeeName);
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (species) => {
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === species).residents.length;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult)
    + (Child * data.prices.Child)
    + (Senior * data.prices.Senior);
};

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
