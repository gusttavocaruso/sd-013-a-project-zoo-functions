const data = require('./data');

function getSpeciesByIds(...args) {
  const returnArray = [];
  args.forEach((element) => {
    const elemento = (data.species.filter((specie) => specie.id === element));
    returnArray.push(...elemento);
  });
  return returnArray;
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

const getAnimalsName = (animalName, sort = false, sexo = false) => {
  const nameFiltered = data.species.filter(({ name }) => name === animalName);
  let returnArray = [...nameFiltered[0].residents];
  if (sexo) {
    returnArray = returnArray.filter(({ sex }) => sex === sexo);
  }

  const afterReduce = returnArray.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

  if (sort) {
    afterReduce.sort();
  }

  return afterReduce;
};

const getAnimalTemplate = (args) => {
  const returnObject = data.species.reduce((acc, curr) => {
    const tmpObj = {};
    if (Object.prototype.hasOwnProperty.call(args[0], 'sex')
    && Object.prototype.hasOwnProperty.call(args[0], 'sorted')) {
      tmpObj[curr.name] = getAnimalsName(curr.name, true, args[0].sex);
    } else if (Object.prototype.hasOwnProperty.call(args[0], 'sex')) {
      tmpObj[curr.name] = getAnimalsName(curr.name, false, args[0].sex);
    } else if (Object.prototype.hasOwnProperty.call(args[0], 'sorted')) {
      tmpObj[curr.name] = getAnimalsName(curr.name, true, false);
    } else {
      tmpObj[curr.name] = getAnimalsName(curr.name);
    }
    acc[curr.location].push(tmpObj);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return returnObject;
};

function getAnimalMap(...args) {
  let animalTemplate;

  if (args.length > 0) {
    const argumentos = Object.keys(args[0]);
    if (argumentos.includes('includeNames')) {
      animalTemplate = getAnimalTemplate(args);
      return animalTemplate;
    }
  }
  animalTemplate = data.species.reduce((acc, curr) => {
    acc[curr.location].push(curr.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return animalTemplate;
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

function getOldestFromFirstSpecies(idEmployee) {
  const filtro = data.employees
    .filter((employeeObject) => employeeObject.id === idEmployee);

  const speciesFilter = data.species
    .find((animalObject) => animalObject.id === filtro[0].responsibleFor[0]);

  speciesFilter.residents.sort((a, b) => b.age - a.age);

  const { name, sex, age } = speciesFilter.residents[0];
  return [name, sex, age];
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
