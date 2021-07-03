const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // const myAnimal = () => species.find((specie) => specie.name === animal);
  // myAnimal.residents.some((resident) => resident.age < age);
  // return !myAnimal;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newObject);
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

function calculateEntry(entrantes) {
  if (!entrantes) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrantes;
  const calculate = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return calculate;
}

function getAnimalMap(options) {
  // seu código aqui
}

function checkParameters(arrayEntries) {
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
  if (!dayName) return checkParameters(arrayEntries);
  const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);
  const object = {};
  if (day[1].open === 0 && day[1].close === 0) {
    object[day[0]] = 'CLOSED';
    return object;
  }
  object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  return object;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const multiplicador = 1 + percentage / 100;
  const arrayEntries = Object.entries(data.prices);
  arrayEntries.forEach((item) => {
    const value = data.prices[item[0]] * multiplicador;
    const rounded = Math.round(value * 100) / 100;
    data.prices[item[0]] = rounded;
  });
}

// Questão 13:

const checkEntry = (idOrName) => {
  const idNumber = employees.some((employee) => employee.id === idOrName);
  const itIsfirstName = employees.some((employee) => employee.firstName === idOrName);
  const istIsLastName = employees.some((employee) => employee.lastName === idOrName);
  return {
    id: idNumber,
    firstName: itIsfirstName,
    lastName: istIsLastName,
  };
};

const findName = (idOrName, responseObj) => {
  if (responseObj.id === true) {
    const obj1 = employees.find((person) => person.id === idOrName);
    return obj1;
  }
  if (responseObj.firstName === true) {
    const obj2 = employees.find((person) => person.firstName === idOrName);
    return obj2;
  }
  if (responseObj.lastName === true) {
    const obj3 = employees.find((person) => person.lastName === idOrName);
    return obj3;
  }
};

const getNameByID = (id) => species.find((specie) => specie.id === id).name;

const EmployeeData = (obj) => {
  const fullName = `${obj.firstName} ${obj.lastName}`;
  const speciesArray = obj.responsibleFor.map((specie) => getNameByID(specie));
  const outputObj = {};
  outputObj[fullName] = speciesArray;
  return outputObj;
};

const generateList = () => employees.reduce((acc, curr) => {
  const fullName = `${curr.firstName} ${curr.lastName}`;
  const speciesArray = curr.responsibleFor.map((specie) => getNameByID(specie));
  acc[fullName] = speciesArray;
  return acc;
}, {});

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return generateList();
  const whatIsInput = checkEntry(idOrName);
  const employee = findName(idOrName, whatIsInput);
  return EmployeeData(employee);
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
