const { species, employees, prices } = require('./data');
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
  let counter;
  if (species1 === undefined) {
    /* counter = species.forEach((spec) => counter.push(`${spec.name} + ':' + ${spec.residents.length}`)); */
    return counter;
  }
  const residentSpecie = species.filter((specie) => specie.name === species1);
  counter = residentSpecie[0].residents.length;
  return counter;
}
/* console.log(countAnimals()); */
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
  /*  if (options === undefined){
    return {
  } */
}

function getSchedule(dayName) {
  // seu código aqui
}

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

function getEmployeeCoverage(idOrName) {
  const coverage = [];
  if (idOrName === undefined) {
    employees.forEach((employee) => coverage.push(`${employee.responsibleFor}`));
    return coverage;
  }
}
console.log(getEmployeeCoverage());
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
