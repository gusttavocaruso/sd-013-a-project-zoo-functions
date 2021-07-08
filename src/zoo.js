const { prices, hours, species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, ageAnimal) {
  const animalName = data.species.filter(({ name }) => name === animal);
  const residentsAge = animalName.map(({ residents }) => residents.map((age) => age.age));

  return residentsAge[0].every((ages) => ages >= ageAnimal);
}

function getEmployeeByName(employ) {
  if (!employ) {
    return {};
  }
  if (data.employees.find(({ firstName }) => firstName === employ) !== undefined) {
    return data.employees.find(({ firstName }) => firstName === employ);
  }
  return data.employees.find(({ lastName }) => lastName === employ);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(idOfEmploy) {
  const managers = [
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  ];
  const idEmployer = data.employees.find(({ id }) => id === idOfEmploy);
  return idEmployer.managers.includes(...managers);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employ = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employ);
}

function countAnimals(speciesAnim) {
  const specie = data.species.filter(({ name }) => name === speciesAnim);
  const lenght = specie.map(({ residents }) => residents.length)[0];
  const allSpecies = data.species.map(({ name }) => name);
  const amountSpecies = data.species.map(({ residents }) => residents.length);

  const objectSpecie = {};
  if (!speciesAnim) {
    for (let i = 0; i < allSpecies.length; i += 1) {
      objectSpecie[allSpecies[i]] = amountSpecies[i];
    }
    return objectSpecie;
  }
  return lenght;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }

  const { Child = 0, Senior = 0, Adult = 0 } = entrants;

  return ((Child * prices.Child) + (Senior * prices.Senior) + (Adult * prices.Adult));
}

function getAnimalMap(options) {
  // terminar depois!
  const returnObj = {};
  // const { includeNames } = options;
  const regions = ['NE', 'NW', 'SE', 'SW'];

  if (!options) { // ativa apenas quando não há parametros.
    regions.forEach((region) => {
      returnObj[region] = species.filter(({ location }) => location === region)
        .map((item) => item.name);
    });
  }
  return returnObj;
}

function getSchedule(dayName) {
  const week = Object.keys(hours);
  const val = Object.values(hours);
  const alert = {};

  week.forEach((it, i) => {
    alert[it] = `Open from ${val[i].open}am until ${val[i].close - 12}pm`;
  });

  /* for (let i = 0; i < week.length; i += 1) {
    alert[week[i]] = `Open from ${values[i].open}am until ${values[i].close - 12}pm`; */
  alert.Monday = 'CLOSED';
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (dayName) {
    const indi = {};
    indi[dayName] = alert[dayName];
    return indi;
  }
  return alert;
}

function getOldestFromFirstSpecies(id) {
  const employResponsi = data.employees.filter((item) => item.id === id)
    .map((item) => item.responsibleFor[0]);

  const animalName = species.filter((idAnim) => idAnim.id === employResponsi[0])
    .map(({ residents }) => residents);

  const ageAnimal = species.filter((idAnim) => idAnim.id === employResponsi[0])
    .map(({ residents }) => residents.map(({ age }) => age)
      .sort((a, b) => a < b)[0])[0];

  const biggestAnimal = animalName[0].find((item) => item.age === ageAnimal);

  return Object.values(biggestAnimal);
}

function increasePrices(percentage) {
  if (!percentage || percentage === 0) return prices;
  const percent = (percentage / 100) + 1;
  const { Senior, Adult, Child } = data.prices;
  const valueSenior = Math.round((Senior * percent) * 100) / 100;
  const valueAdult = Math.round((Adult * percent) * 100) / 100;
  const valueChild = Math.round((Child * percent) * 100) / 100;

  data.prices = {
    Adult: valueAdult,
    Child: valueChild,
    Senior: valueSenior,
  };
  return prices;
}

function getEmployeeCoverage(idOrName) {
  const objReturn = {};
  const employ = employees.find(({ id, firstName }) => id === idOrName
    || firstName === idOrName);

  const { responsibleFor, firstName, lastName } = employ;

  const animals = responsibleFor.map((animal) => species.find(({ id }) => id === animal).name);

  objReturn[`${firstName} ${lastName}`] = animals;
  return objReturn;
}

console.log(getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

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
