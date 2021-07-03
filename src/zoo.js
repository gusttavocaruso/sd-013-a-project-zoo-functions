const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const encontrar = species.find((especie) => especie.name === animal);
  return encontrar.residents.every((especie) => especie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) === 'undefined') return {};
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // Deve retornar um valor booleano
  let retorna = false;
  data.employees.forEach((employe) => {
    employe.managers.forEach((manage) => {
      if (manage === id) retorna = true;
    });
  });
  return retorna;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novo = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novo);
}

function countAnimals(especies) {
  const retorn = {};
  if (!especies) {
    species
      .forEach(({ name, residents }) => {
        retorn[name] = residents.length;
      });
    return retorn;
  }
  return species
    .find(({ name }) => (name === especies)).residents.length;
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
