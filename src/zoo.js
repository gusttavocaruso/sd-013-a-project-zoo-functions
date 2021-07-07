const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const animais = species.filter((specie) => ids.includes(specie.id));
  return animais;
}

function getAnimalsOlderThan(animal, agee) {
  const bichos = species.find((nome) => nome.name === animal);
  return bichos.residents.every((bichoAge) => bichoAge.age >= agee);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const funcionario = employees.find((employ) => (employ.firstName === employeeName)
  || (employ.lastName === employeeName));
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(ids) {
  return data.employees.some((employ) => employ.managers.includes(ids));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(speciess) {
  if (!speciess) {
    const obj = {};
    data.species.forEach((nome) => { obj[nome.name] = nome.residents.length; });
    return obj;
  }

  return data.species.find((nome) => nome.name === speciess)
    .residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName === 'Monday') {
    return { Monday: 'CLOSED' };
  }
  if (!dayName) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  }
  const obj = {};
  const horas = Object.values(data.hours[dayName]);
  obj[dayName] = `Open from ${horas[0]}am until ${horas[1] / 3}pm`;
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.find((currObj) => currObj.id === id);
  const primeiraSpe = pessoa.responsibleFor.find((currO) => currO[0]);
  const primeiraSpecie = species.find((i) => i.id === primeiraSpe);
  const quase = primeiraSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(quase);
}

function increasePrices(percentage) {
  const valuePer = Number(`1.${percentage}`);
  const keys = Object.keys(prices);
  keys.forEach((key) => { prices[key] = Math.round(((prices[key] * valuePer)) * 100) / 100; });
}

function getEmployeeCoverage(idOrName) {
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
