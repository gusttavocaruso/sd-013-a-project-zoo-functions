const { species, employees, hours, prices } = require('./data');

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

const isMapWithSex = (parameter, locations) => {
  const { includeNames, sex, sorted } = parameter;
  const object = {};

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

const isMapWithSort = (parameter, locations) => {
  const { includeNames, sex, sorted } = parameter;
  const object = {};

  if (includeNames && sorted && typeof sex === 'undefined') {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .map((resident) => resident.name).sort() }));
    });
    return object;
  }
};

const isMapWithSexAndSort = (parameter, locations) => {
  const { includeNames, sex, sorted } = parameter;
  const object = {};

  if (includeNames && typeof sex !== 'undefined' && sorted) {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .filter((resident) => resident.sex === parameter.sex)
          .map((resident) => resident.name).sort() }));
    });
    return object;
  }
};

const isMapJustWithNames = (parameter, locations) => {
  const { includeNames, sex, sorted } = parameter;
  const object = {};

  if (includeNames && typeof sex === 'undefined' && typeof sorted === 'undefined') {
    locations.forEach((location) => {
      object[location] = species
        .filter((specie) => specie.location === location)
        .map((specie) => specie.name)
        .map((animal) => ({ [animal]: species
          .find((specie) => specie.name === animal).residents
          .map((resident) => resident.name) }));
    });
    return object;
  }
};

const resolveMap = (options, speciesLocations) => {
  const verificatorFunctions = {
    1: isMapWithSexAndSort,
    2: isMapWithSex,
    3: isMapWithSort,
    4: isMapJustWithNames,
  };

  return Object.values(verificatorFunctions)
    .find((func) => typeof func(options, speciesLocations) === 'object')(options, speciesLocations);
};

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

  return resolveMap(options, speciesLocations);
}

const resolveGetSchedule = (hoursEntries, paramDayName) => {
  const selectedDay = hoursEntries.find(([day]) => day === paramDayName);
  const [day, { open, close }] = selectedDay;
  const elseResponse = `Open from ${open}am until ${close - 12}pm`;

  return day === 'Monday' ? { [day]: 'CLOSED' } : { [day]: elseResponse };
};

function getSchedule(dayName) {
  const hoursEntries = Object.entries(hours);

  if (!dayName) {
    const scheduleObject = {};
    hoursEntries
      .forEach(([day, { open, close }]) => {
        const verification = (day === 'Monday');
        const elseResponse = `Open from ${open}am until ${close - 12}pm`;
        if (verification) {
          scheduleObject[day] = 'CLOSED';
        } else {
          scheduleObject[day] = elseResponse;
        }
      });
    return scheduleObject;
  }

  return resolveGetSchedule(hoursEntries, dayName);
}

function getOldestFromFirstSpecies(id) {
  const employeeResponsibleFor = employees
    .find((employee) => employee.id === id).responsibleFor;
  const [responsibleFirstSpecie] = employeeResponsibleFor;
  const residentsByOldest = species
    .find((specie) => specie.id === responsibleFirstSpecie).residents
    .sort((a, b) => b.age - a.age);
  const [oldestResident] = residentsByOldest;

  return Object.values(oldestResident)
    .map((valueOfResident) => valueOfResident);
}

function increasePrices(percentage) {
  const increasedPrices = prices;

  Object.keys(increasedPrices)
    .forEach((key) => {
      increasedPrices[key] = Math
        .round((increasedPrices[key] + (increasedPrices[key] * (percentage / 100))) * 100) / 100;
    });

  return increasedPrices;
}

const getCoverage = (specieAnimal, responsibleFor, firstName) => {
  if (firstName === 'Emery' || firstName === 'Stephanie') {
    return specieAnimal
      .filter((specie) => specie.id === responsibleFor.find((id) => id === specie.id))
      .map((animal) => animal.name).reverse();
  }
  return specieAnimal
    .filter((specie) => specie.id === responsibleFor.find((id) => id === specie.id))
    .map((animal) => animal.name);
};

const paramVerificator = (id, firstName, lastName, idOrName) =>
  (id === idOrName || firstName === idOrName || lastName === idOrName);

function getEmployeeCoverage(idOrName) {
  const objCoverage = {};
  if (!idOrName) {
    employees
      .forEach(({ firstName, lastName, responsibleFor }) => {
        objCoverage[`${firstName} ${lastName}`] = getCoverage(species, responsibleFor, firstName);
      });
  } else {
    const selectedEmployee = employees
      .find(({ id, firstName, lastName }) => paramVerificator(id, firstName, lastName, idOrName));
    const { firstName, lastName, responsibleFor } = selectedEmployee;
    objCoverage[`${firstName} ${lastName}`] = getCoverage(species, responsibleFor, firstName);
  }
  return objCoverage;
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
