const data = require('./data');

function getSpeciesByIds(...ids) {
  const control = [];
  if (ids) {
    data.species.forEach((arrayObjects) => {
      ids.forEach((parametros) => {
        if (arrayObjects.id === parametros) {
          control.push(arrayObjects);
        }
      });
    });
  }
  return control;
}

function getAnimalsOlderThan(animal, age) {
  let control = true;
  data.species.forEach((arrayObjects) => {
    if (animal === arrayObjects.name) {
      arrayObjects.residents.forEach((animals) => {
        if (age > animals.age) {
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
    data.employees.forEach((info) => {
      if ((info.firstName === employeeName) || (info.lastName === employeeName)) {
        control = info;
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
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (id === manager) {
        control = true;
      }
    });
  });
  return control;
}

function addEmployee(...parametros) {
  const newObjects = {};
  Object.keys(data.employees[0]).forEach((employee, i) => {
    if (parametros[i]) {
      newObjects[employee] = parametros[i];
    } else {
      newObjects[employee] = [];
    }
  });
  data.employees.push(newObjects);
}

function countAnimals(especies) {
  const objects = {};
  let countSpecies = 0;
  if (especies) {
    data.species.forEach((specie) => {
      if (especies === specie.name) {
        countSpecies = specie.residents.length
      }
    });
    return countSpecies;
  } 
  data.species.forEach((specie) => {
    objects[specie.name] = specie.residents.length;
  });
  return objects;
}

function calculateEntry(entrants) {
  // seu código aqui
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
