const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return undefined;
  }
  return species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const find = species.find((specie) => specie.name === animal);
  return find.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((a) => a.firstName === employeeName || a.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
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

function countAnimals(especie) {
  const objeto = {};
  if (especie === undefined) {
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  const animal = species.find((specie) => specie.name === especie);
  return animal.residents.length;
}

// countAnimals();

function calculateEntry(entrants) {
  // if (!entrants) return 0;
  // let chaves = Object.keys(entrants);
  // let price = Object.values(prices);
  // // chaves.map((valor) => );
  // console.log(price);
  // console.log(chaves);
}
// let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 }; calculateEntry(entrants);

console.log(calculateEntry({}));
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
