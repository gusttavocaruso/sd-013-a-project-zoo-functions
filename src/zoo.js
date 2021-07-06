const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  if (!ids) return [];
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find((spe) => spe.name === animal).residents.every((re) => re.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
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
// Josué lobo ajudou >:D
const convertorAmPm = (hour) => {
  if (hour > 12) return `${(hour - 12)}pm`;
  if (hour === 0) return '12pm';
  return `${hour}am`;
};
// Josué lobo ajudou >:D
const geradorMensagem = (dayName, cronograma) => {
  if (cronograma[dayName].open !== cronograma[dayName].close) {
    return `Open from ${convertorAmPm(cronograma[dayName]
      .open)} until ${convertorAmPm(cronograma[dayName].close)}`;
  }
  return ('CLOSED');
};
// Josué lobo ajudou >:D
function getSchedule(dayName) {
  const cronograma = {};
  const { hours } = data;
  if (dayName) {
    cronograma[dayName] = geradorMensagem(dayName, hours);
  } else {
    Object.keys(hours).forEach((day) => {
      cronograma[day] = geradorMensagem(day, hours);
    });
  }
  return cronograma;
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
