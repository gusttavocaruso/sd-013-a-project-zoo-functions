const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrSpecie = [];
  ids.forEach((id) => data.species.forEach((specie) => {
    if (specie.id === id) arrSpecie.push(specie);
  }));
  return arrSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = data.species.filter((specie) => specie.name === animal);
  return selectedAnimal[0].residents.every((ser) => ser.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = data
    .employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName);
  const [funcionario] = employee;
  if (typeof funcionario === 'undefined') return {};
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const manager = data.employees.find((employee) => employee
    .managers.some((check) => check === id));
  if (manager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (typeof species === 'undefined') {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const allSelectedAnimal = data.species.filter((selected) => selected.name === species);
  return allSelectedAnimal[0].residents.length;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') return 0;
  const { Adult, Child, Senior } = entrants;
  const adultValue = Adult * data.prices.Adult;
  const childValue = Child * data.prices.Child;
  const seniorValue = Senior * data.prices.Senior;
  let totalValue = 0;
  if (adultValue) totalValue += adultValue;
  if (childValue) totalValue += childValue;
  if (seniorValue) totalValue += seniorValue;
  totalValue.toFixed(2);
  return totalValue;
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
