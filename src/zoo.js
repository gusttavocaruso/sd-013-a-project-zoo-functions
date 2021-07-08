/* eslint-disable complexity */
const data = require('./data');

const { employees, prices } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const speciesById = [];
  data.species.forEach((eachSpecie) => {
    ids.forEach((id) => {
      if (eachSpecie.id === id) {
        speciesById.push(eachSpecie);
      }
    });
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimalName = data.species.find((specie) => specie.name === animal);
  return getAnimalName.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeByName = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeByName;
}

function createEmployee(personalInfo, associatedWith) {
}

function isManager(id) {
  return employees
    .some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  const newObj = {};
  if (!species) {
    data.species.forEach((specie) => {
      const nameAnimal = specie.name;
      const quantity = specie.residents.length;
      newObj[nameAnimal] = quantity;
    });
    return newObj;
  }
  const howManyAnimals = data.species.find((specie) => specie.name === species);
  return howManyAnimals.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  const priceAdult = prices.Adult;
  const priceChild = prices.Child;
  const priceSenior = prices.Senior;

  return (Adult * priceAdult)
  + (Child * priceChild) + (Senior * priceSenior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const getManageryById = employees
    .find((employee) => employee.id === id);
  const getFirstSpecie = data.species
    .find((specie) => specie.id === getManageryById.responsibleFor[0]);
  const getOlderAnimal = getFirstSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(getOlderAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  const newObj = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      const getName = `${employee.firstName} ${employee.lastName}`;
      const getAnimals = employee.responsibleFor;
      const animals = getAnimals.map((id) => data.species.find((specie) => specie.id === id).name);
      newObj[getName] = animals;
    });
  } employees.forEach((employee) => {
    if (employee.id === idOrName
      || employee.firstName === idOrName
      || employee.lastName === idOrName) {
      const getName = `${employee.firstName} ${employee.lastName}`;
      const getAnimals = employee.responsibleFor;
      const animals = getAnimals.map((id) => data.species.find((specie) => specie.id === id).name);
      newObj[getName] = animals;
    }
  }); return newObj;
}

console.log(getEmployeeCoverage());

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
