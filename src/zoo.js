const data = require('./data');

function getSpeciesByIds(...ids) { // os tres pontos faz com o o parametro venha como um array, e seja não obrigatório.
  if (ids.length === 0) return ids; // caso venha vasio, retorna o array vazio.

  return data.species.filter((specie) => ids.includes(specie.id)); // filtra as especies com os array passados no array
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.filter((specie) => specie.name.includes(animal));
  const ages = animalSpecie[0].residents.find((info) => info.age < age);
  if (ages) return false;
  return true;
}

function getEmployeeByName(employeeName) {
  const result = {};
  const findEmployer = data.employees.filter((employer) => {
    let found = employer.firstName.includes(employeeName);
    if (!found) found = employer.lastName.includes(employeeName);
    return found;
  });
  return findEmployer.length ? findEmployer[0] : result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const managers = [];
  data.employees.forEach((employee) => employee.managers.forEach((Id) => managers.push(Id)));
  return managers.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(employee);
}

function countAnimals(species) {
  // seu código aqui
  const animalAmount = {};
  data.species.forEach((specie) => {
    animalAmount[specie.name] = specie.residents.length;
  });
  return animalAmount[species] || animalAmount;
}

function calculateEntry(entrants = { Adult: 0, Child: 0, Senior: 0 }) {
  const { prices } = data;
  let totalPrice = 0;
  if (entrants.Adult) totalPrice += entrants.Adult * prices.Adult;
  if (entrants.Child) totalPrice += entrants.Child * prices.Child;
  if (entrants.Senior) totalPrice += entrants.Senior * prices.Senior;
  return totalPrice;
}

// ============== funções usadas em getAnimalMap ==================
// retorna as localidades
// const possibleLocatioins = () => {
//   const locations = [];
//   data.species.forEach((specie) => {
//     if (!(locations.includes(specie.location))) locations.push(specie.location);
//   });
//   return locations;
// };

// retorna um objeto com as localidades e especies continas em cada localidade.
const animalsLocation = (calback = ((name) => name)) => {
  const locations = {};
  data.species.forEach((specie) => {
    locations[specie.location] = data.species
      .filter((findSpecie) => findSpecie.location === specie.location)
      .map((foundSpecie) => calback(foundSpecie.name));
  });
  return locations;
};

// dado um nome de especie, retorna um objeto com as especificações desta
const getSpecieByName = (animalSpecieName) => {
  const findSpecie = data.species.filter((specie) => specie.name.includes(animalSpecieName));
  return findSpecie[0];
};

// dado uma especie, retorna o nome dos individuos da mesma
const getNamesBySpecie = (specie) => specie.residents.map((animal) => animal.name);
getNamesBySpecie(getSpecieByName('lions'));

// dada uma localidade, retorna as especies da mesma.
// const getSpecieByLocations = (location) => {
//   const foundSpecies = data.species
//     .filter((findSpecie) => findSpecie.location === location)
//     .map((specie) => specie.name);
//   return foundSpecies;
// };

const locationsAndNames = () => {
  const result = animalsLocation((name) => {
    // console.log(name);
    const specieNames = {};
    specieNames[name] = getNamesBySpecie(getSpecieByName(name));
    return specieNames;
  });
  return result;
};
// ============================================================================================

function getAnimalMap(options) {
  if (!options) return animalsLocation();
  if (options.includeNames) return locationsAndNames();
}

// const Tuesday = { open: 8, close: 18 };

const fullSchedule = (hours) => {
  const operation = {};
  Object.keys(hours).forEach((key) => {
    operation[key] = hours[key].open !== 0
      ? `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`
      : 'CLOSED';
  });
  return operation;
};

const oneDaySchedule = (hours, key) => {
  const operation = {};
  operation[key] = hours[key].open !== 0
    ? `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`
    : 'CLOSED';

  return operation;
};

function getSchedule(dayName) {
  const { hours } = data;
  return dayName ? oneDaySchedule(hours, dayName) : fullSchedule(hours);
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
// vamos que vamos
