const data = require('./data');

function getSpeciesByIds(...ids) {
  const def = [];
  if (ids === undefined) return def;

  const specsIds = [];

  ids.forEach((id) => {
    const fnd = data.species.find((speciesP) => speciesP.id === id);
    specsIds.push(fnd);
  });
  return specsIds;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const fnd = data.species.find((speciesP) => speciesP.name === animal);
  // console.log(fnd);
  return fnd.residents.every((residentsP) => residentsP.age >= age);
}

// console.log(getAnimalsOlderThan('penguins', 10));

function getEmployeeByName(employeeName) {
  const def = {};
  if (employeeName === undefined) return def;

  return data.employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

// const personalInfo = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const associatedWith = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  let isMan = false;

  data.employees.forEach((employee) => {
    // console.log(employee);
    employee.managers.forEach((manager) => {
      // console.log(manager);
      // console.log(id);
      // console.log('comparado com');
      if (manager === id) isMan = true;
    });
  });
  return isMan;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
