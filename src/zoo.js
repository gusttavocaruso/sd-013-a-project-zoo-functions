const data = require('./data');

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  // if (ids === undefined) return [];
  const result = species.filter((specie) => ids.includes(specie.id));
  return result;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const result = findAnimal.residents.every((anim) => anim.age >= age);
  return result;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const result = employees.find((employee) => employeeName === employee.firstName || employeeName === employee.lastName);
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // seu código aqui
  const manager = employees.find((employee) => employee.managers.includes(id));
  // console.log(manager);
  if (manager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers =[], responsibleFor =[]) {
  const result = data.employees.push({ id, firstName, lastName, managers, responsibleFor});
  return result;
}

function countAnimals(speciesName) {
  if (speciesName === undefined) {
    const allAnimals = {};
    data.species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  } else {
    const findAnimal = data.species.find((specie) => specie.name === speciesName);
    const result = findAnimal.residents.length;
    return result;
  }
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
