const { species, employees, prices, hours } = require('./data');
const data = require('./data');
// Referências tiradas dos resumos do Notion da BeeDev:
// https://www.notion.so/a6bcb381fbb241bf9f7c160d6228db71?v=cc21a930d42a4a22b96a31d2b966644e
function getSpeciesByIds(...ids) {
  if (!ids) {
    return undefined;
  }

  return species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id) === true);
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
}

function countAnimals(specieName) {
  const objeto = {};
  if (!specieName) {
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  return species.find(({ name }) => name === specieName).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const adultPrice = prices.Adult * entrants.Adult;
  const seniorPrice = prices.Senior * entrants.Senior;
  const childPrice = prices.Child * entrants.Child;
  let demand = 0;
  if (adultPrice) demand += adultPrice;
  if (seniorPrice) demand += seniorPrice;
  if (childPrice) demand += childPrice;
  return demand;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName) {
    const { open, close } = hours[dayName];
    return (open && close) ? {
      [dayName]: `Open from ${open}am until ${close - 12}pm`,
    } : {
      [dayName]: 'CLOSED',
    };
  }
  return {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
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
