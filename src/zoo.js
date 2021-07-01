const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((idAnimal) => idAnimal.id === ids[0] || idAnimal.id === ids[1]);
}

function getAnimalsOlderThan(animal, age) {
  return species.find((teste2) => teste2.name === animal).residents
    .every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, associatedWith) {
  return {
    id,
    firstName,
    lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  let ret = false;
  data.employees.forEach((i) => {
    i.managers.forEach((a) => {
      if (a === id) ret = true;
    });
  });

  return ret;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployee1 = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(lastEmployee1);
}

function countAnimals(especies) {
  if (!especies) {
    const req7 = {};
    species.forEach((animal) => {
      req7[animal.name] = animal.residents.length;
    });
    return req7;
  }
  const findSpecies = species.find((element) => element.name === especies).residents.length;
  return findSpecies;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const preco = data.prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const sum = (preco.Adult * Adult) + (preco.Child * Child) + (preco.Senior * Senior);
  return sum;
}

function getAnimalMap(options) {
  const animal = species.reduce((acc, currentValue) => {
    if (acc[currentValue.location]) {
      acc[currentValue.location].push(currentValue.name);
    } else {
      acc[currentValue.location] = [currentValue.name];
    }
    return acc;
  }, {});
  if (!options) {
    return animal;
    console.log(animal);
  }
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const param = (percentage / 100) + 1;
  const valorEntrada = prices;
  Object.keys(valorEntrada).forEach((i) => {
    valorEntrada[i] = Math.round((valorEntrada[i] * param * 100)) / 100;
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
