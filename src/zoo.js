const { employees, hours, species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const getSpecie = data.species.find((specie) => specie.name === animal);
  return getSpecie.residents.every((resident) => resident.age >= age);
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
  const animal = data.species.find((specie) => specie.name === species);
  return animal.residents.length;
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
  const hrDias = {};
  const keys = Object.keys(hours);
  keys.forEach((dia) => {
    if (dia !== 'Monday') {
      hrDias[dia] = `Open from ${hours[dia].open}am until ${(hours[dia].close) - 12}pm`;
    } else {
      hrDias[dia] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: hrDias[dayName],
    };
  }
  return hrDias;
}

function getOldestFromFirstSpecies(id) {
  const searchId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const searchAnimal = species.find((specie) => specie.id === searchId).residents;
  const oldest = searchAnimal.sort((resident1, resident2) => resident2.age - resident1.age)[0];
  return Object.values(oldest);
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
