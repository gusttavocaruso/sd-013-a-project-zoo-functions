const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return []; // Se a função for chamada sem parâmetro...
  const speciesReturn = [];
  ids.filter((id) => data.species.forEach((idSpecies) => {
    if (idSpecies.id === id) speciesReturn.push(idSpecies);
  }));
  return speciesReturn;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const accessSpecies = data.species;
  const AnimalsAccess = accessSpecies.filter((namesAccess) => namesAccess.name === animal);
  return AnimalsAccess[0].residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const searchEmployee = data.employees
    .find((name) => (name.firstName === employeeName) || (name.lastName === employeeName));
  return searchEmployee;
  // Usa-se o find, pois deseja-se achar o primeiro correspondente. Com filter não funciona.
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // Percebi que a estrutura desejada, é praticamente a que é passada nos parâmetros.
  // Uma lógica interessante aqui é utilizar o spread operator. Para espalhar os elementos
  // de cada objeto passado como parametro.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Tentei com find(). Não deu certo pois o mesmo retorna o valor do
  // elemento que passa no teste da função callback.
  // O some() verifica se ALGUM dos elementos passa no teste. Retornando
  // true para caso encontre algum elemento que passou no teste.
  // O includes() é magnífico. Retornando true ou false se o elemento passado
  // pertença ao array ou ao objeto.
  return data.employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employeeAdd);
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
