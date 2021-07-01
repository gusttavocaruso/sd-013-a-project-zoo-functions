const { species, employees } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((itemDoArray) => ids.includes(itemDoArray.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const animalFinded = species.find((specie) => specie.name === animal);
  return animalFinded.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === 0 || employeeName === undefined) return {};
  const output = employees
    .find((item) => employeeName === item.firstName || employeeName === item.lastName);
  return output;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // const result = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  // return result;
}

function isManager(id) {
  return employees.some((item) => item.managers.includes(id) === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers,
    responsibleFor,
  };
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function countAnimals(objSpecies) {
  const objOutputCountSpecies = {};
  if (objSpecies === '' || objSpecies === null || objSpecies === undefined) {
    species.forEach((item) => {
      objOutputCountSpecies[item.name] = item.residents.length;
    });
    return objOutputCountSpecies;
  }
  const blnThereIsTheAnimal = species.some((item) => item.name === objSpecies);
  if (blnThereIsTheAnimal === true) {
    const theuniqueSpecie = species.find((item) => item.name === objSpecies);
    return theuniqueSpecie.residents.length;
  }
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
