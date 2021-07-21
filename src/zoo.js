const data = require('./data');
const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const especiesId = species.filter((especie) => ids.includes(especie.id));
  return especiesId;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const checkAge = findAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith }; // Junta os dados do empregado, pessoais e gerentes e animais gerenciados
  return employee;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id)); // Testa se o id passado é de um manager
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(employeeAdd);
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceTotal = (Adult * data.prices.Adult)
+ (Child * data.prices.Child)
+ (Senior * data.prices.Senior);
  return priceTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const daysOfWeek = Object.keys(hours);
  const allDays = daysOfWeek.reduce((acc, day) => {
    const days = hours[day];
    acc[day] = `Open from ${days.open}am until ${days.close - 12}pm`;
    return acc;
  }, {});
  allDays.Monday = 'CLOSED';

  if (!dayName) return allDays;

  const oneDay = {};
  oneDay[dayName] = allDays[dayName];
  return oneDay;
}

function getOldestFromFirstSpecies(id) {
  const thisEmployee = employees.find((employee) => employee.id === id);
  const firstAnimal = thisEmployee.responsibleFor[0];
  const allResidents = species.find((specie) => specie.id === firstAnimal).residents;
  const oldestAnimal = Object.values(allResidents.sort((a, b) => b.age - a.age)[0]);
  return oldestAnimal;
}

function increasePrices(percentage) {
  const porcen = (percentage / 100) + 1;
  prices.Adult = Math.round((prices.Adult * porcen) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * porcen) * 100) / 100;
  prices.Child = Math.round((prices.Child * porcen) * 100) / 100;
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
