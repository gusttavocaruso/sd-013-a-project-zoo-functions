const data = require('./data');

const { species } = data;

const { employees } = data;

const { prices } = data;
// #################################################################################################### //
// ################ Funções auxiliares criadas por @Jorge Felipe Campos Chagas #######################//
// #################################################################################################### //
const animalMapObject = (objectAcc = {}, key, keyValue = []) => species.reduce(((local, names) =>
  Object.assign(local, { [names[key]]: ((keyValue).length === 0 ? new Array(0) : names[keyValue]) })
), objectAcc);
const emptyParam = (parametro) => !parametro
|| (parametro && Object.keys(parametro).length === 0 && parametro.constructor === Object);

const emptyObj = (obj) => Object.keys(obj).length === 0;
function sortByOption(options, array) {
  return (options.sorted ? array.sort() : array);
}
function filterAnimal(specie, options) {
  switch (true) {
  case options.includeNames && /male/.test(options.sex):
    return sortByOption(options, specie.residents
      .filter((animals) => animals.sex === options.sex)
      .map((x) => x.name));

  case options.includeNames && !options.sex:
    return sortByOption(options, specie.residents.map((x) => x.name));
  default:
    return specie.name;
  }
}
// #################################################################################################### //
function getSpeciesByIds(...ids) {
  return (!ids.length ? [] : species.filter((specie) => ids.includes(specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find((specie) => specie.name === animal).residents
      .every((animalAge) => animalAge.age >= age)
  );
}

function getEmployeeByName(employeeName) {
  return (!employeeName ? {}
    : employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return (employees.some((employee) => employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function countAnimals(animal = {}) {
  if (emptyParam(animal)) {
    const animalListTotal = animal;
    const speciesName = (species.map((specieName) => specieName.name));
    const animalsTotal = (species.map((specieName) => specieName.residents.length));
    speciesName.forEach((specie, index) => {
      animalListTotal[specie] = animalsTotal[index];
    });
    return animalListTotal;
  }
  return (species.find((specie) => specie.name === animal).residents.length);
}

function calculateEntry(entrants) {
  return (emptyParam(entrants) ? 0
    : Object.entries(entrants)
      .map((entrant) => prices[entrant[0]] * entrant[1])
      .reduce((total, price) => total + price));
}

function getAnimalMap(options = {}) {
  const defaultLocations = animalMapObject({}, 'location');
  const locations = animalMapObject({}, 'location');
  species.forEach((animal) => locations[animal.location].push(animal.name));
  species.forEach((specie) => defaultLocations[specie.location]
    .push(...[{ [specie.name]: filterAnimal(specie, options) }]));
  return ((emptyObj(options) || !options.includeNames) ? locations : defaultLocations);
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
