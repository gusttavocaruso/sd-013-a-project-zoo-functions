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

function getAnimalMap() {
  // const regions = ['NE', 'NW', 'SE', 'SW'];
  // const noParameter = species.reduce((acc, crr) => {
  //   return { ...acc, []}
  // }, {})

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

console.log(getSchedule('Tuesday'));

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
  const getanimalsId = employees.map((element) => element.responsibleFor);
  const emplyeesAndAnimais = getanimalsId.map((animalId) => {
    const findAnimalsbyId = species.find((specie) => specie.id === animalId);
    // return `${findAnimalsbyId.name}`
  })
}

//console.log(getEmployeeCoverage('Nigel'))


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
