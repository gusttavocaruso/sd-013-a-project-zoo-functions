const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(firstId, secondId) {
  const getSpecies = species.filter((specie) => specie.id === firstId || specie.id === secondId);
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const checkAnimalsAge = findAnimal.residents.every((resident) => resident.age >= 7);

  return checkAnimalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const fndEmp = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);

  return fndEmp;
}

function createEmployee(personalInfo, associatedWith) {
  // Com a ajuda de: https://stackoverflow.com/questions/4215737/convert-array-to-object
  const newEmployee = { ...personalInfo, ...associatedWith };

  return newEmployee;
}

function isManager(id) {
  const findPersonById = employees.find((employee) => employee.id === id);
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

  if (findPersonById.managers[0] === stephanieId || findPersonById.managers[0] === undefined) {
    return true;
  }

  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  if (managers === undefined) {
    newEmployee.managers = [];
  }
  if (responsibleFor === undefined) {
    newEmployee.responsibleFor = [];
  }

  employees.push(newEmployee);
}

function countAnimals(animal) {
  if (animal !== undefined) {
    const findAnimal = species.find((specie) => specie.name === animal);
    const countHowManyAnimals = findAnimal.residents.length;
    return countHowManyAnimals;
  }

  // Com a ajuda do Sumo no plantão
  const allAnimalsCounter = {};

  species.forEach((specie) => {
    allAnimalsCounter[specie.name] = specie.residents.length;
    return allAnimalsCounter;
  });

  return allAnimalsCounter;
}

// Função feita para simplificar o requisito 8
function entryCalculator(entrants) {
  let entrySum = 0;
  Object.keys(entrants).forEach((entrant) => {
    if (entrant === 'Adult') {
      entrySum += entrants[entrant] * prices.Adult;
    }
    if (entrant === 'Senior') {
      entrySum += entrants[entrant] * prices.Senior;
    }
    if (entrant === 'Child') {
      entrySum += entrants[entrant] * prices.Child;
    }
  });
  return entrySum;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  return entryCalculator(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  for (const price in prices) {
    const percentageIncrease = prices[price] * (percentage / 100);
    const sumPriceWithPercentage = prices[price] + percentageIncrease;
    // Consultado: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    const priceIncreased = Math.round((sumPriceWithPercentage + Number.EPSILON) * 100) / 100;

    prices[price] = priceIncreased;
  }

  return prices;
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
