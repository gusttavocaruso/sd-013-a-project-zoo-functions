const { species, employees, prices } = require('./data');
const data = require('./data');

// console.table(employees);
// console.table(employees[0]);

function getSpeciesByIds(...ids) {
  const resultadoBusca = [];
  ids.forEach((specieId) => {
    const buscaId = data.species.find((elemento) => elemento.id === specieId);
    resultadoBusca.push(buscaId);
  });
  return resultadoBusca;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elementoX) => elementoX.name === animal)
    .residents.every((elementoY) => elementoY.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employeeCreated = { lastName: personalInfo.lastName,
    firstName: personalInfo.firstName,
    id: personalInfo.id,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employeeCreated;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }
  return species.find((specimen) => specimen.name === specie).residents.length;
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
