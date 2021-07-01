const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((idDoNossoArray) => data.species.find((speciE) => speciE.id === idDoNossoArray));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nameSpecie = data.species.find((specie) => specie.name === animal);
  return nameSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName == null) {
    return {};
  }
  return data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (species == null) {
    return data.species.reduce((acc, currSpecie) => {
      acc[currSpecie.name] = currSpecie.residents.length;
      return acc;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  const objectValueLength = Object.values.length;
  if (objectValueLength === 0 || entrants == null) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * data.prices.Adult)
                    + (Child * data.prices.Child)
                    + (Senior * data.prices.Senior);
  return total;
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
