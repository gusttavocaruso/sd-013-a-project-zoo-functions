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

function checkTime(hour) {
  if (hour >= 12) return `${(hour - 12)}pm`;
  return `${hour}am`;
}
function message(day, hour) {
  if (hour[day].open !== hour[day].close) {
    return `Open from ${checkTime(hour[day].open)} until ${checkTime(hour[day].close)}`;
  }
  return 'CLOSED';
}

function getSchedule(dayName) {
  const allDays = {};
  const days = Object.keys(data.hours);
  days.forEach((day) => {
    allDays[day] = message(day, data.hours);
  });
  if (dayName) {
    const result = {};
    result[dayName] = allDays[dayName];
    return result;
  }
  return allDays;
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => id === emp.id);
  const animal = species.find((specie) => employee.responsibleFor[0] === specie.id);
  const oldestObj = animal.residents.sort((a, b) => b.age - a.age);
  const result = [`${oldestObj[0].name}`, `${oldestObj[0].sex}`, oldestObj[0].age];
  return result;
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((acc) => {
    data.prices[acc] = Math.round(data.prices[acc] * (1 + percentage / 100) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  // if (idOrName === undefined) {

  // } else {
  //   const findEmployee = employees.find((emp) => idOrName === emp.firstName || idOrName === emp.lastName || idOrName === emp.id);
  //   const result = {};
  //   result[`${findEmployee.firstName} ${findEmployee.lastName}`] = findEmployee.responsibleFor;
  //   return result;
  // }
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
