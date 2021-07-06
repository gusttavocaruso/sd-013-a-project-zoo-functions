const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((animal) => ids.find((nome) => animal.id === nome));
}
function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName === false) {
    return data.employees.find((nome) => nome.lastName === employeeName
      || nome.firstName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmpre = {};
  const testeId = personalInfo.id;
  novoEmpre.id = testeId;
  novoEmpre.firstName = personalInfo.firstName;
  novoEmpre.lastName = personalInfo.lastName;
  novoEmpre.managers = associatedWith.managers;
  novoEmpre.responsibleFor = associatedWith.responsibleFor;
  return novoEmpre;
}

function isManager(id) {
  return data.employees.find((indexItem) => indexItem.id === id)
    .managers.every((cargo) => cargo === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const teste = {};
  const testeId = id;
  teste.id = testeId;
  teste.firstName = firstName;
  teste.lastName = lastName;
  teste.managers = managers;
  teste.responsibleFor = responsibleFor;
  const adEmployee = data.employees;
  adEmployee.push(teste);
}

function countAnimals(species) {
  // seu código aqui
  if (!species !== true) {
    return data.species.find((nome) => nome.name === species)
      .residents.length;
  }
  return data.species.reduce((acc, value) => {
    acc[value.name] = value.residents.length;
    return acc;
  }, {});
}
function calculateEntry(entrants) {
  let acu = 0;
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  Object.keys(data.prices).forEach((preco, index) => {
    Object.keys(entrants).forEach((entra, j) => {
      if (entra === preco) {
        const valor = Object.values(data.prices)[index];
        const valor2 = Object.values(entrants)[j];
        acu += (valor2 * valor);
      }
    });
  });
  return acu;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
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
