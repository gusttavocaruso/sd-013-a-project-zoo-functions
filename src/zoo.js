const { prices } = require('./data');
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

function getEmployeeByName(empName) {
  if (empName === undefined) return {};
  const result = employees.find((emp) => empName === emp.firstName || empName === emp.lastName);
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const manager = employees.find((employee) => employee.managers.includes(id));
  // console.log(manager);
  if (manager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const result = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return result;
}

function countAnimals(speciesName) {
  if (speciesName === undefined) {
    const allAnimals = {};
    data.species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  const findAnimal = data.species.find((specie) => specie.name === speciesName);
  const result = findAnimal.residents.length;
  return result;
}

function calculateEntry(entrants) {
  const { Adult, Child, Senior } = prices;
  let total = [];
  if (entrants) {
    total = [
      (entrants.Adult * Adult),
      (entrants.Child * Child),
      (entrants.Senior * Senior),
    ];
    const grandTotal = total.reduce((acc, cur) => (cur ? acc + cur : acc), 0);
    return grandTotal;
  }
  return 0;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // if (dayName === undefined) {
  //   return 0;
  // } else {
  //   const findDay = Object.keys(data.hours).find((key) => hours[key] === dayName);
  //   console.log(findDay);
  // return { ${dayName}: `Open from ${findDay}am until ${}pm` };
  // }
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((acc) => {
    data.prices[acc] = Math.round(data.prices[acc] * (1 + percentage / 100) * 100) / 100;
  });
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
