const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const speciesById = [];

  ids.forEach((id) => {
    const result = species.filter((specie) => specie.id === id);
    speciesById.push(...result);
  });

  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const currentSpecie = species.find((specie) => specie.name === animal);

  const { residents } = currentSpecie;
  const hasMinAge = residents.every((resident) => resident.age > age);

  return hasMinAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const { employees } = data;
  const employeeData = employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return employee;
    }
    return null;
  });

  return employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;

  const currentEmployee = employees.some((employee) => {
    const { managers } = employee;
    const isInManagerList = managers.find((manager) => manager === id);

    return isInManagerList;
  });

  return currentEmployee;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const { species: speciesData } = data;

  if (!species) {
    const speciesCount = speciesData.reduce((acc, specie) => {
      const { name, residents } = specie;
      acc[name] = residents.length;
      return acc;
    }, {});
    return speciesCount;
  }

  const { residents } = speciesData.find((specie) => specie.name === species);
  const currentSpecieCount = residents.length;

  return currentSpecieCount;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const { prices } = data;
  const { Adult, Senior, Child } = prices;
  let total = 0;

  if (entrants.Adult) total += entrants.Adult * Adult;
  if (entrants.Senior) total += entrants.Senior * Senior;
  if (entrants.Child) total += entrants.Child * Child;

  return total;
}

function getAnimalMapByLocation(species) {
  const speciesByLocation = species.reduce((acc, specie) => {
    const { name, location } = specie;

    if (!acc[location]) acc[location] = [];

    acc[location].push(name);

    return acc;
  }, {});
  // console.log(speciesByLocation);
  return speciesByLocation;
}

function filterAnimalNamesBySex(residents, sex) {
  const filteredAnimals = residents.filter((resident) => resident.sex === sex);
  const animalsWithSelectedSex = filteredAnimals.map((filteredAnimal) => filteredAnimal.name);

  return animalsWithSelectedSex;
}

function getAnimalMapWithNames(species, sorted, sex) {
  const speciesWithNames = species.reduce((acc, specie) => {
    const { name, location, residents } = specie;

    if (!acc[location]) acc[location] = [];

    const AnimalNamesList = {};
    AnimalNamesList[name] = residents.map((resident) => resident.name);

    if (sex) AnimalNamesList[name] = filterAnimalNamesBySex(residents, sex);
    if (sorted) AnimalNamesList[name].sort();

    acc[location].push(AnimalNamesList);

    return acc;
  }, {});
  // console.log(speciesWithNames);
  return speciesWithNames;
}

// function getAnimalMapBySex(species, sorted) {
//   const speciesWithNames = species.reduce((acc, specie) => {
//     const { name, location, residents } = specie;

//     if (!acc[location]) acc[location] = [];

//     const AnimalNamesList = {};
//     AnimalNamesList[name] = residents.map((resident) => resident.name);

//     if (sorted) AnimalNamesList[name].sort();

//     acc[location].push(AnimalNamesList);

//     return acc;
//   }, {});
//   // console.log(speciesWithNames);
//   return speciesWithNames;
// }

function getAnimalMap(options = { includeNames: false }) {
  const { species } = data;
  let animalList = {};

  if (!options || !options.includeNames) {
    animalList = getAnimalMapByLocation(species);
  } else {
    const { sorted, sex } = options;
    animalList = getAnimalMapWithNames(species, sorted, sex);
  }

  return animalList;
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
