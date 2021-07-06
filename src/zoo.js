// const { employees } = require('./data');
const data = require('./data');

// const { prices } = data;

// const { hours } = data;
// const { name } = data.species;

function getSpeciesByIds(...ids) {
  return data.species.filter((spec) => ids.some((id) => spec.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  return data.species.some((spec) => spec.name === animal
  && spec.residents.every((resident) => resident.age > age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(lastEmployee);
}

function countAnimals(species) {
  // seu código aqui
  // const { residents } = data;
/* if (typeof species === 'undefined') {
    const myobject = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const index of data.species) {
      myobject[index.name] = index.residents.length;
    }
    return myobject;
  }
  const spec = data.species.filter((specie) => specie.name === species);
  return spec[0].residents.length; */
}

function calculateEntry(entrants) {
  // seu código aqui
/*  let soma = 0;
  const somaKeys = (key) => {
    soma += entrants[key] * prices[key];
  };
  // let recebeEntrants = entrants;
  if (typeof entrants === 'undefined') {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
for (key in entrants) {
  if (Object.prototype.hasOwnProperty.call(entrants, key) && Object.prototype.hasOwnProperty.call(prices, key)) {
    somaKeys(key);
  }
  }
  return soma; */
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const obj = {};
  // days = Object.keys(hours);
  // const openn = Object.values(hours).map((o) => o.open);
  // const closed = Object.values(hours).map((clo) => clo.close);
  const myobject = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (typeof dayName === 'undefined') {
    return myobject;
  }
  obj[dayName] = myobject[dayName];
  return obj;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((spec) => spec.id === idAnimal).residents;
  const sortAnimals = animals.sort((a, b) => b.age - a.age);
  return [sortAnimals[0].name, sortAnimals[0].sex, sortAnimals[0].age];
}

function increasePrices(percentage) {
  // seu código aqui
/* const formula = percentage / 100;
  for(i in prices){
   prices[i] = (prices[i] + prices[i] * formula + 0.001).toFixed(2)
 } */
// prices
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
