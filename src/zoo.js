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

const isMapWithSex = (parameter, object, locations) => {
  const { includeNames, sex, sorted } = parameter;

  if (includeNames && typeof sex !== 'undefined' && typeof sorted === 'undefined') {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .filter((resident) => resident.sex === parameter.sex)
          .map((resident) => resident.name) }));
    });
    return object;
  }
};

const isMapWithSort = (parameter, object, locations) => {
  const { includeNames, sex, sorted } = parameter;

  if (includeNames && sorted && typeof sex === 'undefined') {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .map((resident) => resident.name).sort() }));
    });
  }

  return object;
};

const isMapWithSexAndSort = (parameter, object, locations) => {
  const { includeNames, sex, sorted } = parameter;

  if (includeNames && typeof sex !== 'undefined' && sorted) {
    locations.map((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .filter((resident) => resident.sex === parameter.sex)
          .map((resident) => resident.name).sort() }));
    });
  }

  return object;
};

const isMapJustWithNames = (parameter, object, locations) => {
  const { includeNames, sex, sorted } = parameter;

  if (includeNames && typeof sex === 'undefined' && typeof sorted === 'undefined') {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .map((resident) => resident.name) }));
    });
  }

  return object;
};

// const mapSexOrSexSort = (parameter, object, locations) => {
//   if (parameter.includeNames && typeof parameter.sex !== 'undefined' && parameter.sorted) {
//     locations.forEach((location) => {
//       object[location] = species
//         .filter((specie) => specie.location === location)
//         .map((specie) => specie.name)
//         .map((animal) => {
//           return {
//             [animal]: species
//               .find((specie) => specie.name === animal).residents
//               .filter((resident) => resident.sex === parameter.sex)
//               .map((resident) => resident.name).sort(),
//           };
//         });
//     });
//   } else if (parameter.includeNames && typeof parameter.sex !== 'undefined') {
//     locations.forEach((location) => {
//       object[location] = species
//         .filter((specie) => specie.location === location)
//         .map((specie) => specie.name)
//         .map((animal) => {
//           return {
//             [animal]: species
//               .find((specie) => specie.name === animal).residents
//               .filter((resident) => resident.sex === parameter.sex)
//               .map((resident) => resident.name),
//           };
//         });
//     });
//   }

//   return object;
// };

// const mapJustSortOrNames = (parameter, object, locations) => {
//   if (parameter.includeNames && parameter.sorted && typeof parameter.sex === 'undefined') {
//     locations.forEach((location) => {
//       object[location] = species
//         .filter((specie) => specie.location === location)
//         .map((specie) => specie.name)
//         .map((animal) => ({ [animal]: species
//           .find((specie) => specie.name === animal).residents
//           .map((resident) => resident.name).sort() }));
//     });
//   } else if (parameter.includeNames && typeof parameter.sex === 'undefined') {
//     locations.forEach((location) => {
//       object[location] = species
//         .filter((specie) => specie.location === location)
//         .map((specie) => specie.name)
//         .map((animal) => ({ [animal]: species
//           .find((specie) => specie.name === animal).residents
//           .map((resident) => resident.name) }));
//     });
//   }
// 
//   return object;
// };

const resolveMap = (options, speciesLocations) => {
  const object = {};
  // const verifications = {
  //   1: isMapWithSexAndSort(options, object, speciesLocations),
  //   2: isMapWithSex(options, object, speciesLocations),
  //   3: isMapWithSort(options, object, speciesLocations),
  //   4: isMapJustWithNames(options, object, speciesLocations)
  // }
  isMapWithSexAndSort(options, object, speciesLocations);
  isMapWithSex(options, object, speciesLocations);
  isMapWithSort(options, object, speciesLocations);
  isMapJustWithNames(options, object, speciesLocations);

  // Object.values(verifications).forEach((verification) => {
  //   if (!verification)
  // })

  return object;
}

function getAnimalMap(options) {
  const object = {};
  const speciesLocations = species
    .map((specie) => specie.location);

  if (!options || typeof options.includeNames === 'undefined') {
    speciesLocations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name);
    });
    return object;
  }   
    // isMapWithSexAndSort(options, object, speciesLocations);
    // isMapWithSex(options, object, speciesLocations);
    // isMapWithSort(options, object, speciesLocations);
    // isMapJustWithNames(options, object, speciesLocations);
    // mapSexOrSexSort(options, object, speciesLocations);
    // mapJustSortOrNames(options, object, speciesLocations);
  return resolveMap(options, speciesLocations);
}

// let object = {};
// const speciesLocations = species
//   .map((specie) => specie.location);
const options = { includeNames: true, sex: 'female', sorted: true }

// console.log(mapWithSexAndSort(options, object, options.sex, speciesLocations)['NW']);

console.log(getAnimalMap(options)['NE'][0]);
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
