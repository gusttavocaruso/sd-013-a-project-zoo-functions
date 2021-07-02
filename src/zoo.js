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
  return console.log(ManagersArray.split().some((element2) => element2.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(obj);
}

function countAnimals(specie) {
  if (!specie) {
    const obj = {};
    species.forEach(element => obj[element.name] = element.residents.length);
    return obj;
  }
  const findSpecie = species.find((element) => element.name === specie).residents.length;
  return findSpecie;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const total = (Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior);
  return total;
}

function getAnimalMap() {
  const regions = ['NE', 'NW', 'SE', 'SW'];
  const noParameter = species.map((element) => {

    return element.location;
    //     .map((element2) => element2.name);
    // })
  });
}

function getSchedule(dayName) {
  const newObj = {};
  const newObj2 = {};
  for (const key in hours) {
    newObj[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
  }
  newObj.Monday = 'CLOSED';
  if (!dayName) return newObj;
  newObj2[dayName] = newObj[dayName];
  return newObj2;
}

//console.log(Object.entries(hours));

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

function increasePrices(percentage) {
  for (const key in prices) {
    prices[key] = (prices[key] + (prices[key] * percentage / 100)).toFixed(2);
  }
  return prices;
}

console.log(increasePrices(30));

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
