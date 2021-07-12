const data = require('./data');
// comecando o projeto

function getSpeciesByIds(...ids) {
  const blankArr = [];
  if (ids === null) {
    return blankArr;
  }
  const speciesArr = data.species.filter((specie) => ids.includes(specie.id));
  return speciesArr;
}

function getAnimalsOlderThan(animal, age) {
  const specieToAge = data.species.filter((specie) => specie.name === animal);
  const minimalAge = specieToAge[0].residents.find((resident) => resident.age < age);
  return !minimalAge;
}

function getEmployeeByName(name) {
  const blankObj = {};
  if (name === undefined) {
    return blankObj;
  }
  const epy = data.employees.filter((e) => name === e.firstName || name === e.lastName);
  return epy[0];
}

function createEmployee(personalInfo, associatedWith) {
  const newEmploye = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmploye;
}

function isManager(id) {
  const manager = [];
  data.employees.forEach((manajj) => manager.push(...manajj.managers));
  const result = manager.includes(id);
  return result;
}

function addEmployee(a = [], b = [], c = [], d = [], e = []) {
  const objToAdd = {
    // id: a !== undefined ? a : [],
    // firstName: b !== undefined ? b : [],
    // lastName: c !== undefined ? c : [],
    // managers: d !== undefined ? d : [],
    // responsibleFor: e !== undefined ? e : [],
    id: a,
    firstName: b,
    lastName: c,
    managers: d,
    responsibleFor: e,
  };
  data.employees.push(objToAdd);
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    data.species.forEach((count) => {
      result[count.name] = count.residents.length;
    });
    return result;
  }
  const animalToCount = data.species.filter((specie) => species.includes(specie.name));
  const count = animalToCount[0].residents.length;
  return count;
}

function calculateEntry(entrants) {
  let value = 0;
  if (entrants === undefined) {
    return value;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultCost = 49.99;
  const childCost = 20.99;
  const seniorCost = 24.99;
  value = (Adult * adultCost) + (Child * childCost) + (Senior * seniorCost);
  return value;
}

function getAnimalMap(options) {
  // seu código aqui
}

const closeH = (number) => {
  if (number === 18) {
    return 6;
  }
  if (number === 20) {
    return 8;
  }
  if (number === 22) {
    return 10;
  }
};

const hoursArr = Object.entries(data.hours);

const isUfd = (schedule) => {
  const aux = schedule;
  hoursArr.forEach((day) => {
    aux[day[0]] = `Open from ${day[1].open}am until ${closeH(day[1].close)}pm`;
    if (day[0] === 'Monday') {
      aux.Monday = 'CLOSED';
    }
  });
  return aux;
};

function getSchedule(dayName) {
  const schedule = {};
  if (dayName === undefined) {
    isUfd(schedule);
  } else {
    const dtr = hoursArr.find((day) => day[0].includes(dayName));
    if (dtr[0] === 'Monday') {
      schedule.Monday = 'CLOSED';
    } else {
      schedule[dtr[0]] = `Open from ${dtr[1].open}am until ${closeH(dtr[1].close)}pm`;
    }
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const employer = data.employees.filter((ids) => ids.id.includes(id));
  const animalID = employer[0].responsibleFor[0];
  const animal = data.species.filter((specie) => animalID.includes(specie.id));
  const resident = animal[0].residents;
  let higher = 0;
  let oldest = {};
  resident.forEach((residents, i) => {
    if (residents.age > higher) {
      higher = residents.age;
      oldest = residents;
    }
  });
  const result = Object.values(oldest);
  return result;
}

const { prices } = data;

function increasePrices(percentage) {
  const increase = Object.values(prices).map((value) => (value + (value * (percentage / 100))));
  prices.Adult = Math.round(increase[0] * 100) / 100;
  prices.Senior = Math.round(increase[1] * 100) / 100;
  prices.Child = Math.round(increase[2] * 100) / 100;
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
