const { species: speciesData, employees, prices, hours, species } = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => speciesData.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return speciesData.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employee = personalInfo;
  employee.managers = associatedWith.managers;
  employee.responsibleFor = associatedWith.responsibleFor;
  return employee;
}

function isManager(id) {
  let aux = false;
  employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) aux = true;
    });
  });
  return aux;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employee);
}

function countAnimals(species) {
  const speciesCount = {};
  if (species === undefined) {
    speciesData.forEach((specie) => {
      speciesCount[specie.name] = specie.residents.length;
    });
    return speciesCount;
  }
  return speciesData.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (entrants === {}) return 0;
  return Object.keys(entrants)
    .reduce((accumulator, currentValue) =>
      accumulator + (entrants[currentValue] * prices[currentValue]), 0);
}

// Feito com Pedro Trasfereti
function createAnimalMap(param, cardinalPoints) {
  return cardinalPoints.map((cardinalPoint) => ([
    cardinalPoint,
    speciesData.filter((specie) => specie.location === cardinalPoint)
      .map((animal) => {
        const residents = animal.residents.map((resident) => resident.name);
        if (param === 'no-options') return animal.name;
        if (param === 'include-names') {
          return ({ [animal.name]: residents });
        }
        return ({ [animal.name]: residents.sort() });
      }),
  ]));
}
function getAnimalMap(options) {
  const cardinalPoints = ['NE', 'NW', 'SE', 'SW'];
  console.log(options);
  if (!options) return Object.fromEntries(createAnimalMap('no-options', cardinalPoints));
  if (options.includeNames) {
    if (options.sorted) {
      return Object.fromEntries(createAnimalMap('sorted', cardinalPoints));
    }
    return Object.fromEntries(createAnimalMap('include-names', cardinalPoints));
  }
}

function getSchedule(dayName) {
  const arrayHours = Object.entries(hours).map((hour) => {
    if (hour[1].open !== 0) {
      return [hour[0], `Open from ${hour[1].open}am until ${hour[1].close - 12}pm`];
    }
    return [hour[0], 'CLOSED'];
  });
  if (dayName === undefined) {
    return Object.fromEntries(arrayHours);
  }
  return Object.fromEntries(arrayHours.filter((hour) => hour[0] === dayName));
}

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  let maxAge = 0;
  speciesData.find((specie) => specie.id === idAnimal).residents
    .forEach((resident) => {
      if (maxAge < resident.age) maxAge = resident.age;
    });
  return Object.values(speciesData.find((specie) => specie.id === idAnimal).residents.find((resident) => resident.age === maxAge));
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
