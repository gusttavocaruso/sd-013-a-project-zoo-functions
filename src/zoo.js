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

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------4°Requisito--------------------------------------------------*/
/* Referência: https://pt.stackoverflow.com/questions/215685/juntar-dois-jsons-em-um-%C3%BAnico-objeto */
/* Qual o objetivo dessa função? 
  - Criar um objeto equivalente ao de uma pessoa colaboradora.
  - O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName
  - O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor
*/
/*O que será avaliado ?
  - Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados. */


function createEmployee(personalInfo, associatedWith) {
  return Object.assign({},personalInfo,associatedWith)
  
}

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------5°Requisito--------------------------------------------------*/
/* Qual o objetivo dessa função? 
  - Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
*/
/*O que será avaliado ?
  - Testa se o id passado é de um gerente */

function isManager(id) {
return employees.some((employee) => employee.managers.some((manager) => manager === id))}

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------6°Requisito--------------------------------------------------*/
/* Referência: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array */
/* Qual o objetivo dessa função? 
  - Adicionar uma nova pessoa colaboradora ao array employees
*/
/*O que será avaliado ?
  - Adiciona um funcionário no fim da lista */

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objAdd = { 
  id: id,
  firstName: firstName,
  lastName: lastName,
  managers: managers,
  responsibleFor: responsibleFor,
} 
employees.push(objAdd)
}

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------7°Requisito--------------------------------------------------*/
/* Qual o objetivo dessa função? 
  - Contabilizar a quantidade de animais.
*/
/*O que será avaliado ?
  - Sem parâmetros, retorna animais e suas quantidades
  - Com o nome de uma espécie de animal, retorna somente a quantidade */

function countAnimals(animals) {
  const allAnimals = {}
  if (animals === undefined ){
    species.filter((specie) => {
      allAnimals[specie.name] = specie.residents.length})
      return allAnimals 
  }
    return species.find((specie) => specie.name === animals).residents.length  
}
console.log(countAnimals());

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
