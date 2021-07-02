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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
