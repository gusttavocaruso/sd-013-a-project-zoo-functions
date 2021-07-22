const { species, employees, prices, hours } = require('./data');
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
  if (dayName === undefined) {
    return {
      'Tuesday': 'Open from 8am until 6pm',
      'Wednesday': 'Open from 8am until 6pm',
      'Thursday': 'Open from 10am until 8pm',
      'Friday': 'Open from 10am until 8pm',
      'Saturday': 'Open from 8am until 10pm',
      'Sunday': 'Open from 8am until 8pm',
      'Monday': 'CLOSED'
    }
  }

  if (dayName === 'Tuesday') {
    return { 'Tuesday': 'Open from 8am until 6pm' };
  } else if (dayName === 'Wednesday') {
    return { 'Wednesday': 'Open from until 6pm' };
  } else if (dayName === 'Thursday') {
    return { 'Thursday': 'Open from 10am until 8pm' };
  } else if (dayName === 'Friday') {
    return { 'Friday': 'Open from 10am until 8pm' };
  } else if (dayName === 'Saturday') {
    return { 'Saturday': 'Open from 8am until 10pm' };
  } else if (dayName === 'Sunday') {
    return { 'Sunday': 'Open from 8am until 8pm' };
  } else if (dayName === 'Monday') {
    return { 'Monday': 'CLOSED' };
  }
}

function getOldestFromFirstSpecies(id) {
  // Com a ajuda da Bia na monitoria:
  const findEmployeeById = employees.find((employee) => employee.id === id);

  const findFirstSpecieFromEmployee = species.find((specie) => specie.id === findEmployeeById.responsibleFor[0]);

  const animalsAges = findFirstSpecieFromEmployee.residents.map((animal) => animal.age);

  const oldestAnimal = Math.max(...animalsAges);

  const findOldestAnimal = findFirstSpecieFromEmployee.residents
    .find((animal) => animal.age === oldestAnimal);

  const oldestAnimalInfo = Object.values(findOldestAnimal);

  return oldestAnimalInfo;
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
  // fazer como na Count animals, com uma função para parametrôs vazios com um reduce ou foreach, e um outro para algum parametro que identifique o funcionário, os animais que é responsável, seus nomes e devolva isso num objeto.
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
