const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const retorno = [];
  ids.forEach((id) => {
    retorno.push(data.species.find((item) => item.id === id));
  });
  return retorno;
}

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((item) => item.name === animal);
  return animais.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((item) => item.firstName === employeeName
  || item.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((item) => item.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((res, num) => {
      res[num.name] = num.residents.length;
      return res;
    }, {});
  }
  return data.species.reduce((res, num) => {
    if (num.name === species) {
      return num.residents.length;
    }
    return res;
  }, 0);
}

function calculateEntry(entrants) {
    if (!entrants) return 0;
    return Object.keys(entrants).reduce((acc, cur) => acc + entrants[cur] * data.prices[cur], 0);
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
  const auxilar = Number(`1.${percentage}`);
  const chave = Object.keys(data.prices);
  chave.forEach((key) => {
    data.prices[key] = Math.round(((data.prices[key] * auxilar)) * 100) / 100;
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
