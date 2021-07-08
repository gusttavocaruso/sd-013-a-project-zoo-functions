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

function convertHours(hours) {
  if (hours < 12) {
    return `${hours}am`;
  }
  return `${hours - 12}pm`;
}

function message(day, schedule) {
  if (schedule[day].open === schedule[day].close) {
    return 'CLOSED';
  }
  return `Open from ${convertHours(schedule[day].open)
  } until ${convertHours(schedule[day].close)}`;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if sem comparação. é verdadeiro quando recebe um parametro. mas não é boolean. apenas entra na condição.
// desafio 10 resolvido e refatorado com ajuda do Josué Lobo.
function getSchedule(dayName) {
  const schedule = {};
  if (dayName) {
    schedule[dayName] = message(dayName, data.hours);
  } else {
    Object.keys(data.hours)
      .forEach((day) => {
        schedule[day] = message(day, data.hours);
      });
  }
  return schedule;
}

// desafio 11 feito com ajuda do Josue Lobo. Valeu meu parceiro.
function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.find((employee) => employee.id === id);
  const species = data.species.find((specie) => specie.id === employeeId.responsibleFor[0]);
  const firstOld = species.residents.sort((first, second) => second.age - first.age);
  return Object.values(firstOld[0]);
}

// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function increasePrices(percentage) {
  const prices = Object.keys(data.prices);
  prices.forEach((price) => {
    data.prices[price] = Math.round(data.prices[price] * (1 + percentage / 100) * 100) / 100;
  });
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
