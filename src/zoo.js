const data = require('./data');

function getSpeciesByIds(...ids) {
  const findSpecie = [];
  ids.forEach((id) => {
    findSpecie.push(data.species.find((specie) => specie.id === id));
  });
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) =>
    specie.name === animal && specie.residents.every((resident) =>
      resident.age > age));
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((employe) =>
      employe.firstName === employeeName || employe.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.find((employee) => employee)
    .managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function countAnimals(species) {
  if (species === undefined) {
    const listaAnimals = {};
    data.species.forEach((specie) => {
      listaAnimals[specie.name] = specie.residents.length;
    });
    return listaAnimals;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultoZoo, Child: criancaZoo, Senior: senhorZoo } = data.prices;
  return (Adult * adultoZoo) + (Child * criancaZoo) + (Senior * senhorZoo);
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
