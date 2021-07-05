const data = require('./data');

function getSpeciesByIds(...listIds) {
  const arrayAnimals = [];
  listIds.forEach((id) => {
    const animalId = data.species.find((animalsId) => animalsId.id === id);
    arrayAnimals.push(animalId);
  });
  return arrayAnimals;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((each) => each.name === animal);
  return animals.residents.every((animalsAge) => animalsAge.age > age);
}

function getEmployeeByName(employeeName) {
  // if estava com null. Josue me explicou que eu teria que usar uma negação (!employeeName) ou comparar com undefined para retornar um boolean false.
  if (employeeName === undefined) {
    return {};
  }
  // havia colocado o escopo da minha arrowfunction entre {}. Josue me mostrou que eu deveria retirar as {} para que pudesse retornar um obj.
  return data.employees.find((each) => each.firstName === employeeName
  || each.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Feito com ajuda do Josue.
  return { ...personalInfo, ...associatedWith };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function isManager(id) {
  return data.employees.some((each) => each.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((previousAnimal, currentAnimal) => {
      // estava dando erro no lint. Rogerio me ajudou a resolver.
      const counter = previousAnimal;
      counter[currentAnimal.name] = currentAnimal.residents.length;
      return counter;
    }, {});
  }
  return data.species.find((currentSpecie) => currentSpecie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const totalEntries = `${(Adult * data.prices.Adult)
  + (Child * data.prices.Child) + (Senior * data.prices.Senior)}`;
  return parseFloat(totalEntries);
}

function getAnimalMap(options) {
  // seu código aqui
}

function dayOfWeek(day) {
  if (day === 'Monday') {
    return 'CLOSED'
  }
  if (day === 'Tuesday') {
    return 'Open from 8am until 6pm'
  }
  if (day === 'Wednesday') {
    return 'Open from 8am until 6pm'
  }
  if (day === 'Thursday') {
    return 'Open from 10am until 8pm'
  }
  if (day === 'Friday') {
    return 'Open from 10am until 8pm';
  }
  if (day === 'Saturday') {
    return 'Open from 8am until 10pm'
  }
  if (day === 'Sunday'){
    return 'Open from 8am until 8pm'
  }
}

function getSchedule(dayName) {
  const schedule = {};
  if (dayName === undefined) {
    return  {
      'Tuesday': 'Open from 8am until 6pm',
      'Wednesday': 'Open from 8am until 6pm',
      'Thursday': 'Open from 10am until 8pm',
      'Friday': 'Open from 10am until 8pm',
      'Saturday': 'Open from 8am until 10pm',
      'Sunday': 'Open from 8am until 8pm',
      'Monday': 'CLOSED'
    };
  }
  if (dayName){
  schedule[dayName] = dayOfWeek(dayName)
  }
  return schedule;
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
