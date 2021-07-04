const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }

  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const family = species.find((speciesName) => speciesName.name === animal);

  if (!family) return false;

  return family.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return employees.find(({ firstName, lastName }) => {
    const hasFirstName = employeeName === firstName;
    const hasLastName = employeeName === lastName;
    return hasFirstName || hasLastName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const animalParam = species.find((family) => family.name === animal);
  return animalParam.residents.length;
}

function calculateEntry(entrants) {
  const keys = Object.keys(entrants);
  if (!entrants || keys.length === 0) {
    return 0;
  }

  return keys.reduce((total, key) => {
    const quantity = entrants[key];
    const price = prices[key];

    return total + (quantity * price);
  }, 0);
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
