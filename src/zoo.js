const data = require('./data');

function getSpeciesByIds(...animais) {
  // seu codigo
  if (!animais) return [];
  return animais.map((animal) => data.species.find((specie) => specie.id === animal));
}
// console.log(getSpeciesByIds(lionId))

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animaisObj = data.species.find((specie) => specie.name === animal);
  return animaisObj.residents.every((resident) => resident.age >= age);

  /* console.log(animaisObj) */
}

/* console.log(getAnimalsOlderThan('lions', 4)) */

function getEmployeeByName(person) {
  // seu código aqui
  if (!person) return {};
  return data.employees.find((employe) => employe.firstName === person
    || employe.lastName === person);
}

// console.log(getEmployeeByName('Nelson'))

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((employe) => employe.managers.includes(id));
}
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui

  const adiciona = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(adiciona);
}

function countAnimals(animais) {
  // seu código aqui
  if (!animais) {
    const objSpecies = {};
    data.species.forEach((specie) => { objSpecies[specie.name] = specie.residents.length; });
    return objSpecies;
  }
  return data.species.find((specie) => specie.name === animais).residents.length;
}
// console.log(countAnimals())

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
