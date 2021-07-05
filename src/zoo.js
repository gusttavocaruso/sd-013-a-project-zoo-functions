const { prices } = require('./data');
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
  const newObj = Object.assign(personalInfo, associatedWith);
  return newObj;
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

function countAnimals(species) {
  const specie = data.species.filter(({ name }) => name === species);
  const lenght = specie.map(({ residents }) => residents.length)[0];
  const allSpecies = data.species.map(({ name }) => name);
  const amountSpecies = data.species.map(({ residents }) => residents.length);

  const objectSpecie = {};
  if (!species) {
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

}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
