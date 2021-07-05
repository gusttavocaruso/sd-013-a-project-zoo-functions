const { species, employees } = require('./data');
const data = require('./data');

/* ------------------------------------1°Requisito--------------------------------------------------*/
/* Requsito realizado com ajuda da Lanai Conceição */
/* Qual o objetivo dessa função?
   - Busca espécies de animais por id.
   - ID é passado como parâmetro
   - Retorna um array contendo as espécies*/
/* O que será avaliado ?
  - Parâmetro vazio -> retorna array vazio
  - Parâmetro com único ID -> retorna array com espécie referente ao ID
  - Parâmetro com mais de 1 ID retorna array -> com espécies referente aos ID's*/ 

function getSpeciesByIds(...ids) {
  return ids.map((element) => species.find((specie) => specie.id === element));
}
/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------2°Requisito--------------------------------------------------*/
/* Requsito realizado com ajuda da Lanai Conceição */
/* Qual o objetivo dessa função?
   - A partir do nome da espécia e uma idade mínima, verifica-se se todos possuem a idade mínima       específicada.
   - Deve retorna um boleano*/
   /* O que será avaliado ?
   Ao passar nome e idade retorna-se um boleano(true or false) */
   

function getAnimalsOlderThan(animal, age) {
      return species.find((specie) => specie.name === animal).residents
      .every((resident) => resident.age >= age)
  }

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------3°Requisito--------------------------------------------------*/
/* Qual o objetivo dessa função? 
  -Busca pessoas colaboradoras através do primeiro ou do último nome delas*/
/*O que será avaliado ?
  -Sem parâmetros, retorna um objeto vazio
  -Quando provido o primeiro ou último nome do funcionário, retorna o objeto do funcionário */

function getEmployeeByName(employeeName) {
  if (employeeName === undefined ){
    return {}
  }
  return employees.find((employee) => {
    if (employee.firstName === employeeName|| employee.lastName === employeeName){
      return employee
  }
})
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

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
