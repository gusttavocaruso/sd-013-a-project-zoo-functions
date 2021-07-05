const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => specie.id === ids[0] || specie.id === ids[1]);
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .map((employee) => employee.managers)
    .reduce((acc, current) => [...acc, ...current], [])
    .some((manager) => manager === id);
  // return employees.some((employee)) => employee.managers.includes(id));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(especies) {
  if (!especies) {
    const especiesObj = {};
    species.forEach(({ name, residents }) => {
      especiesObj[name] = residents.length;
    });
    return especiesObj;
  }
  return species.find((especie) => especie.name === especies).residents.length;
  // const all animals = species.reduce((acc, curr) => {
  // acc[current.name] = current.residents.length;
  // return acc;
  // }, {})
}

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;
  const arrayPeople = Object.keys(entrants);
  return arrayPeople.reduce((acc, curr) => {
    let acc2 = acc;
    acc2 += prices[curr] * entrants[curr];
    return acc2;
  }, 0);
  // const precoAdultos = entrants.Adult * prices.Adult || 0;
  // const precoSeniors = entrants.Senior * prices.Senior || 0;
  // const precoChilds = entrants.Child * prices.Child || 0;
  // return (precoAdultos + precoSeniors + precoChilds);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employe) => employe.id === id);
  const firstSpecie = species.find((specie) => specie.id === funcionario.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]);
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  return keys.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
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
