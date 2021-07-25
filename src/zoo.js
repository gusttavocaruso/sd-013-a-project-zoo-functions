const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  const xablau = species.find((specie) => animal === specie.name);
  const { residents } = xablau;
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manages = employees.filter(({ managers }) => managers
    .some((manager) => manager === id));
  return (manages.length >= 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const person = ({ id, firstName, lastName });
  const associated = ({ managers, responsibleFor });
  employees.push(createEmployee(person, associated));
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species.find(({ name }) => name === specie).residents.length;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function calculateEntry(entrants) {
  if (entrants === {} || !entrants) return 0;
  return Object.keys(entrants)
    .reduce((acc, cur) => acc + prices[cur] * entrants[cur], 0);
}

// https://trybecourse.slack.com/archives/C017W4EDD4K/p1603226382056700?thread_ts=1601994090.402000&cid=C017W4EDD4K
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const dayHours = {};
  const keys = Object.keys(hours);
  keys.forEach((day) => {
    if (day !== 'Monday') {
      dayHours[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      dayHours[day] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: dayHours[dayName],
    };
  }
  return dayHours;
}

function getOldestFromFirstSpecies(employeeId) {
  const employee = employees.find(({ id }) => id === employeeId);
  const findAnimal = employee.responsibleFor[0];
  const animals = species.find(({ id }) => id === findAnimal);
  const oldest = animals.residents
    .reduce((acc, animal) => (animal.age > acc.age ? animal : acc));
  return Object.values(oldest);
}

function increasePrices(percentage) {
  const operand = (percentage * 0.01) + 1;
  prices.Child = Math.round((prices.Child * operand) * 100) / 100;
  prices.Adult = Math.round((prices.Adult * operand) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * operand) * 100) / 100;
}

// Olavio e Gabriel

function employeeResponsibleFor(employee) {
  return employee.responsibleFor
    .map((animalId) => species
      .find((specie) => specie.id === animalId).name);
}

function employeesAndAnimals() {
  const xablau = employees.reduce((acc, employee) => {
    acc[`${employee.firstName} ${employee.lastName}`] = employeeResponsibleFor(employee);
    return acc;
  }, {});
  return xablau;
}

// const

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return employeesAndAnimals();
  // if (idOrName)
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
