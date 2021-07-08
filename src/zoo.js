const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const encontrar = species.find((especie) => especie.name === animal);
  return encontrar.residents.every((especie) => especie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) === 'undefined') return {};
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // Deve retornar um valor booleano
  let retorna = false;
  data.employees.forEach((employe) => {
    employe.managers.forEach((manage) => {
      if (manage === id) retorna = true;
    });
  });
  return retorna;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novo = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novo);
}

function countAnimals(especies) {
  const retorn = {};
  if (!especies) {
    species
      .forEach(({ name, residents }) => {
        retorn[name] = residents.length;
      });
    return retorn;
  }
  return species
    .find(({ name }) => (name === especies)).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  if (entrants === {}) return 0;
  return Object
    .keys(entrants)
    .reduce((acc, current) => (
      acc + (prices[current] * entrants[current])
    ), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const valor = Object.values(hours);
  const week = Object.keys(hours);
  const alert = {};
  const ind = {};

  week.forEach((it, i) => {
    alert[it] = `Open from ${valor[i].open}am until ${valor[i].close - 12}pm`;
  });
  alert.Monday = 'CLOSED';
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (dayName) {
    ind[dayName] = alert[dayName];
    return ind;
  }
  return alert;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const { name, sex, age } = (data.species
    .find((specie) => specie.id === findEmployee).residents)
    .reduce((accumulator, animal) => ((animal.age > accumulator.age) ? animal : accumulator));

  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (idOrName) {
    return (
      employees
        .filter(({ id, firstName, lastName }) => (
          id === idOrName || firstName === idOrName || lastName === idOrName
        ))
    );
  }
  return employees;
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
