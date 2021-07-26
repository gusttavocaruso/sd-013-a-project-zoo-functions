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
  // Refatoração feita com a ajuda da Bia na monitoria
  const weekDays = Object.keys(hours).reduce((acc, day) => {
    if (day === 'Monday') {
      acc[day] = 'CLOSED';
      return acc;
    }

    acc[day] = `Open from ${hours[day].open}am until ${hours[day].close > 12
      ? (hours[day].close - 12)
      : hours[day].close}pm`;
    return acc;
  }, {});

  if (dayName === undefined) {
    return weekDays;
  }

  return { [dayName]: weekDays[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // Com a ajuda da Bia na monitoria:
  const findEmployeeById = employees.find((employee) => employee.id === id);

  const findSpecie = species.find((specie) => specie.id === findEmployeeById.responsibleFor[0]);

  const animalsAges = findSpecie.residents.map((animal) => animal.age);

  const oldestAnimal = Math.max(...animalsAges);

  const findOldestAnimal = findSpecie.residents
    .find((animal) => animal.age === oldestAnimal);

  const oldestAnimalInfo = Object.values(findOldestAnimal);

  return oldestAnimalInfo;
}

function increasePrices(percentage) {
  // Com a ajuda do Vinicius Dionysio para refatorar o projeto sem for in
  const calculatePrices = Object.values(prices).map((price) => (price * (1 + percentage / 100)));

  // Consultado: https://stackoverflow.com/questions/11832914/()how-to-round-to-at-most-2-decimal-places-if-necessary
  const roundPrices = (number) => {
    let roundedNumber = number;
    roundedNumber = Math.round((number + Number.EPSILON) * 100) / 100;
    return roundedNumber;
  };

  Object.keys(prices).forEach((key, index) => {
    prices[key] = roundPrices(calculatePrices[index]);
  });
}

function getEmployeeCoverage(idOrName) {
  // Com a ajuda do Zezé no plantão e do Vinicius Dionysio para fechar a lógica:
  if (idOrName !== undefined) {
    const findEmployee = employees
      .find((employee) => employee.id === idOrName
        || employee.firstName === idOrName
        || employee.lastName === idOrName);
    const findAnimal = findEmployee.responsibleFor
      .map((animalId) => species.filter(({ id }) => id === animalId)[0].name);
    const employeeWithAnimalsName = {
      [`${findEmployee.firstName} ${findEmployee.lastName}`]: findAnimal };
    return employeeWithAnimalsName;
  }
  const employeesAndAnimals = {};
  employees.forEach((employee) => {
    employeesAndAnimals[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
      .map((animalId) => species.find(({ id }) => id === animalId).name);
  });
  return employeesAndAnimals;
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
