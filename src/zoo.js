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

const noParam = (map) => {
  const result = {};
  map.forEach((location) => {
    result[location] = species
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
  });
  return result;
};
const includeNames = (map, sorted) => {
  const result = {};
  map.forEach((location) => {
    result[location] = species
      .filter((animal) => animal.location === location)
      .map((animal) =>
        (sorted ? { [animal.name]: animal.residents
          .map((resident) => resident.name).sort() }
          : { [animal.name]: animal.residents.map((resident) => resident.name) }));
  });
  return result;
};

const femaleOrMale = (map, sorted, animalSex) => {
  const result = {};
  map.forEach((location) => {
    result[location] = species
      .filter((animal) => animal.location === location)
      .map((animal) => {
        if (sorted) {
          return { [animal.name]: animal.residents
            .filter(({ sex }) => animalSex === sex)
            .map((resident) => resident.name).sort() };
        }
        return { [animal.name]: animal.residents
          .filter(({ sex }) => animalSex === sex)
          .map((resident) => resident.name) };
      });
  });
  return result;
};

function getAnimalMap(options) {
  let animalMap = new Set();

  species.forEach(({ location }) => animalMap.add(location));
  animalMap = Array.from(animalMap);

  if (!options || !options.includeNames) {
    return noParam(animalMap);
  }

  if (options.sex) {
    return femaleOrMale(animalMap, options.sorted, options.sex);
  }

  if (options.includeNames) {
    return includeNames(animalMap, options.sorted);
  }
}

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

function getOldestFromFirstSpecies(identificacion) {
  const worker = employees.find((employee) => employee.id === identificacion);
  const animal = species.find((animalId) => animalId.id === worker.responsibleFor[0]);
  const oldestAnimal = animal.residents.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
}

const employeeCoverage = () => {
  const result = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const animals = responsibleFor.map((animalId) => species
      .find(({ id }) => id === animalId).name);
    result[`${firstName} ${lastName}`] = animals;
  });
  return result;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employeeCoverage();
  }
  const employeeFull = employees.find(({ firstName, lastName, id }) => {
    const employee = idOrName === firstName || idOrName === lastName || idOrName === id;
    return employee;
  });
  const { firstName, lastName } = employeeFull;
  const employeeName = `${firstName} ${lastName}`;
  return { [employeeName]: employeeCoverage()[employeeName] };
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
