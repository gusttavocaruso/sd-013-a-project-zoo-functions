const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  if (!ids || !ids.length) return [];
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find((spe) => spe.name === animal).residents.every((re) => re.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName || !employeeName.length) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employees = {
    ...personalInfo,
    ...associatedWith,
  };
  return employees;
}

function isManager(id) {
  const { employees } = data;
  const thisIsManaged = employees.filter((managers) => managers.managers
    .some((person) => person === id));
  return (thisIsManaged.length >= 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const listNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(listNewEmployee);
}

function countAnimals(speciesAnimal) {
  const { species } = data;
  if (speciesAnimal) {
    return species.find((spe) => spe.name === speciesAnimal).residents.length;
  }
  const contagem = species.reduce((acc, item) => {
    acc[item.name] = item.residents.length;
    return acc;
  }, {});
  return contagem;
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
