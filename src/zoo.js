const data = require('./data');

function getSpeciesByIds(...ids) {
  const controlador = [];
  if (ids) {
    data.species.forEach((elements) => {
      ids.forEach((par) => {
        if (elements.id === par) {
          controlador.push(elements);
        }
      });
    });
  }
  return controlador;
}

function getAnimalsOlderThan(animal, age) {
  let controlador = true;
  data.species.forEach((elements) => {
    if (animal === elements.name) {
      elements.residents.forEach((animals) => {
        if (age > animals.age) {
          controlador = false;
        }
      });
    }
  });
  return controlador;
}

function getEmployeeByName(employeeName) {
  let controlador = {};
  if (employeeName) {
    data.employees.forEach((info) => {
      if ((info.firstName === employeeName) || (info.lastName === employeeName)) {
        controlador = info;
      }
    });
  }
  return controlador;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.keys(personalInfo).forEach((key, index) => {
    newObject[key] = Object.values(personalInfo)[index];
  });
  Object.keys(associatedWith).forEach((key, index) => {
    newObject[key] = Object.values(associatedWith)[index];
  });
  return newObject;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciesNames) {
  const allAnimals = speciesNames.reduce((acc, current) => {
    acc[current.name] = current.resudents.length;

    return acc;
  }, {});
  if (!speciesNames) return allAnimals;
  return allAnimals[speciesNames];
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
