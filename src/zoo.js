const data = require('./data');
const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];

  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const family = species.find((speciesName) => speciesName.name === animal);

  if (!family) return false;

  return family.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

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

  if (!entrants || keys.length === 0) return 0;

  return keys.reduce((total, key) => {
    const quantity = entrants[key];
    const price = prices[key];

    return total + (quantity * price);
  }, 0);
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const schedule = {};

  Object.keys(hours).forEach((weekDay) => {
    if (hours[weekDay].open !== 0 && hours[weekDay].close !== 0) {
      schedule[weekDay] = `Open from ${hours[weekDay].open}am until ${hours[weekDay].close - 12}pm`;
    } else {
      return 'CLOSED';
    }
  });

  if (!dayName) {
    return schedule;
  }
  return {
    [dayName]: schedule[dayName],
  };
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  const findSpecies = species.find((animal) => animal.id === findEmployee.responsibleFor[0]);
  const sortedResidents = findSpecies.residents.sort((a, b) => b.age - a.age);

  return Object.values(sortedResidents[0]);
}

function increasePrices(percentage) {
  const values = Object.entries(data.prices);

  data.prices = values.reduce((acc, [key, value]) => {
    acc[key] = parseFloat((value + (value * percentage) / 100 + 0.00001).toPrecision(4));
    return acc;
  }, {});
}

function getResponsibleForAnimals(employee) {
  return employee.responsibleFor.map((animalId) => {
    const animal = species.find((family) => family.id === animalId);
    return animal.name;
  });
}

function findEmployeeByIdOrName(idOrName) {
  return (employee) => [employee.id, employee.firstName, employee.lastName].includes(idOrName);
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((obj, employee) => {
      const name = `${employee.firstName} ${employee.lastName}`;
      return {
        ...obj,
        [name]: getResponsibleForAnimals(employee),
      };
    }, {});
  }
  const employeePerson = employees.find(findEmployeeByIdOrName(idOrName));
  const name = `${employeePerson.firstName} ${employeePerson.lastName}`;
  const animals = getResponsibleForAnimals(employeePerson);
  return { [name]: animals };
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
