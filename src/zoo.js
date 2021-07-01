const data = require('./data');

/*
...ids: ao usarmos o spread, permite que se passe multiplos parametros
        e nos permite manipula-los como arrays.
*/
function getSpeciesByIds(...ids) {
  const speciesEncontradasParaTodosIds = [];

  ids.forEach((id) => {
    const specieEncontradaParaCadaId = data.species.filter((specie) => specie.id === id);

    speciesEncontradasParaTodosIds.push(...specieEncontradaParaCadaId);
  });

  return speciesEncontradasParaTodosIds;
}

function getAnimalsOlderThan(animal, age) {
  const specieQueQuero = data.species.find((specie) => specie.name === animal);

  return specieQueQuero.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // o que usar? usar find ou filter
  // onde vamos usar? data.employees
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find((e) => (
    e.firstName === employeeName || e.lastName === employeeName
  ));

  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // nem tudo é filter/map/find/reduce, essas coisas usamos com arrays.
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };

  return newEmployee;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceTotal = (Adult * data.prices.Adult)
    + (Child * data.prices.Child)
    + (Senior * data.prices.Senior);
  return priceTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {

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
