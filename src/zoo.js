const data = require('./data');

// ==========================================================================================================
// Requisito 1
// ==========================================================================================================
function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// ==========================================================================================================
// Requisito 2
// ==========================================================================================================
function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find(({ name }) => name === animal);

  const trueOrFalse = specie.residents.every((resident) => resident.age >= age);

  return trueOrFalse;
}

// ==========================================================================================================
// Requisito 3
// ==========================================================================================================
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((ob) => ob.firstName === employeeName || ob.lastName === employeeName);
}

// ==========================================================================================================
// Requisito 4
// ==========================================================================================================
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

// ==========================================================================================================
// Requisito 5 - Feito com ajuda de Pedro Delicoli
// ==========================================================================================================
function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

// ==========================================================================================================
// Requisito 6
// ==========================================================================================================
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const object = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(object);
}

// ==========================================================================================================
// Requisito 7
// ==========================================================================================================
function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }

  return data.species.find((specie) => specie.name === species).residents.length;
}

// ==========================================================================================================
// Requisito 8
// ==========================================================================================================
function calculateEntry(entrants) {
  if (entrants === undefined) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  const priceTotal = (Adult * data.prices.Adult) + (Child * data.prices.Child)
  + (Senior * data.prices.Senior);

  return priceTotal;
}

// ==========================================================================================================
// Requisito 9
// ==========================================================================================================
function getAnimalMap(options) {
  if (options === undefined) {
    return {
      NE: data.species.filter((specie) => (specie.location === 'NE')).map((name) => name.name),
      NW: data.species.filter((specie) => (specie.location === 'NW')).map((name) => name.name),
      SE: data.species.filter((specie) => (specie.location === 'SE')).map((name) => name.name),
      SW: data.species.filter((specie) => (specie.location === 'SW')).map((name) => name.name),
    };
  }
}
// console.log(getAnimalMap());

// ==========================================================================================================
// Requisito 10
// ==========================================================================================================

function checarParametro(arrayEntries) {
  return arrayEntries.reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
}

function getSchedule(dayName) {
  const arrayEntries = Object.entries(data.hours);
  if (dayName === undefined) return checarParametro(arrayEntries);
  const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);
  console.log(day);
  const object = {};
  if (dayName === 'Monday') {
    object[day[0]] = 'CLOSED';
    return object;
  }
  object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  return object;
}

// ==========================================================================================================
// Requisito 11
// ==========================================================================================================
function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((employeeObj) => employeeObj.id === id);
  const responsibility = employee.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsibility);
  const olderAge = animal.residents.reduce((acc, resident) => {
    if (resident.age > acc) {
      return resident.age;
    }
    return acc;
  }, 0);
  const oldestAnimal = animal.residents.find((olderAnimal) => olderAnimal.age === olderAge);
  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// ==========================================================================================================
// Requisito 12
// ==========================================================================================================
function increasePrices(percentage) {
  const priceObj = data.prices;
  const adultPrice = priceObj.Adult + (priceObj.Adult * (percentage / 100));
  const seniorPrice = priceObj.Senior + (priceObj.Senior * (percentage / 100));
  const childPrice = priceObj.Child + (priceObj.Child * (percentage / 100));

  priceObj.Adult = Math.round(adultPrice * 100) / 100;
  priceObj.Senior = Math.round(seniorPrice * 100) / 100;
  priceObj.Child = Math.round(childPrice * 100) / 100;

  return priceObj;
}

// ==========================================================================================================
// Requisito 13
// ==========================================================================================================
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
