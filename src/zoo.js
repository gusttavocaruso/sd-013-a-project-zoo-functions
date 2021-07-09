// const { employees } = require('./data');
const { prices } = require('./data');

const data = require('./data');

// const { prices } = data;

// const { hours } = data;
// const { name } = data.species;

function getSpeciesByIds(...ids) {
  return data.species.filter((spec) => ids.some((id) => spec.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((spec) => spec.name === animal
  && spec.residents.every((resident) => resident.age > age));
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  if (typeof species === 'undefined') {
    const myobject = {};
    data.species.forEach((specie) => { myobject[specie.name] = specie.residents.length; });
    return myobject;
  }
  const spec = data.species.filter((specie) => specie.name === species);
  return spec[0].residents.length;
}
// console.log(countAnimals('snakes'));
function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  // let pricesEntrants = Object.values(entrants);
  const pricesObj = Object.keys(entrants).reduce(
    (acc, curValue) => acc + prices[curValue] * entrants[curValue], 0,
  );

  return pricesObj;
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
  const idAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((spec) => spec.id === idAnimal).residents;
  const sortAnimals = animals.sort((a, b) => b.age - a.age);
  return [sortAnimals[0].name, sortAnimals[0].sex, sortAnimals[0].age];
}

function increasePrices(percentage) {
// A ideia da formula veio de dois sites
// 1º https://www.estrategiaconcursos.com.br/blog/como-calcular-porcentagem/
// 2º https://pt.stackoverflow.com/questions/207612/arredondamento-para-cima-de-float-em-javascript
  const formula = (percentage / 100) + 1;
  const keysPrice = Object.keys(prices);
  keysPrice.forEach((key) => { prices[key] = Math.round(prices[key] * formula * 100) / 100; });
}

function getEmployeeCoverage(idOrName) {
  /* const { employees } = data;
  const { species } = data;
  const funcionarios = data.employees.map((employee) =>
    (`${employee.firstName} ${employee.lastName}`));

  const responsabilidade = data.species.map((employe) => employe.id);

  const arrayIdsRespons = employees.map((emplo) => emplo.responsibleFor);
  const idsFiltrados = [];
  const arr = species.map((spec) => spec.id);
  const newArr = [];
  const obj = {};
  funcionarios.forEach((func) => { obj[func] = 0; });
  arrayIdsRespons.forEach((itemId) => itemId.map((cadaId) => idsFiltrados.push(cadaId)));
  idsFiltrados.forEach((id) => arr.find((spe) => spe === id));
  return data.species.find((s) => s.id === arr[0]); */
}
// console.log(getEmployeeCoverage());
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
