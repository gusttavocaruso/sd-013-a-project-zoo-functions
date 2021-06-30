const data = require('./data');

function getSpeciesByIds(...args) {
  const arr = [];
  if (args.length > 0) {
    args.forEach((animalsIds) => {
      const objectAnimals = data.species.filter((item) => item.id === animalsIds);
      arr.push(...objectAnimals);
    });
    return arr;
  }
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  let minAge = false;
  data.species.forEach(({ name, residents }) => {
    if (name === animal) {
      minAge = residents.every((item) => item.age >= age);
    }
  });
  return minAge;
}

function getEmployeeByName(employeeName = {}) {
  let objectReturn = {};
  data.employees.forEach((employeeObject) => {
    if (employeeObject.firstName === employeeName || employeeObject.lastName === employeeName) {
      objectReturn = { ...employeeObject };
    }
  });
  return objectReturn;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let managerOrNot = true;
  for (let i = 0; i < data.employees.length; i += 1) {
    managerOrNot = data.employees[i].managers.some((item) => item === id);
    if (managerOrNot) {
      break;
    } else {
      managerOrNot = false;
    }
  }
  return managerOrNot;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const returnEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(returnEmployee);
}

function countAnimals(species) {
  let counter = {};
  if (species) {
    const dataTeste = data.species.filter(({ name }) => name === species);
    counter = dataTeste[0].residents.length;
    return counter;
  }
  data.species.forEach(({ name, residents }) => {
    counter[name] = residents.length;
  });
  return counter;
}

function calculateEntry(entrants) {
  let valorTotal = 0;
  if (typeof entrants !== 'undefined' && Object.keys(entrants).length !== 0) {
    const pagantes = Object.keys(entrants);
    pagantes.forEach((item) => {
      valorTotal += data.prices[item] * entrants[item];
    });
    return valorTotal;
  }
  return valorTotal;
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const objectReturn = { ...data.hours };
  Object.keys(objectReturn).forEach((item) => {
    const { open, close } = data.hours[item];
    objectReturn[item] = `Open from ${open}am until ${close - 12}pm`;
  });
  objectReturn.Monday = 'CLOSED';
  if (dayName) {
    const keyValue = {};
    Object.keys(objectReturn).forEach((item) => {
      if (item === dayName) {
        keyValue[item] = objectReturn[item];
      }
    });
    return keyValue;
  }
  return objectReturn;
}

function getOldestFromFirstSpecies(id) {
}

function roundToTwo(num) {
  return +(`${Math.round(`${num}e+2`)}e-2`);
}

function increasePrices(percentage) {
  const priceObjectKeys = Object.keys(data.prices);
  priceObjectKeys.forEach((item) => {
    const price = data.prices[item] * (1 + (percentage / 100));
    data.prices[item] = roundToTwo(price);
  });
}

const speciesNameById = (obj) => {
  const speciesFiltered = [];
  obj.responsibleFor.forEach((animalId) => {
    const filtro = data.species.filter((animalObject) => animalObject.id === animalId);
    speciesFiltered.push(filtro[0].name);
  });
  return speciesFiltered;
};

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const returnObject = {};
    data.employees.forEach((employeeObject) => {
      const { id, firstName, lastName } = employeeObject;
      if (id === idOrName || firstName === idOrName || lastName === idOrName) {
        const speciesName = speciesNameById(employeeObject);
        returnObject[`${firstName} ${lastName}`] = speciesName;
      }
    });
    return returnObject;
  }
  const imprimir = data.employees.reduce((acc, curr) => {
    const speciesFiltered = speciesNameById(curr);
    acc[`${curr.firstName} ${curr.lastName}`] = speciesFiltered;
    return acc;
  }, {});
  return imprimir;
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
