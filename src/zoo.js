const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids !== undefined) {
    return data.species.filter((specie) => (ids.includes(specie.id)));
  }
  return [];
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => (specie
    .name === animal)).residents
    .every((resident) => (resident.age >= age));
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((employee) => employee
      .firstName === employeeName || employee
      .lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((callBack) => (callBack
    .managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees
    .push({ id, firstName, lastName, managers, responsibleFor });
}

// depois da dica do Rogerio aprendi que dava pra fazer com o reduce, conferi código de alguns colegas antigos pra aprender e finalmente entendi quando achei o segundo exemplo desse site: https://bognarjunior.wordpress.com/2018/02/09/array-javascript-o-metodo-reduce/

function countAnimals(param) {
  if (param === undefined) {
    return data.species.reduce((contador, elemento) => Object
      .assign(contador, { [elemento.name]: (elemento
        .residents.length) }), {});
  }
  return data.species.find((specie) => specie
    .name === param).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object
    .keys(entrants).length === 0) return 0;
  return Object.keys(entrants)
    .reduce((acc, curr) => acc + entrants[curr] * data
      .prices[curr], 0);
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
