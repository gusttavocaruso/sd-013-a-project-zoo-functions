const { employees, species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];

  ids.forEach((id) => {
    result.push(species.find((specie) => specie.id === id));
  });

  return result;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((employ) => employ.firstName === employeeName || employ.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some((employ) => (employ.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(animais) {
  const animals = {};
  if (animais === undefined) {
    species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
    return animals;
  } return species.find((specie) => specie.name === animais).residents.length;
}

function calculateEntry(entrants) {
  let result = 0;

  if (entrants === undefined) {
    return result;
  } if (entrants.Adult) {
    result += entrants.Adult * 49.99;
  } if (entrants.Senior) {
    result += entrants.Senior * 24.99;
  } if (entrants.Child) {
    result += entrants.Child * 20.99;
  }
  return result;
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
  const porcentagem = (percentage / 100) + 1;

  Object.keys(data.prices).forEach((person) => {
    data.prices[person] = Math.round((data.prices[person] * porcentagem * 100)) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const fullName = (person) => `${person.firstName} ${person.lastName}`;
  const verifyIdOrName = (person) => (person.firstName === idOrName)
  || (person.lastName === idOrName) || (person.id === idOrName);
  const findName = (arrayOfIds) => {
    const specieName = [];
    arrayOfIds.forEach((id) => specieName
      .push(data.species.find(((specie) => specie.id === id)).name));
    return specieName;
  };
  const employeesList = data.employees
    .reduce((acc, person) => ({ ...acc, [fullName(person)]: findName(person.responsibleFor) }), {});

  if (!idOrName) return employeesList;
  const result = data.employees
    .find((employee) => verifyIdOrName(employee));

  return { [fullName(result)]: findName(result.responsibleFor) };
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
