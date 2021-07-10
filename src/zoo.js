/* eslint-disable max-lines-per-function */
const { employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((idDoNossoArray) => data.species.find((speciE) => speciE.id === idDoNossoArray));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nameSpecie = data.species.find((specie) => specie.name === animal);
  return nameSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName == null) {
    return {};
  }
  return data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speciE) {
  // seu código aqui
  if (speciE == null) {
    return data.species.reduce((acc, currSpecie) => {
      acc[currSpecie.name] = currSpecie.residents.length;
      return acc;
    }, {});
  }
  return data.species.find((specie) => specie.name === speciE).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  const objectValueLength = Object.values.length;
  if (objectValueLength === 0 || entrants == null) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * data.prices.Adult)
                    + (Child * data.prices.Child)
                    + (Senior * data.prices.Senior);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const arrayDays = Object.entries(data.hours);
  const day = arrayDays.find((weekDay) => weekDay[0] === dayName);
  const objectEmpty = {};
  if (!dayName) {
    return {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
  } if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  objectEmpty[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  return objectEmpty;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const foundEmployee = employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === foundEmployee.responsibleFor[0]);
  const sortOld = firstSpecie.residents.sort((x, y) => y.age - x.age);
  const objectExpected = Object.values(sortOld[0]);
  return objectExpected;
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
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
