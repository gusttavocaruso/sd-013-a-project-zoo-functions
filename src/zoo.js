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
  const employeeFullname = data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName); /* Não estava reconhecendo apenas o employees, então coloquei o data na frente. Encontra o primeiro funcionário que tenha o primeiro ou último nome do parâmetro.*/
  return employeeFullname;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {

  const managerEmployee = data.employees.some((employee) => 
    employee.managers.some((manager) => manager === id)); /* Verifica se pelo menos um manager dentro de employees tem um id igual ao parametro e retorna true ou false. */
  return managerEmployee;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [], // Para passar no teste que espera um array vazio.
    responsibleFor: responsibleFor || [], // Para passar no teste que espera um array vazio.
  };
  return data.employees.push(newEmployee); // Adiciona esse objeto do novo empregado no array "employees".
}

function countAnimals(species1) {
  if (species1 === undefined) {
    const animals = {};
    data.species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
    return animals;
  }
  return data.species.find((specie) => specie.name === species1).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0; // Retorna 0 caso o parametro esteja vazio.
  }
  const adultPrice = data.prices.Adult * entrants.Adult || 0;
  const seniorPrice = data.prices.Senior * entrants.Senior || 0;
  const childPrice = data.prices.Child * entrants.Child || 0; /* Multiplica o numero de entradas de adultos, criancas e idosos pelo preco de cada entrada deles. Caso nao haja um valor para qualquer um desses, ele multiplica por zero. */

  return adultPrice + seniorPrice + childPrice;
}

function getAnimalMap(options) {
  
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
