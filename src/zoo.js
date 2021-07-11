const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesSelected = species.filter((specie, index) => specie.id === ids[index]);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  const implementation = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return implementation;
}

function createEmployee(personalInfo, associatedWith) {
  const result = { ...personalInfo, ...associatedWith };

  return result;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animalSpecies) {
  const allAnimalQuantity = {};
  const searchedSpecie = species.find((specie) => specie.name === animalSpecies);

  if (!animalSpecies) {
    species.forEach(({ name, residents }) => { allAnimalQuantity[name] = residents.length; });
    return allAnimalQuantity;
  }

  return searchedSpecie.residents.length;
}

function calculateEntry(entrants = 0) {
  const entrantEntries = Object.entries(entrants);
  const priceEntries = Object.entries(prices);

  const findPrices = entrantEntries.map(([entrant]) => priceEntries
    .find(([typeEntrant]) => entrant === typeEntrant));

  const calculation = findPrices
    .map((array, index) => array[1] * entrantEntries[index][1])
    .reduce((accumulator, number) => accumulator + number, 0);

  return calculation;
}

function getAnimalMap(options) {
  let object = {};
  const speciesLocations = species
    .map((specie) => specie.location);

  if (!options) {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name);
    });
  } else if (options.includeNames && options.sorted) {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => {
          return {
            [animal]: species
              .find((specie) => specie.name === animal).residents
              .map((resident) => resident.name).sort()
          };
        });
    });
  } else if (options.includeNames && options.sex === 'male') {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => {
          return {
            [animal]: species
              .find((specie) => specie.name === animal).residents
              .filter((resident) => resident.sex === 'male')
              .map((resident) => resident.name)
          };
        });
    });
  } else if (options.includeNames && options.sex === 'female') {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => {
          return {
            [animal]: species
              .find((specie) => specie.name === animal).residents
              .filter((resident) => resident.sex === 'female')
              .map((resident) => resident.name)
          };
        });
    });
  } else if (options.includeNames && options.sex === 'female' && sorted) {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => {
          return {
            [animal]: species
              .find((specie) => specie.name === animal).residents
              .filter((resident) => resident.sex === 'female')
              .map((resident) => resident.name)
          };
        });
    });
  } else if (options.includeNames) {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => {
          return {
            [animal]: species
              .find((specie) => specie.name === animal).residents
              .map((resident) => resident.name)
          };
        });
    });
  }

  return object;
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' })['NE']);
// console.log(getAnimalMap({ IncludeNames: true }));

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
