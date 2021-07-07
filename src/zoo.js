const { employees, hours, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === 0) return [];
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  return getAnimals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) => {
    const {
      firstName,
      lastName,
    } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (species === undefined) {
    const animalsCount = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return animalsCount;
  }
  const allAnimals = data.species.find((specie) => specie.name === species);
  return allAnimals.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const verifyTime = {};
  const keys = Object.keys(hours);
  keys.forEach((day) => {
    if (day !== 'Monday') {
      verifyTime[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      verifyTime[day] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: verifyTime[dayName],
    };
  }
  return verifyTime;
}

function getOldestFromFirstSpecies(id) {
  const animalsOld = employees.find((employee) => employee.id === id)
    .responsibleFor.find((animal) => animal);
  const aleatoryAnimal = data.species.find((specie) => specie.id === animalsOld)
    .residents.filter((nameAnimal) => nameAnimal).sort((a, b) => b.age - a.age);
  return Object.values(aleatoryAnimal[0]);
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((entrace) => {
    prices[entrace] = Math.round((prices[entrace] * (1 + (percentage / 100))) * 100) / 100;
  });
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
