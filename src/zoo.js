const { species, employees, prices, hours } = require('./data');
const data = require('./data');

// ------------------------------------1°Requisito-------------------------------------------------- //
// Requsito realizado com ajuda da Lanai Conceição //
// Qual o objetivo dessa função? //
//  - Busca espécies de animais por id //
//  - ID é passado como parâmetro //
//  - Retorna um array contendo as espécies //
//  O que será avaliado ? //
// - Parâmetro vazio -> retorna array vazio //
// - Parâmetro com único ID -> retorna array com espécie referente ao ID //
// - Parâmetro com mais de 1 ID retorna array -> com espécies referente aos ID's //

function getSpeciesByIds(...ids) {
  return ids.map((element) => species.find((specie) => specie.id === element));
}
// -------------------------------------------------------------------------------------------------- //

// ------------------------------------2°Requisito-------------------------------------------------- //
// Requsito realizado com ajuda da Lanai Conceição //
// Qual o objetivo dessa função? //
// - A partir do nome da espécia e uma idade mínima, verifica-se se todos possuem a idade mínima específicada //
// - Deve retorna um boleano //
// O que será avaliado ? //
// Ao passar nome e idade retorna-se um boleano(true or false) //

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------3°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// -Busca pessoas colaboradoras através do primeiro ou do último nome delas //
// O que será avaliado ? //
// -Sem parâmetros, retorna um objeto vazio //
// -Quando provido o primeiro ou último nome do funcionário, retorna o objeto do funcionário //

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((employee) => {
      if (employee.firstName === employeeName || employee.lastName === employeeName) {
        return employee
      }
    });
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------4°Requisito-------------------------------------------------- //
// Referência: https://pt.stackoverflow.com/questions/215685/juntar-dois-jsons-em-um-%C3%BAnico-objeto //
// Qual o objetivo dessa função? //
// - Criar um objeto equivalente ao de uma pessoa colaboradora.//
// - O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName //
// - O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor //
// O que será avaliado ? //
// - Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados. //

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------5°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// - Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência. //
// O que será avaliado ? //
// - Testa se o id passado é de um gerente //

function isManager(id) {
  return employees.some((employee) => employee.managers
    .some((manager) => manager === id)) }

//---------------------------------------------------------------------------------------------------//

//------------------------------------6°Requisito--------------------------------------------------//
// Referência: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array //
// Qual o objetivo dessa função? //
// - Adicionar uma nova pessoa colaboradora ao array employees //
// O que será avaliado ? //
// - Adiciona um funcionário no fim da lista //

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

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------7°Requisito-------------------------------------------------- //
// Referência: https://stackoverflow.com/questions/14234646/adding-elements-to-object/14234701 //
// Qual o objetivo dessa função? //
// - Contabilizar a quantidade de animais. //
// O que será avaliado ? //
// - Sem parâmetros, retorna animais e suas quantidades //
// - Com o nome de uma espécie de animal, retorna somente a quantidade //

function countAnimals(animals) {
  const allAnimals = {}
  if (animals === undefined ){
    species.filter((specie) => {
      allAnimals[specie.name] = specie.residents.length})
      return allAnimals 
  }
    return species.find((specie) => specie.name === animals).residents.length  
}
// --------------------------------------------------------------------------------------------------- //

// ------------------------------------8°Requisito-------------------------------------------------- //
// Referência: https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/ //
// Qual o objetivo dessa função? //
// - partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado //
//
// O que será avaliado ? //
// - Retorna 0 se nenhum argumento for passado //
// - Retorna 0 se um objeto vazio for passado //
// - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos //
function calculateEntry(entrants) {
  if (entrants === undefined){
    return 0
  }
  if (Object.keys(entrants).length === 0 ){
    return 0
  }
    const {Adult} = entrants;
    const {Child} = entrants;
    const {Senior} = entrants;
    if (Child === undefined && Adult === undefined ){
      return prices.Senior*Senior
    }if (Child === undefined && Senior === undefined ){
      return prices.Adult*Adult
    }if (Senior === undefined && Adult === undefined ){
      return prices.Child*Child
    }if (Child === undefined ){
      return prices.Adult*Adult + prices.Senior*Senior
    }if (Senior === undefined ){
      return prices.Adult*Adult + prices.Child*Child
    } if (Adult === undefined ){
      return prices.Senior*Senior + prices.Child*Child
    } 
    return prices.Senior*Senior + prices.Child*Child + prices.Adult*Adult
}


// --------------------------------------------------------------------------------------------------- //

// ------------------------------------9°Requisito-------------------------------------------------- //

function getAnimalMap(options) {
  // seu código aqui
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------10°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// - Disponibilizar as informações de horário para uma consulta //
// O que será avaliado ? //
// - Sem parâmetros, retorna um cronograma legível para humanos. //
// - Se um único dia for passado, retorna somente este dia em um formato legível para humanos. //

function getSchedule(dayName) {
  const obj = {};
  if (dayName === undefined) {
    obj.Tuesday = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`;
    obj.Wednesday = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`;
    obj.Thursday = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`;
    obj.Friday = `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`;
    obj.Saturday = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`;
    obj.Sunday = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`;
    obj.Monday = 'CLOSED';
    return obj;
  } if (dayName === 'Monday') {
    obj[dayName] = 'CLOSED';
    return obj;
  }
  obj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return obj;
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
