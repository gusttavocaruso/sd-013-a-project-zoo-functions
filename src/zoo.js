const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employee = employees.find(({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName);
  return employeeName === undefined ? {} : employee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(animal) {
  const allAnimals = () => {
    const animals = {};
    species.forEach(({ name, residents }) => {
      animals[name] = residents.length;
    });
    return animals;
  };
  const oneAnimal = () => species.find(({ name }) => name === animal).residents.length;
  return animal === undefined ? allAnimals() : oneAnimal();
}

function calculateEntry(entrants = 0) {
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChildPrices, Senior: SeniorPrices, Adult: AdultPrices } = prices;
  const total = ChildPrices * Child + SeniorPrices * Senior + AdultPrices * Adult;
  return total;
}

function getAnimalMap(options) {
  const animalMap = {
    NE: species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };
  return animalMap;
}
console.log(getAnimalMap());

function getSchedule(dayName = '') {
  const days = {};
  const oneDay = {};
  const hoursKey = Object.keys(hours);
  const hoursValue = Object.values(hours);
  hoursKey.forEach((key, index) => {
    if (index === hoursKey.length - 1) {
      days[key] = 'CLOSED';
    } else {
      days[key] = `Open from ${hoursValue[index].open}am until ${(hoursValue[index].close) - 12}pm`;
    }
  });
  oneDay[dayName] = days[dayName];
  return dayName === '' ? days : oneDay;
}
console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id) {

}

function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
}

function getEmployeeCoverage(idOrName) {

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
