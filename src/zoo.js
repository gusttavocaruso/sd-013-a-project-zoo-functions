const data = require('./data');

function getSpeciesByIds(...ids) {
  const control = [];
  if (ids) {
    data.species.forEach((arrayObjects) => {
      ids.forEach((sentIds) => {
        if (arrayObjects.id === sentIds) {
          control.push(arrayObjects);
        }
      });
    });
  }
  return control;
}

function getAnimalsOlderThan(animal, age) {
  let control = true;
  data.species.forEach((animals) => {
    if (animals.name === animal) {
      animals.residents.forEach((resident) => {
        if (resident.age < age) {
          control = false;
        }
      });
    }
  });
  return control;
}

function getEmployeeByName(employeeName) {
  let control = {};
  if (employeeName) {
    data.employees.forEach((arrayObjects) => {
      if ((arrayObjects.firstName === employeeName) || (arrayObjects.lastName === employeeName)) {
        control = arrayObjects;
      }
    });
  }
  return control;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.keys(personalInfo).forEach((key, i) => {
    newObject[key] = Object.values(personalInfo)[i];
  });
  Object.keys(associatedWith).forEach((key, i) => {
    newObject[key] = Object.values(associatedWith)[i];
  });
  return newObject;
}

function isManager(id) {
  let control = false;
  data.employees.forEach((arrayObjects) => {
    arrayObjects.managers.forEach((arrayManagers) => {
      if (arrayManagers === id) {
        control = true;
      }
    });
  });
  return control;
}

function addEmployee(...params) {
  const newObject = {};
  Object.keys(data.employees[0]).forEach((key, i) => {
    if (params[i]) {
      newObject[key] = params[i];
    } else {
      newObject[key] = [];
    }
  });
  data.employees.push(newObject);
}

function countAnimals(species) {
  const newObject = {};
  let popularity = 0;
  if (species) {
    data.species.forEach((arrayObjects) => {
      if (arrayObjects.name === species) {
        popularity = arrayObjects.residents.length;
      }
    });
    return popularity;
  }
  data.species.forEach((arrayObjects) => {
    newObject[arrayObjects.name] = arrayObjects.residents.length;
  });
  return newObject;
}

function calculateEntry(entrants) {
  let sum = 0;
  if ((!entrants) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  Object.keys(entrants).forEach((entrant, i) => {
    Object.keys(data.prices).forEach((key, i2) => {
      if (entrant === key) {
        sum += Object.values(entrants)[i] * Object.values(data.prices)[i2];
      }
    });
  });
  return sum;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
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
