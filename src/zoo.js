const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((residentes) => residentes.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((nomes) => nomes.firstName === employeeName
    || nomes.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((item) => item.managers.includes(id) === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function countAnimals(speciess) {
  if (!speciess) {
    const Obj = {};
    data.species.forEach((specie) => { Obj[specie.name] = specie.residents.length; });
    return Obj;
  }
  return data.species.find((specie) => specie.name === speciess).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce((acc, key) =>
    acc + prices[key] * entrants[key], 0);
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const objectReturn = { ...data.hours };
  Object.keys(objectReturn).forEach((item) => {
    const { open, close } = data.hours[item];
    objectReturn[item] = `Open from ${open}am until ${close - 12}pm`;
  });
  objectReturn.Monday = 'CLOSED';
  if (dayName) {
    const keyValue = {};
    Object.keys(objectReturn).forEach((item) => {
      if (item === dayName) {
        keyValue[item] = objectReturn[item];
      }
    });
    return keyValue;
  }
  return objectReturn;
}

function getOldestFromFirstSpecies(id) {
  const result = [];
  const employee = data.employees.find((element) => element.id === id);
  const specie = data.species.find((element) => element.id === employee.responsibleFor[0]);
  const oldAnimal = specie.residents.reduce((acc, current) => {
    if (current.age >= acc.age) return current;
    return acc;
  });
  result.push(oldAnimal.name);
  result.push(oldAnimal.sex);
  result.push(oldAnimal.age);
  return result;
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {

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
