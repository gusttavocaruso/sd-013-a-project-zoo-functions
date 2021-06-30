const data = require('./data');

function getSpeciesByIds(...ids) {
  const arr = [];
  ids.forEach((id) => {
    data.species.filter((specie) => {
      if (specie.id === id) {
        arr.push(specie);
      } return arr;
    });
  });
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  const dataAnimal = data.species.find((specie) => specie.name === animal);
  return dataAnimal.residents.every((residente) => residente.age > age);
}

function getEmployeeByName(employeeName = []) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee
      .lastName === employeeName);
}

console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
