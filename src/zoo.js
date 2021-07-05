const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  if (!ids || !ids.length) return [];
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find((spe) => spe.name === animal).residents.every((re) => re.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName || !employeeName.length) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employees = {
    ...personalInfo,
    ...associatedWith,
  };
  return employees;
}

function isManager(id) {
  const { employees } = data;
  const thisIsManaged = employees.filter((managers) => managers.managers
    .some((person) => person === id));
  return (thisIsManaged.length >= 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const listNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(listNewEmployee);
}

function countAnimals(speciesAnimal) {
  const { species } = data;
  if (speciesAnimal) {
    return species.find((spe) => spe.name === speciesAnimal).residents.length;
  }
  const contagem = species.reduce((acc, item) => {
    acc[item.name] = item.residents.length;
    return acc;
  }, {});
  return contagem;
}

const calculateEntry = ({ Adult = 0, Senior = 0, Child = 0 } = 0) => {
  const { prices } = data;
  const validation = {
    Adult,
    Senior,
    Child,
  };

  const price = (prices.Adult * validation.Adult)
  + (prices.Child * validation.Child) + (prices.Senior * validation.Senior);
  return price;
};

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const newObj = {};
  const allWeek = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return allWeek;
  Object.keys(hours).forEach((week) => {
    if (week === dayName) {
      newObj[week] = `Open from ${hours[week].open}am until ${hours[week].close - 12}pm`;
    }
    if (week === 'Monday') newObj[week] = 'CLOSED';
  });
  return (newObj);
}
console.log(getSchedule('Friday'));
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
