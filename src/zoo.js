const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  const speciesIdArray = data.species.filter((keyId) => ids.includes(keyId.id));
  return speciesIdArray;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimalsByKey = data.species.find((key) => key.name === animal);
  return findAnimalsByKey.residents.every((key) => key.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((k) => k.firstName === employeeName || k.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((key) => key.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesIndividuals) {
  const animals = data.species.reduce((accumulator, current) => {
    accumulator[current.name] = current.residents.length; return accumulator;
  }, {});
  if (!speciesIndividuals) return animals;
  return animals[speciesIndividuals];
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalName(animalName, sorted, sex) {
  let result = data.species.find((animal) => animal.name === animalName); result = result.residents;
  if (typeof sex === 'string') { result = result.filter((animal) => animal.sex === sex); }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort(); return { [animalName]: result };
}

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  let result = data.species.reduce((accumulator, current) => {
    const { name, location } = current;
    if (!accumulator[location]) { accumulator[location] = []; }
    accumulator[location].push(name); return accumulator;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((accumulator, [key, animalName]) => {
      accumulator[key] = animalName.map((name) =>
        getAnimalName(name, sorted, sex)); return accumulator;
    }, {});
  }
  return result;
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
