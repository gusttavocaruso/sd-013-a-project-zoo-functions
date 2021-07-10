const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.some((id) => element.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal).residents
    .every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const criarObjeto = { ...personalInfo, ...associatedWith };
  return criarObjeto;
}

function isManager(id) {
  return employees
    .map((element) => element.managers)
    .reduce((acumulador, array) => [...acumulador, ...array], [])
    .some((manager) => manager === id);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees;
}

function countAnimals(species1) {
  if (species1) {
    return species
      .find((especie) => especie.name === species1).residents.length;
  }
  const obj = {};
  species.map((element) => {
    obj[element.name] = element.residents.length;
    return null;
  });
  return obj;
}

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;
  const arrayDeChaves = Object.keys(entrants);
  return arrayDeChaves.reduce((acc, curr) => {
    let acumulador = acc;
    acumulador += entrants[curr] * prices[curr];
    return acumulador;
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronograma = Object.entries(hours);
  const objetoCronograma = cronograma.reduce((acc , [chave, valor]) => {
    const a = acc
    a[chave] = `Open from ${valor.open}am until ${valor.close -12}pm`
    if (valor.open === valor.close){
    a[chave] = 'CLOSED';
    };
    return a
  }, {})
  if (dayName){
    return {[dayName]: objetoCronograma[dayName]}
  }
  return objetoCronograma;
}


function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((valor) => {
    prices[valor] = parseFloat(((prices[valor] * percentage / 100) + prices[valor] + 0.001).toFixed(2));
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
