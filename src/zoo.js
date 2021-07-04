const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const toReturn = [];
  ids.forEach((id) => {
    const currentAnimal = data.species.find((specie) => specie.id === id);
    toReturn.push(currentAnimal);
  });
  return toReturn;
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => (
      (employee.firstName === employeeName)
      || (employee.lastName === employeeName)
    ));
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes((id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (!species) {
    const everyAnimalPopulation = {};
    data.species.forEach((specie) => {
      everyAnimalPopulation[specie.name] = specie.residents.length;
    });
    return everyAnimalPopulation;
  }
  const specieChosen = data.species.find((specie) => specie.name === species);
  return specieChosen.residents.length;
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
