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
  const employeeFullname = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  /* Não estava reconhecendo apenas o employees, então coloquei o data na frente. Encontra o primeiro funcionário que tenha o primeiro ou último nome do parâmetro. */
  return employeeFullname;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managerEmployee = data.employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
    /* Verifica se pelo menos um manager dentro de employees tem um id igual ao parametro e retorna true ou false. */
  return managerEmployee;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { // Cria um objeto de novo empregado com todos os parametros como chave do objeto.
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
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    }); /* Para cada "specie" dentro de "species", o objeto animals com o nome de cada specie como chave do objeto,
    recebe a length do array residents (dentro de species) como valor do objeto, caso nao seja passado nenhum parametro. */
    return animals;
  }
  return data.species.find((specie) => specie.name === species1).residents.length;
} // Retorna a length do array residents da specie que tem o nome igual ao parametro mostrando a quantidade desse animal.

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0; // Retorna 0 caso o parametro esteja vazio.
  }
  const adultPrice = data.prices.Adult * entrants.Adult || 0;
  const seniorPrice = data.prices.Senior * entrants.Senior || 0;
  const childPrice = data.prices.Child * entrants.Child || 0; /* Multiplica o numero de entradas de adultos, criancas e idosos
  pelo preco de cada entrada deles. Caso nao haja um valor para qualquer um desses, ele multiplica por zero. */

  return adultPrice + seniorPrice + childPrice;
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const employeeResponsible = data.employees.find((employee) => employee.id === id); // Encontra o employee que tem o id igual ao do parametro.
  const animalOne = employeeResponsible.responsibleFor[0]; // Primeira especie de animal pela qual o employeeResponsible é responsável.
  const everyResident = data.species.find((specie) => specie.id === animalOne).residents; /* Pegar o array residents da specie que tiver o id igual ao de animalOne, ou seja, pega o array residents da primeira specie na qual o employeeResponsible tem responsabilidade. */
  const olderAnimal = Object.values(everyResident.sort((a, b) => b.age - a.age)[0]); /* Ordenar os valores da chave "age" em everyResidents de forma decrescente (b - a) e pega a primera posição do array depois de ordenar, ou seja, pega o animal mais velho. */
  return olderAnimal; // Object.values retorna um array.
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
