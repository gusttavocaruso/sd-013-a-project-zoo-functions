const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const filterById = species.filter((element) => element.id === ids[0] || element.id === ids[1]);
  return filterById;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((element) => (element.name === animal));
  return findAnimal.residents.every((check) => check.age > age);
}

function getEmployeeByName(employeeName) {
  const findEmployee = employees
    .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return (!findEmployee) ? {} : findEmployee;
}

function createEmployee({ id, firstName, lastName }, associatedWith) {
  return { id, firstName, lastName, ...associatedWith };
}

function isManager(id) {
  const ManagersArray = employees.map((element) => element.managers).join();
  return ManagersArray.split().some((element2) => element2.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(obj);
}

function countAnimals(specie) {
  if (!specie) {
    const obj = species.reduce((acc, crr) => ({ ...acc, [crr.name]: crr.residents.length }), {});
    return obj;
  }
  const findSpecie = species.find((element) => element.name === specie).residents.length;
  return findSpecie;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const total = (Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior);
  return total;
}

function getAnimalMap(params) {
}
function getSchedule(dayName) {
  const entries = Object.entries(hours);
  const msg = (param) => `Open from ${param[1].open}am until ${param[1].close - 12}pm`;
  const weekSchedule = entries
    .reduce((acc, crr) => ({ ...acc, [crr[0]]: msg(crr) }), {});
  weekSchedule.Monday = 'CLOSED';
  if (!dayName) return weekSchedule;
  const newObj = {};
  newObj[dayName] = weekSchedule[dayName];
  return newObj;
}

function getOldestFromFirstSpecies(id) {
  const findAnimalById = employees.find((element) => element.id === id).responsibleFor[0];
  const findResidentsById = species.find((element) => element.id === findAnimalById).residents;
  const findOldest = findResidentsById.reduce((acc, element) => {
    if (element.age > acc.age) return element;
    return acc;
  });
  const { name, sex, age } = findOldest;
  return [name, sex, age];
}

// feito com ajuda do Gustavo Mauricio turma 13A
function increasePrices(percentage) {
  const newPrice = prices;
  const increase = (percentage / 100) + 1;
  return Object.keys(newPrice).forEach((element) => {
    newPrice[element] = Math.round((newPrice[element] * increase * 100)) / 100;
  });
}

const fetchId = (id) => {
  for (let i = 0; i < id.length; i += 1) {
    species.forEach((element) => {
      if (element.id === id[i]) return id.splice(i, 1, element.name);
    });
  }
  return id;
};

function getEmployeeCoverage(idOrName) {
  const newObj = {};
  if (!idOrName) {
    const namesAndAnimals = employees
      .reduce((acc, crr) =>
        ({ ...acc, [`${crr.firstName} ${crr.lastName}`]: fetchId(crr.responsibleFor) }), {});
    return namesAndAnimals;
  }
  employees.forEach((member) => {
    if (member.firstName === idOrName || member.lastName === idOrName || member.id === idOrName) {
      newObj[`${member.firstName} ${member.lastName}`] = fetchId(member.responsibleFor);
    }
  });
  return newObj;
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
