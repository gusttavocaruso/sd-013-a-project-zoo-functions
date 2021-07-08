const data = require('./data');
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const especiesId = species.filter((especie) => ids.includes(especie.id));
  return especiesId;
}

function getAnimalsOlderThan(animal, age) {
  const encontraAnimal = species.find((specie) => specie.name === animal);
  const verificaIdade = encontraAnimal.residents.every((resident) => resident.age >= age);
  return verificaIdade;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const funcionario = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const getManager = data.employees.find((employee) => employee.managers.includes(id));
  if (getManager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const dadosEmployee = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return dadosEmployee;
}

function countAnimals(speciesNames) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});
  if (!speciesNames) return allAnimals;
  return allAnimals[speciesNames];
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

// REQUISITO 9:
function getAnimalName(animalName, sorted, sex) {
  let result = data.species.find((animal) => animal.name === animalName);
  result = result.residents;
  if (typeof sex === 'string') {
    result = result.filter((animal) => animal.sex === sex);
  }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort();
  return { [animalName]: result };
}
function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  let result = data.species.reduce((acc, cur) => {
    const { name, location } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalName]) => {
      acc[key] = animalName.map((name) => getAnimalName(name, sorted, sex));
      return acc;
    }, {});
  }
  return result;
}
// Fim do requisito 9!

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
