const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 0) {
    const result = [];
    return result;
  } if (ids.length >= 1) {
    const result = [];
    for (let index = 0; index < ids.length; index += 1) {
      const aux = species.find((animal) => animal.id === ids[index]);
      result.push(aux);
    }
    return result;
  }
}

function getAnimalsOlderThan(animal, age) {
  const filterSpecies = species.find((specie) => specie.name === animal).residents;
  return filterSpecies.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employedPerson = employees.find((person) => (
    person.firstName === employeeName || person.lastName === employeeName
  ));
  return employedPerson;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const testIsManager = employees.some((person) => (
    person.id === id && employees.some((personId) => (
      personId.managers.includes(id) === true
    ))
  ));
  return testIsManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeesArray = employees;
  const result = { id, firstName, lastName, managers, responsibleFor };
  employeesArray.push(result);
}

function countAnimals(speciesParam) {
  if (speciesParam === undefined) {
    const obj = {};
    species.forEach((specie) => {
      const actualyName = specie.name;
      const actualyResident = specie.residents.length;
      obj[actualyName] = actualyResident;
    });
    return obj;
  }
  return species.find((specie) => speciesParam === specie.name).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Array.isArray(entrants) !== true) return 0;
}

// Start GetAnimalMap Functions ----------------------------------------
function reduceAndStructure() {
  const result = species.reduce((acc, current) => {
    acc[current.location].push(current.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return result;
}

function arraySexLogic(sexParam, currentParam) {
  const namesArray = [];
  const residentsArray = currentParam.residents;
  if (sexParam === 'female') {
    residentsArray.forEach((resident) => {
      if (resident.sex === sexParam) namesArray.push(resident.name);
    });
  } else {
    residentsArray.forEach((resident) => namesArray.push(resident.name));
  }
  return namesArray;
}

function reduceAndStructureByChoices(optionsParam) {
  const { sorted = false, sex = 'male' } = optionsParam;
  return species.reduce((acc, current) => {
    const actualyCurrent = current;
    const auxObj = {};
    const namesArray = arraySexLogic(sex, actualyCurrent);
    if (sorted === true) {
      auxObj[current.name] = namesArray.sort();
    } else {
      auxObj[current.name] = namesArray;
    }
    acc[current.location].push(auxObj);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function getAnimalMap(options) {
  if (options === undefined) {
    const result = reduceAndStructure();
    return result;
  }
  const { includeNames = false } = options;
  if (includeNames !== false) {
    const result = reduceAndStructureByChoices(options);
    return result;
  }
  const result = reduceAndStructure();
  return result;
}
// End of GetAnimalMap Functions ----------------------------------------

// Start GetSchedule Functions ----------------------------------------
function hoursForEachDayFunction() {
  const result = {};
  const keysDays = Object.keys(hours);
  const hoursForEachDay = [{ open: 8, close: 6 },
    { open: 8, close: 6 },
    { open: 10, close: 8 },
    { open: 10, close: 8 },
    { open: 8, close: 10 },
    { open: 8, close: 8 },
    { open: 0, close: 0 }];
  hoursForEachDay.forEach((time, index) => {
    if (time.open <= 0 || time.close <= 0) {
      result[keysDays[index]] = 'CLOSED';
      return result;
    }
    result[keysDays[index]] = `Open from ${time.open}am until ${time.close}pm`;
    return result;
  });
  return result;
}

function getSchedule(dayName) {
  if (dayName === undefined) {
    const result = hoursForEachDayFunction();
    return result;
  }
  if (typeof dayName !== 'undefined') {
    const result = hoursForEachDayFunction();
    const findingResult = Object.entries(result);
    const findedResult = findingResult.find((actualy) => actualy[0] === dayName);
    const resultObj = {};
    const firstResultObj = findedResult[0];
    const secondResultObj = findedResult[1];
    resultObj[firstResultObj] = secondResultObj;
    return resultObj;
  }
}
// End of GetSchedule Functions ----------------------------------------

function getOldestFromFirstSpecies(id) {
  let result = [];
  const filteringId = employees.find((employee) => employee.id === id);
  const filteredFirstId = filteringId.responsibleFor[0];
  const findFirstSpecie = species.find((specie) => specie.id === filteredFirstId);
  const findOlderResidentResult = findFirstSpecie.residents.reduce((acc, current) => (
    Math.max(acc, current.age)
  ), 0);
  const resumeFeatures = findFirstSpecie.residents.find((older) => (
    older.age === findOlderResidentResult
  ));
  result = Object.values(resumeFeatures);
  return result;
}

function increasePrices(percentage) {
  const actualyPrices = Object.entries(data.prices);
  function increasePricesByPercents(numberParam) {
    let number = numberParam;
    const percent = (percentage / 100) * number;
    number += Math.round(percent * 100) / 100;
    const result = Math.round(number * 100) / 100;
    return result;
  }
  const newPrices = {};
  actualyPrices.forEach((actualy) => {
    newPrices[actualy[0]] = increasePricesByPercents(actualy[1]);
  });
  return newPrices;
}

// Start GetEmployeeCoverage Functions ----------------------------------------
function findAnimals(animalIdParam) {
  const animalName = [];
  for (let index = 0; index < animalIdParam.length; index += 1) {
    const aux = species.find((specie) => specie.id === animalIdParam[index]).name;
    animalName.push(aux);
  }
  return animalName;
}

function idOrNameIsUndefined() {
  const result = {};
  employees.forEach((employee) => {
    const aux = employee.responsibleFor;
    result[`${employee.firstName} ${employee.lastName}`] = findAnimals(aux);
  });
  return result;
}

function getEmployeeCoverage(idOrName) {
  const result = {};
  if (idOrName === undefined) {
    return idOrNameIsUndefined();
  }
  const findParamResult = employees.find((employee) => (
    idOrName === employee.id || idOrName === employee.firstName || idOrName === employee.lastName
  ));
  employees.forEach((employee) => {
    if (employee === findParamResult) {
      const aux = employee.responsibleFor;
      result[`${employee.firstName} ${employee.lastName}`] = findAnimals(aux);
    }
  });
  return result;
}
// End of GetEmployeeCoverage Functions ----------------------------------------

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
