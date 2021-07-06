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
// console.log(createEmployee({
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// },{
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992'
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
//   ]
// }));

/*---------------------------------------------------------------------------------------------------*/

/* ------------------------------------5°Requisito--------------------------------------------------*/
/* Qual o objetivo dessa função? 
  - Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
*/
/*O que será avaliado ?
  - Testa se o id passado é de um gerente */
// function isManager(id) {
//   return employees.find((employee) => employee.id === id).managers
//   .some((manager) => manager === 'stephanieId' || manager === undefined)
  
// }
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
function isManager(id) {
return employees.some((employee) => employee.managers.some((manager) => manager === id))}
  
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));




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
