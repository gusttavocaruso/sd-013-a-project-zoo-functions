const { species } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const { hours } = require('./data');
const data = require('./data');
// console.log(employees);
// console.log(species);
// console.log(prices);
// console.log(hours);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((element) => ids.includes(element.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalList = species.find((element) => element.name === animal);
  const ageList = animalList.residents.every((element) => element.age >= age);
  return ageList;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeCheck = employees.find((element) => (
    element.firstName === employeeName || element.lastName === employeeName));
  return employeeName === undefined ? {} : employeCheck;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const createInfo = {};
  Object.assign(createInfo, personalInfo, associatedWith);
  return createInfo;
}

function isManager(id) {
  // seu código aqui
  return employees.some((element) => (element.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species2) {
  // seu código aqui
  const animalList = {};
  species.forEach(({ name, residents }) => {
    animalList[name] = residents.length;
  });
  const animalUnique = species.find((element) => element.name === species2);
  return species2 === undefined ? animalList : animalUnique.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // seu código aqui
  const price = prices.Adult * Adult + prices.Senior * Senior + prices.Child * Child;
  return price;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getScheduleWithParameter(dayName, keyHours) {
  const objSchedule = {};

  if (dayName !== 'Monday') {
    keyHours.forEach((key) => {
      if (key === dayName) {
        objSchedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
      }
    });
  } else {
    objSchedule.Monday = 'CLOSED';
  }
  return objSchedule;
}
function getScheduleWithOutParameter(keyHours) {
  const objSchedule = {};
  keyHours.forEach((key) => {
    if (key !== 'Monday') {
      objSchedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    } else {
      objSchedule[key] = 'CLOSED';
    }
  });
  return objSchedule;
}
function getSchedule(dayName) {
  // seu código aqui
  const keyHours = Object.keys(hours);
  if (dayName === undefined) {
    return getScheduleWithOutParameter(keyHours);
  }
  return getScheduleWithParameter(dayName, keyHours);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const arrayAnimal = [];
  const animalResponsible = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === animalResponsible.responsibleFor[0]);
  const firstAnimal = firstSpecie.residents.reduce((old, animal) => (
    (old.age > animal.age) ? old : animal));
  arrayAnimal[0] = firstAnimal.name;
  arrayAnimal[1] = firstAnimal.sex;
  arrayAnimal[2] = firstAnimal.age;

  return arrayAnimal;
}

function increasePrices(percentage) {
  // seu código aqui
  let priceAdult = prices.Adult;
  let priceSenior = prices.Senior;
  let priceChild = prices.Child;

  priceAdult = ((percentage / 100) * priceAdult) + priceAdult;
  priceSenior = ((percentage / 100) * priceSenior) + priceSenior;
  priceChild = ((percentage / 100) * priceChild) + priceChild;

  priceAdult = (Math.round(priceAdult * 100) / 100);
  priceSenior = (Math.round(priceSenior * 100) / 100);
  priceChild = (Math.round(priceChild * 100) / 100);

  prices.Adult = parseFloat(priceAdult);
  prices.Senior = parseFloat(priceSenior);
  prices.Child = parseFloat(priceChild);

  return prices;
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
