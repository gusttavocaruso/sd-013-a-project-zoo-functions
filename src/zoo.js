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
  if(!entrants)  return 0;
  const {Adult=0, Child=0, Senior=0 } = entrants
  const values = data.prices
  const total = (Adult * values.Adult) + (Child * values.Child) + (Senior * values.Senior)
  return total
}

console.log(calculateEntry());

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  /* if (!dayName) {
    const obj = {};
    return hours.map((day) => obj[day] = `Open from ${day.open}am until ${day.close}pm`);
  } */
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
