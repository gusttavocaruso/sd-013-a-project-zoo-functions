const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species
    .filter((specie) => ids
      .find((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const search = employees.find((employee) => (employeeName === employee.firstName)
  || (employeeName === employee.lastName));
  return search === undefined ? {} : search;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employee = employees.find((person) => person.id === id);
  return employee.managers.length <= 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(obj);
}

function countAnimals(specie) {
  if (specie === '' || specie === undefined) {
    const obj = {};
    species.forEach((animal) => {
      obj[animal.name] = animal.residents.length;
    });
    return obj;
  }
  const spc = species.find((animal) => animal.name === specie);
  console.log(spc);
  return spc.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const values = data.prices;
  const total = (Adult * values.Adult) + (Child * values.Child) + (Senior * values.Senior);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  let obj = {}
  let obj2 ={}
  const aux = 12
  const schedule = Object.entries(data.hours)
  console.log(schedule);
  schedule.forEach((day) => {
    obj[day[0]] = `Open from ${day[1].open}am until ${day[1].close - aux}pm`
    obj["Monday"] = 'CLOSED'
  })
  if(!dayName) return obj 
  obj2[dayName] = obj[dayName]
  return obj2;
}

function getOldestFromFirstSpecies(id) {
  const specieID = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === specieID).residents;
  const result = animals.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  const arr = [result.name, result.sex, result.age];
  return arr;
}

function increasePrices(percentage) {
  const highPrice = data.prices;
  highPrice.Adult = Math.round((((percentage / 100) + 1) * highPrice.Adult) * 100) / 100;
  highPrice.Child = Math.round((((percentage / 100) + 1) * highPrice.Child) * 100) / 100;
  highPrice.Senior = Math.round((((percentage / 100) + 1) * highPrice.Senior) * 100) / 100;
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
