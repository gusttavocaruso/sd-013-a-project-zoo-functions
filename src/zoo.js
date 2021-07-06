// const { species } = require('./data');
const { employees } = require('./data');
// const prices = require('./data')
const data = require('./data');

function getSpeciesByIds(...ids) {
  const filtered = [];
  // busca cada id passado
  ids.forEach((id) =>
    // add cada especie igual no array
    filtered.push(data.species.find((specie) => specie.id === id)));
  return filtered;
}

function getAnimalsOlderThan(animal, age) {
  const findOlder = data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
  return findOlder;
}

function getEmployeeByName(employeeName) {
  // se nao for passado 'employeeName' retorna undefined (vazio)
  if (employeeName === undefined) {
    return {};
  }
  // fazendo as comparações do valor passado com o primeiro e ultimo nome
  const found = data.employees.find((item) => {
    const result = item.firstName === employeeName || item.lastName === employeeName;
    return result;
  });
  return found;
}

function createEmployee(personalInfo, associatedWith) {
  const spread = { ...personalInfo, ...associatedWith };
  return spread;
}

function isManager(id) {
  let findManager = false;
  employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) {
        findManager = true;
      }
    });
  });
  return findManager;
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
  return data.employees;
}

function countAnimals(species) {
  // se não for passado paramentro, retorna um objeto
  const speciesCount = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      speciesCount[specie.name] = specie.residents.length;
    });
    return speciesCount;
  }
  const result = data.species.find((specie) => specie.name === species).residents.length;
  return result;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const adults = (Adult * data.prices.Adult);
  const childs = (Child * data.prices.Child);
  const seniors = (Senior * data.prices.Senior);
  const total = (adults + childs + seniors);
  return total;
}

function getAnimalMap(options) {
  // if (options === undefined) {
  //   return options.sort;
  // }
}

function getSchedule(dayName) {
  //
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const pricesAdult = Math.round((((percentage / 100) + 1) * Adult) * 100) / 100;
  const pricesSenior = Math.round((((percentage / 100) + 1) * Senior) * 100) / 100;
  const pricesChild = Math.round((((percentage / 100) + 1) * Child) * 100) / 100;
  data.prices = {
    Adult: pricesAdult,
    Senior: pricesSenior,
    Child: pricesChild,
  };
  return data.prices;
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
