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
  const mapByRegion = (region) => {
    const test = species.filter((element) => element.location === region);
    return test.map((element2) => element2.name);
  }
  if (!params) {
    const noParameter = species.reduce((acc, crr) => {
      return { ...acc, [crr.location]: mapByRegion(crr.location) }
    }, {})
    return noParameter;
  }
}

function getSchedule(dayName) {
  const entries = Object.entries(hours);
  const weekSchedule = entries.reduce((acc, crr) => {
    return { ...acc, [crr[0]]: `Open from ${crr[1].open}am until ${crr[1].close - 12}pm` };
  }, {});
  weekSchedule.Monday = 'CLOSED';
  console.log(Object.entries(weekSchedule));
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

function getEmployeeCoverage(idOrName) {
  const mapByName = (name) => {
    const test = species.filter((element) => element.name === name)
      .map((element2) => element2.responsibleFor);
  }
  // const AnimalsAndIds = species.reduce((acc, crr) => {
  //   return [...acc, crr.id, crr.name];
  // }, []);
  // return AnimalsAndIds;
  // const getIds = employees.map((element) => element.responsibleFor);
  // const test = getIds.map((element) => {
  //   return element.map((element2) => {
  //     return AnimalsAndIds.map((element3) => {
  //       if (element2 === element3[0]) return element3[1];
  //     })
  //   });
  // })

  // return test;
}
//console.log(getEmployeeCoverage())


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

const mapByName = (name) => {
  const newArray = [];
  const getAnimalsIds = employees.filter((element) => element.firstName === name)
    .map((element2) => element2.responsibleFor);
  const test = getAnimalsIds.forEach((element1) => {
    species.forEach((element2) => {
      if (element2.id === element1) return newArray.push(element2.name);
      console.log(element2.id, element1)
     })
  });
  return newArray;
}

console.log(mapByName('Burl'))