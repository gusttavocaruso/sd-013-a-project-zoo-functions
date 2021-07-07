const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  const arrayIds = [];
  ids.forEach((id) => {
    const especies = data.species.find((specie) => specie.id === id);
    arrayIds.push(especies);
  });
  return arrayIds;
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const especimes = species.find((especie) => especie.name === animal);
  return especimes.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;
  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const informations = { ...personalInfo, ...associatedWith };
  return informations;
}

function isManager(id) {
  const { employees } = data;
  const arrayGerente = [];
  let gerente = false;
  employees.map((employee) => {
    arrayGerente.push(employee.managers.some((ids) => ids === id));
    return arrayGerente;
  });
  arrayGerente.forEach((comparacao) => {
    if (comparacao === true) {
      gerente = true;
      return gerente;
    }
  });
  return gerente;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  const empregadoNovo = employees.push(lastEmployee);
  return empregadoNovo;
}

function countAnimals(especies) {
  const { species } = data;
  if (especies === undefined) {
    const quantidadeTodos = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return quantidadeTodos;
  }
  let quantidadeEspecie = 0;
  species.forEach((especie) => {
    if (especie.name === especies) {
      quantidadeEspecie = especie.residents.length;
    }
    return quantidadeEspecie;
  });
  return quantidadeEspecie;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  const { Adult: adPrice, Senior: srPrice, Child: chPrice } = data.prices;
  const { Adult: adQuantity = 0, Senior: srQuantity = 0, Child: chQuantity = 0 } = entrants;
  const totalPrice = (adPrice * adQuantity) + (srPrice * srQuantity) + (chPrice * chQuantity);
  return totalPrice;
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
  const schedule = {
    Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
    Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
    Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
    Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
    Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
    Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  if (dayName === undefined) return schedule;
  const wd = data.hours;
  const specificDay = {};
  Object.keys(wd).forEach((d) => {
    if (d === dayName) specificDay[d] = `Open from ${wd[d].open}am until ${wd[d].close - 12}pm`;
  });
  if (dayName === 'Monday') specificDay[dayName] = 'CLOSED';
  return specificDay;
}

function getOldestFromFirstSpecies(id) {
  const finalResult = [];
  const animalsById = data.employees.find((empregado) => id === empregado.id).responsibleFor[0];
  const specificSpecies = data.species.find((especies) => especies.id === animalsById).residents;
  const idadeOrdenada = specificSpecies.sort((a, b) => b.age - a.age)[0];
  finalResult.push(idadeOrdenada.name, idadeOrdenada.sex, idadeOrdenada.age);
  return finalResult;
}

function increasePrices(percentage) {
  const pricesObject = data.prices;
  const increase = percentage / 100;
  Object.keys(pricesObject).forEach((key) => {
    pricesObject[key] += (pricesObject[key] * increase);
    pricesObject[key] = Math.round(pricesObject[key] * 100) / 100;
  });
  data.prices = pricesObject;
  return data.prices;
}

console.log(increasePrices(50));

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
