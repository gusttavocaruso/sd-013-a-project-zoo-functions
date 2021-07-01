const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids
    .map((id) => data.species
      .find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((element) => element.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((funcionario) =>
    funcionario.firstName === employeeName || funcionario.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  if (!species) {
    const countAnim = data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
    return countAnim;
  }
  const countSpecie = data.species.find((specie) => specie.name === species)
    .residents.length;
  return countSpecie;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;
  const { Adult, Senior, Child } = entrants;
  const multp = (num1 = 0, num2) => num1 * num2;
  const soma = multp(Adult, data.prices.Adult)
    + multp(Senior, data.prices.Senior) + multp(Child, data.prices.Child);
  return soma;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const dias = Object.keys(data.hours);
  return dias.reduce((acc, current, index) => {
    if (current === 'Monday') {
      acc[current] = 'CLOSED';
    } else {
      acc[current] = `Open from ${data.hours[current].open}am until ${data.hours[current].close}pm`;
    }
    return acc;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const result = [];
  const employee = data.employees.find((element) => element.id === id);
  const specie = data.species.find((element) => element.id === employee.responsibleFor[0]);
  const oldAnimal = specie.residents.reduce((acc, current) => {
    if (current.age >= acc.age) return current;
    return acc;
  });
  result.push(oldAnimal.name);
  result.push(oldAnimal.sex);
  result.push(oldAnimal.age);
  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  data.prices.Adult += (data.prices.Adult * percentage) / 100;
  data.prices.Senior += (data.prices.Senior * percentage) / 100;
  data.prices.Child += (data.prices.Child * percentage) / 100;
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
