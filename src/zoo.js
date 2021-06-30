const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  const ret = [];
  ids.forEach((id) => {
    const search = data.species.find((item) => item.id === id);
    ret.push(search);
  });
  return ret;
}

function getAnimalsOlderThan(animal, age) {
  const search = data.species.find((item) => item.name === animal);
  return search.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  let ret = false;
  data.employees.forEach((item) => {
    item.managers.forEach((i) => {
      if (i === id) ret = true;
    });
  });
  return ret;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    const ret = {};
    data.species.forEach((item) => {
      ret[item.name] = item.residents.length;
    });
    return ret;
  }
  const search = data.species.find((item) => item.name === species);
  return search.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const price = data.prices;
  const sum = (price.Adult * Adult) + (price.Child * Child) + (price.Senior * Senior);
  return sum;
}

function getAnimalMap(options) {
  //
}

function getSchedule(dayName) {
  const obj = data.hours;
  const ret = {};
  if (dayName === undefined) {
    Object.keys(obj).forEach((i) => {
      ret[i] = i === 'Monday' ? 'CLOSED'
        : `Open from ${obj[i].open}am until ${obj[i].close - 12}pm`;
    });
    return ret;
  }
  ret[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${obj[dayName].open}am until ${obj[dayName].close - 12}pm`;
  return ret;
}

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((i) => i.id === id);
  const firstSpecies = data.species.find((j) => j.id === employee.responsibleFor[0]);
  const sortResidents = firstSpecies.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortResidents[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const multiplier = (percentage / 100) + 1;
  const price = data.prices;
  Object.keys(price).forEach((i) => {
    price[i] = Math.round((price[i] * multiplier * 100)) / 100;
  });
}

function getEmployeeCoverage(p) {
  const ret = {};
  if (p === undefined) {
    data.employees.forEach((i) => {
      ret[`${i.firstName} ${i.lastName}`] = [];
      i.responsibleFor.forEach((j) => {
        const animal = data.species.find((ani) => ani.id === j);
        ret[`${i.firstName} ${i.lastName}`].push(animal.name);
      });
    });
    return ret;
  }
  const e = data.employees.find((i) => i.id === p || i.firstName === p || i.lastName === p);
  ret[`${e.firstName} ${e.lastName}`] = [];
  e.responsibleFor.forEach((i) => {
    const animal = data.species.find((ani) => ani.id === i);
    ret[`${e.firstName} ${e.lastName}`].push(animal.name);
  });
  return ret;
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
