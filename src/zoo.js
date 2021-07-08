const data = require('./data');

const { prices, species, employees, hours } = data;

function getSpeciesByIds(...ids) {
  const newAnimals = [];
  if (!ids) return [];

  ids.forEach((id) => {
    const findId = species.find((specie) => specie.id === id);
    newAnimals.push(findId);
  });

  return newAnimals;
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees
    .some((employee) => (employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(theSpecie) {
  if (!theSpecie) {
    const theAnimals = {};
    species.forEach((specie) => { theAnimals[specie.name] = specie.residents.length; });

    return theAnimals;
  }

  return species
    .find((specie) => specie.name === theSpecie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const result = Object.keys(entrants).reduce((acc, theEntrant) => {
    const updatedEntry = acc + (entrants[theEntrant] * prices[theEntrant]);
    return updatedEntry;
  }, 0);

  return result;
}
/* funções auxiliares para getAnimalMap() */
function noParams(theLocation) {
  const result = {};

  theLocation.forEach((location) => {
    result[location] = species
      .filter((specie) => specie.location === location)
      .map((animal) => animal.name);
  });

  return result;
}

function includeNames(theLocation, options) {
  // const result = {};
  // theLocation.forEach((location) => {
  //   result[location] = species.filter((animal) => animal.location === location)
  //     .map((animal) => {
  //       const mapped = {};
  //       const filteredSex = animal.residents.filter((specie) => specie.sex === options.sex);
  //       mapped[animal.name] = animal.residents.map((resident) => resident.name);
  //       if (options.sex) {
  //         mapped[animal.name] = filteredSex.map((resident) => resident.name);
  //       } else {
  //         mapped[animal.name] = animal.residents.map((resident) => resident.name);
  //       }
  //       if (options.sorted) mapped[animal.name] = mapped[animal.name].sort();
  //       return mapped;
  //     });
  // });

  // return result;
}

function sortedAnimals(options) {}

/* fim das funções auxiliares */

// não consigo fazer de forma alguma! comentei pra não atrapalhar minhas notas
// farei somente o minimo necessário. Ta muito difícil.
function getAnimalMap(options) {
  // const theLocation = Array.from({});
  // species.forEach(({ location }) => theLocation.push(location));
  // if (!options) return noParams(theLocation);
  // if (options.includeNames) return includeNames(theLocation, options);
  // if (options.sorted) return sortedAnimals(theLocation);
}

function getSchedule(dayName = '') { // se bão colocar este default destructuring, falha um teste
  const valueHours = Object.values(hours);
  const keyHours = Object.keys(hours);
  const day = {};
  const newDays = {};

  keyHours.forEach((key, i) => {
    if (i === keyHours.length - 1) {
      day[key] = 'CLOSED';
    } else {
      day[key] = `Open from ${valueHours[i].open}am until ${(valueHours[i].close) - 12}pm`;
    }
  });

  newDays[dayName] = day[dayName];
  return dayName === '' ? day : newDays;
}

function getOldestFromFirstSpecies(id) {
  const firstEmployeeAnimal = employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const oldestAnimal = species
    .find((specie) => specie.id === firstEmployeeAnimal).residents
    .sort((a, b) => b.age - a.age);

  return [oldestAnimal[0].name, oldestAnimal[0].sex, oldestAnimal[0].age];
}

function increasePrices(percentage) {
  const price = Object.keys(prices);
  price.forEach((item) => {
    prices[item] = Math.round(prices[item] * ((percentage / 100) + 1) * 100) / 100;
  });
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
