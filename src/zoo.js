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
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
