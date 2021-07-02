const data = require('./data');

const { species } = data;

const { employees } = data;

// const genID = (size) => [...Array(size)].map(
//   () => Math.floor(Math.random() * 16).toString(16),
// ).join('');
// id: `${genID(9)}-${genID(4)}-${genID(4)}-${genID(4)}-${genID(12)}`,

function getSpeciesByIds(...ids) {
  return (!ids.length ? [] : species.filter((specie) => ids.includes(specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find((specie) => specie.name === animal).residents
      .every((animalAge) => animalAge.age >= age)
  );
}

function getEmployeeByName(employeeName) {
  return (!employeeName ? {}
    : employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return (employees.some((employee) => employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function countAnimals(animal = {}) {
  // verifica(1)nll,undefined && (2)Tamanho de Args && (3) Verifica constructor vazio new Date()
  const emptyParam = animal && Object.keys(animal).length === 0 && animal.constructor === Object;
  if (emptyParam) {
    const animalListTotal = animal;
    const speciesName = (species.map((specieName) => specieName.name));
    const animalsTotal = (species.map((specieName) => specieName.residents.length));
    speciesName.forEach((specie, index) => {
      animalListTotal[specie] = animalsTotal[index];
    });
    return animalListTotal;
  }
  return (species.find((specie) => specie.name === animal).residents.length);
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
