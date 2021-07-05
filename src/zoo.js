const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const checkEmployee = (employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName));
  if (checkEmployee !== undefined) {
    return checkEmployee;
  }

  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const criadoEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return criadoEmployee;
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
  return newEmployee;
}

function countAnimals(specie) {
  if (specie !== undefined) {
    const contAnimal = species.find((animal) => animal.name === specie).residents.length;
    return contAnimal;
  }
  return { bears: 3,
    elephants: 4,
    frogs: 2,
    giraffes: 6,
    lions: 4,
    otters: 4,
    penguins: 4,
    snakes: 2,
    tigers: 2 };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants !== undefined) {
    const keys = Object.values(prices);
    const { Child = '0' } = entrants;
    const { Adult = '0' } = entrants;
    const { Senior = '0' } = entrants;
    const adult = Adult * keys[0];
    const senior = Senior * keys[1];
    const child = Child * keys[2];
    return child + adult + senior;
  }

  return 0;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName !== undefined) {
    if (dayName === 'Monday') {
      return { Monday: 'CLOSED' };
    }

    // console nomeDia = dayName;
    return { Tuesday: `Open from ${hours[dayName].open}am until ${(hours[dayName].close - 12)}pm` };
  }
  return { Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
}

function getOldestFromFirstSpecies(id) {
  const currentEmployee = (employees.find((employee) => employee.id === id)).responsibleFor[0];
  console.log(currentEmployee);
  const oldestAnimal = species.find((specie) => specie.id === currentEmployee).residents
    .sort((a, b) => b.age - a.age);
  return [oldestAnimal[0].name, oldestAnimal[0].sex, oldestAnimal[0].age];
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    prices[key] = Math.round((prices[key]) * (1 + (percentage / 100)) * 100) / 100;
  });
  return keys;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

// getSchedule('Tuesday')

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
