const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const retorno = [];

  ids.forEach((idPassado) => {
    const procurarId = data.species.find((elemento) => elemento.id === idPassado);
    retorno.push(procurarId);
  });

  return retorno;
}

function getAnimalsOlderThan(animal, age) {
  const procurarNome = data.species.find((elemento) => elemento.name === animal);
  return procurarNome.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((elemento) => elemento.firstName === employeeName
  || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  let controller = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) {
        controller = true;
      }
    });
  });
  return controller;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function countAnimals(species) {
  if (species === undefined) {
    const objeto = {};
    data.species.forEach((animal) => {
      objeto[animal.name] = animal.residents.length;
    });
    return objeto;
  }
  const procurarAnimal = data.species.find((elemento) => elemento.name === species);
  return procurarAnimal.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const valores = data.prices;
  return (valores.Adult * Adult) + (valores.Senior * Senior) + (valores.Child * Child);
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
