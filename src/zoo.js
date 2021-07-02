const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const animalList = ids.map((atualId) => species.find((specie) => specie.id === atualId));
  return animalList;
}

function getAnimalsOlderThan(animal, age) {
  const animalsOlder = species.find((specie) => specie.name === animal);
  return animalsOlder.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeObject = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return employeeObject;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return employees.push(newEmployee);
}

function countAnimals(specie) {
  if (!specie) {
    const animalList = species.reduce((acc, oneSpecie) => {
      acc[oneSpecie.name] = oneSpecie.residents.length;

      return acc;
    }, {});

    return animalList;
  }

  return species.find((atualSpecie) => atualSpecie.name === specie).residents.length;
}

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;

  const adultValue = prices.Adult * entrants.Adult || 0;
  const seniorValue = prices.Senior * entrants.Senior || 0;
  const childValue = prices.Child * entrants.Child || 0;

  return adultValue + seniorValue + childValue;
}

function getAnimalMap(options) {
  if (!options) {
    const byLocation = () => ({
      NE: species.filter((specie) => specie.location === 'NE')
        .map((atualSpecie) => atualSpecie.name),
      NW: species.filter((specie) => specie.location === 'NW')
        .map((atualSpecie) => atualSpecie.name),
      SE: species.filter((specie) => specie.location === 'SE')
        .map((atualSpecie) => atualSpecie.name),
      SW: species.filter((specie) => specie.location === 'SW')
        .map((atualSpecie) => atualSpecie.name),
    });
    return byLocation();
  }
}

function getSchedule(dayName) {
  const daysOfWeek = Object.keys(hours);
  const allDays = daysOfWeek.reduce((acc, day) => {
    const days = hours[day];
    acc[day] = `Open from ${days.open}am until ${days.close - 12}pm`;

    return acc;
  }, {});
  allDays.Monday = 'CLOSED';

  if (!dayName) {
    return allDays;
  }

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
