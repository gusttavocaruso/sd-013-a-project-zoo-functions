const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => (id === specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((elemento) => elemento.age >= age);
}

function getEmployeeByName(employeeName) {
  const getEmployee = employees
    .find(({ firstName, lastName }) => (firstName === employeeName || lastName === employeeName));
  return (employeeName === undefined ? {} : getEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees
    .some(({ managers }) => (
      managers.some((manager) => (manager === id))
    ));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addNewEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addNewEmployee);
}

function countAnimals(animal) {
  const quantiyAllAnimals = () => {
    const animals = {};
    species.forEach(({ name, residents }) => {
      animals[name] = residents.length;
    });
    return animals;
  };
  const quantityByAnimal = () => species.find(({ name }) => name === animal).residents.length;
  return animal === undefined ? quantiyAllAnimals() : quantityByAnimal();
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(identity) {
  const person = employees.find((employee) => employee.id === identity);
  const firstSpecieJob = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecieJob.residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(oldest);
}

function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
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
