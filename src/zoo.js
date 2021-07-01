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

  return Object.keys(entrants)
    .reduce((acumulator, theEntrant) => acumulator + (entrants[theEntrant] * prices[theEntrant]), 0);
}

// eslint-disable-next-line max-lines-per-function
function getAnimalMap(options) {
  const result = {};
  const theLocation = Array.from({});
  species.forEach(({ location }) => theLocation.push(location));
  if (!options || !options.includeNames) {
    theLocation.forEach((location) => {
      result[location] = species
        .filter((specie) => specie.location === location)
        .map((animal) => animal.name);
    });

    return result;
  }
  if (options.includeNames) {
    theLocation.forEach((location) => {
      // eslint-disable-next-line complexity
      result[location] = species.filter((animal) => animal.location === location).map((animal) => {
        const mapped = {};
        const filtered = animal.residents.filter((specie) => specie.sex === options.sex);
        mapped[animal.name] = animal.residents.map((resident) => resident.name);

        if (options.sorted && !options.sex) {
          mapped[animal.name] = animal.residents.map((resident) => resident.name).sort();
        } else if (!options.sorted && options.sex) {
          mapped[animal.name] = filtered.map((item) => item.name);
        } else if (options.sorted) {
          mapped[animal.name] = filtered.map((resident) => resident.name).sort();
        }

        return mapped;
      });
    });

    return result;
  }
}

function getSchedule(dayName) {
  const keys = Object.keys(hours);
  const newObj = {};

  if (!dayName) {
    keys.forEach((key) => {
      if (key === 'Monday') {
        newObj[key] = 'CLOSED';
      } else newObj[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    });
  } else if (dayName) {
    if (dayName === 'Monday') {
      newObj[dayName] = 'CLOSED';
    } else {
      newObj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
    }
  }

  return newObj;
}

// console.log(getSchedule());

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
