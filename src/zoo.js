const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const arraySpecies = [];
  ids.forEach((id) => {
    const espcSpecies = species.find((specie) => specie.id === id);
    arraySpecies.push(espcSpecies);
  });
  return arraySpecies;
}

function getAnimalsOlderThan(animal, age) {
  const specieAnimal = species.filter((specie) => (
    specie.name === animal));
  const specieRes = specieAnimal[0].residents.filter((residents) => residents.age < age);
  return specieRes.length === 0;
}

function getEmployeeByName(employeeName) {
  const employeeFindFirst = employees.filter((employee) => employee.firstName === employeeName);
  const employeeFindLast = employees.filter((employee) => employee.lastName === employeeName);
  if (employeeFindFirst.length !== 0) {
    return employeeFindFirst[0];
  }
  if (employeeFindLast[0] !== undefined) {
    return employeeFindLast[0];
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  const idSearch = employees.filter((employee) => employee.id === id);
  return idSearch[0].managers.length <= 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeToAdd = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employeeToAdd);
}

function countAnimals(species1) {
  if (!species1) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  const residentSpecie = species.filter((specie) => specie.name === species1);
  const counter = residentSpecie[0].residents.length;
  return counter;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const priceAdult = Adult * prices.Adult;
  const priceChild = Child * prices.Child;
  const priceSenior = Senior * prices.Senior;
  return priceAdult + priceChild + priceSenior;
}

function getAnimalMap(options) {

}
function convertHour(hour) {
  if (hour > 12) {
    return hour - 12;
  }
  return hour;
}

function getScheduleScentence(dayArray) {
  if (dayArray.open === dayArray.close) {
    return 'CLOSED';
  }
  const openHour = convertHour(dayArray.open);
  const closeHour = convertHour(dayArray.close);
  return `Open from ${openHour}am until ${closeHour}pm`;
}

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    const days = Object.entries(hours);
    days.forEach((day) => {
      schedule[`${day[0]}`] = getScheduleScentence(day[1]);
    });
    return schedule;
  }
  const dayArray = hours[`${dayName}`];
  schedule[`${dayName}`] = getScheduleScentence(dayArray);
  return schedule;
}
console.log(getSchedule());
function getOldestFromFirstSpecies(id) {
  const employessInfo = employees.filter((employee) => employee.id === id);
  const animalFind = employessInfo[0].responsibleFor[0];
  const animalArray = species.filter((specie) => specie.id === animalFind);
  const residentsAnimal = animalArray[0].residents;
  const olderResident = residentsAnimal.sort((a, b) => b.age - a.age);
  return Object.values(olderResident[0]);
}

function increasePrices(percentage) {
  const { Adult, Child, Senior } = prices;
  const adjustPrice = (entry) => Math.ceil(entry * (percentage + 100)) / 100;
  prices.Adult = adjustPrice(Adult);
  prices.Child = adjustPrice(Child);
  prices.Senior = adjustPrice(Senior);
}

function getAnimalName(idAnimal) {
  const animalFind = species.filter((specie) => specie.id === idAnimal);
  return animalFind[0].name;
}

function getEmployeeCoverage(idOrName) {
  const covarage = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      covarage[`${fullName}`] = employee.responsibleFor.map(getAnimalName);
    });
    return covarage;
  }
  let employeeSelected = employees.filter((employee) => employee.id === idOrName);
  if (employeeSelected.length === 0) {
    employeeSelected = employees.filter((employee) => employee.firstName === idOrName);
  }
  if (employeeSelected.length === 0) {
    employeeSelected = employees.filter((employee) => employee.lastName === idOrName);
  }
  const fullName = `${employeeSelected[0].firstName} ${employeeSelected[0].lastName}`;
  covarage[`${fullName}`] = employeeSelected[0].responsibleFor.map(getAnimalName);
  return covarage;
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
