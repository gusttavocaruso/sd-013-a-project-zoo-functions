/* eslint-disable no-constant-condition */
const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.find((n1) => n1 === element.id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((element) => element.name === animal).residents
    .every((element2) => element2.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.filter((element) =>
      element.firstName === employeeName || element.lastName === employeeName).find((m1) => m1);
  }

  return {};
}

function createEmployee(personalInfos, associatedWith) {
  return { ...personalInfos, ...associatedWith };
}

function isManager(id) {
  return employees.map((element) => element.managers)
    .reduce((acumulador, array) => [...acumulador, ...array], [])
    .some((manager) => manager === id);
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

function countAnimals(especie) {
  if (especie) {
    const test = species.find((element1) => element1.name === especie).residents.length;
    return test;
  }

  const a = {};
  species.map((element) => {
    a[element.name] = element.residents.length;
    return null;
  });

  return a;
}

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;
  const array = Object.keys(entrants);

  return array.reduce((acc, element) => {
    const total = acc + (entrants[element] * prices[element]);
    return total;
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronograma = {};
  const keyHoras = Object.keys(hours);
  const valorHora = Object.values(hours);
  const valueOpen = valorHora.map((m1) => m1.open);
  const valueClose = valorHora.map((m2) => m2.close);

  keyHoras.filter((element, i) => {
    if (valueOpen[i] === 0) {
      cronograma[element] = 'CLOSED';
    } else { cronograma[element] = `Open from ${valueOpen[i]}am until ${valueClose[i] - 12}pm`; }
    return null;
  });
  if (!dayName) return cronograma;
  const objSelecionado = Object.entries(cronograma).find((m1) => m1.includes(dayName));
  return objSelecionado.reduce((acc, value) => ({ [acc]: value }));
}

function getOldestFromFirstSpecies(ids) {
  const lisIds = employees.find((m1) => m1.id === ids).responsibleFor;
  const listAnimals = species.find((m2) => m2.id === lisIds[0]);
  const maximo = listAnimals.residents.map((c1) => c1.age).reduce((a, b) => Math.max(a, b));
  const perfilAnimal = [];

  const listIdade = listAnimals.residents
    .find((elemento) => elemento.age === maximo);

  const { name, sex, age } = listIdade;
  perfilAnimal.push(name, sex, age);

  return perfilAnimal;
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    data.prices[key] = parseFloat((prices[key] * (1 + percentage / 100) + 0.001).toFixed(2));
  });
}

function getEmployeeCoverage(idOrName) {
  // Digite seu código aqui
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
