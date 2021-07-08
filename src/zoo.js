const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const littleAnimal = species.filter((anim) => anim.name === animal);
  return littleAnimal.every((animalResid) =>
    animalResid.residents.every((old) => old.age >= age));
}

function getEmployeeByName(employeeName = {}) {
  const enp = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return enp === undefined ? {} : enp;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((manager) =>
    manager.managers.some((d) => d === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  return specie !== undefined
    ? species.find((a) => a.name === specie).residents.length : {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
}

function calculateEntry(entrants = {}) {
  return (entrants.Adult === undefined ? 0 : entrants.Adult) * prices.Adult
  + (entrants.Child === undefined ? 0 : entrants.Child) * prices.Child
  + (entrants.Senior === undefined ? 0 : entrants.Senior) * prices.Senior;
}

function getAnimalMap(options) {
  // const animalsLocation = {
  //   NE: species.filter((a) => a.location === 'NE').map((a) => a.name),
  //   NW: species.filter((a) => a.location === 'NW').map((a) => a.name),
  //   SE: species.filter((a) => a.location === 'SE').map((a) => a.name),
  //   SW: species.filter((a) => a.location === 'SW').map((a) => a.name),
  // };
}

function getSchedule(dayName) {
  let obj = {};
  if (!dayName) {
    obj = {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  } else if (dayName === 'Monday') {
    obj = { Monday: 'CLOSED' };
  } else {
    obj = { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  }
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const arrayWithNamesAnimals = [];
  species.filter((b) => (employees.find((employee) =>
    employee.id === id).responsibleFor).indexOf(b.id) !== -1).forEach((a) =>
    arrayWithNamesAnimals.push(...a.residents));
  const resultOldAnimal = Object.values(arrayWithNamesAnimals.sort((c, d) => d.age - c.age)[0]);
  return resultOldAnimal;
}

function increasePrices(percentage) {
  const mult = 1 + (percentage * 0.01);
  const result = prices;
  Object.entries(prices).forEach((ticket) => {
    result[ticket[0]] = Math.round((ticket[1] * mult) * 100) / 100;
  });
  return result;
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
