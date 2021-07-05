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
  // if ((species = undefined)) {
  //   return data.species.popularity;
  // }
  // const result = data.species.forEach((animal) => {
  //   animal.name === data.species.name;
  // });
  // return result;
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
  if (options === undefined) {
    return options.sort;
  }
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const increase = data.prices.forEach((item) => {
    const price = data.prices[item];
    const newPrice = price + (price * (percentage / 100));
    return newPrice;
  });
  return increase;
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
