const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) { // Se não tiver parâmetros, retorna um array vazio.
    return [];
  }
  const speciesList = species.filter((specie) => ids.includes(specie.id)); /* Verifica se o parâmetro é igual ao id dentro de species e retorna o objeto em que o parâmetro for igual ao id. */
  return speciesList;
}

function getAnimalsOlderThan(animal, age) {
  const olderAnimals = species.find((specie) => specie.name === animal); /* Encontra a primeira especie que tenha o nome igual ao parametro passado e retorna o objeto dessa especie. */
  return olderAnimals.residents.every((resident) => resident.age >= age); /* Verifica se todos os elementos do array "residents" atendem o requisito passado. */
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeeFullname = data.employees.find((employee) => // Não estava reconhecendo apenas o employees, então coloquei o data na frente. 
    employee.firstName === employeeName || employee.lastName === employeeName); //Encontra o primeiro funcionário que tenha o primeiro ou último nome do parâmetro. 
  return employeeFullname;
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  const managerEmployee = data.employees.some((employee) => employee.managers.some((manager) => manager === id)); /* Verifica se pelo menos um manager dentro de employees tem um id igual ao parametro e retorna true ou false. */
  return managerEmployee;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers || [], // Para passar no teste que espera um array vazio.
    responsibleFor: responsibleFor || [], // Para passar no teste que espera um array vazio.
  };
  return data.employees.push(newEmployee); // Coloca esse objeto do novo empregado no array "employees".
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
