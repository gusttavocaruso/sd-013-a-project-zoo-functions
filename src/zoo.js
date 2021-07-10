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
    .find((employee) =>
      (employee.firstName === employeeName || employee.lastName === employeeName));
}

// function getEmployeeByName(employeeName) {
//   if (employeeName === undefined) {
//     return {};
//   }
//   return employees
//     .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName).employee
// }
// console.log(getEmployeeByName('Wishart'));
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
  return { ...personalInfo, ...associatedWith };
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------5°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// - Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência. //
// O que será avaliado ? //
// - Testa se o id passado é de um gerente //

function isManager(id) {
  return employees.some((employee) => employee.managers
    .some((manager) => manager === id));
}

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------6°Requisito-------------------------------------------------- //
// Referência: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array //
// Qual o objetivo dessa função? //
// - Adicionar uma nova pessoa colaboradora ao array employees //
// O que será avaliado ? //
// - Adiciona um funcionário no fim da lista //

// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
//   const objAdd = {
//     id: id,
//     firstName: firstName,
//     lastName: lastName,
//     managers: managers,
//     responsibleFor: responsibleFor,
//   }
//   employees.push(objAdd)
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objAdd = { id, firstName, lastName, managers, responsibleFor };
  employees.push(objAdd);
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
  const allAnimals = {};
  if (animals === undefined) {
    species.filter((specie) => allAnimals[specie.name] === specie.residents.length);
  }
  return species.find((specie) => specie.name === animals).residents.length;
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
  if (entrants === undefined) { // caso o parâmetro for indefenido retorna 0;
    return 0;
  }
  if (Object.keys(entrants).length === 0) { // caso o parâmetro for vazio retorna 0;
    return 0;
  }
  // busca-se as chaves do objeto entrants, após isso usei o map que tem como saída um array para muliplicar
  // os valores dos objetos tanto do entrants quanto do price. Lembrando que foi multiplicados os objetos
  // de mesmas categoria. Depois usado o reduce para somar os valores. No caso, o acumulado com o atual.
  // Essa última parte teve ajuda do Pedro Alles.
  return Object.keys(entrants).map((category) => data.prices[category] * entrants[category])
    .reduce((previousValue, currentValue) => previousValue + currentValue);
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

// --------------------------------------------------------------------------------------------------- //

// ------------------------------------11°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// -  busca por informações do animal mais velho  //
// O que será avaliado ? //
// - Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário. //
// - retorna um array com nome, sexo e idade do animal mais velho dessa espécie //

function getOldestFromFirstSpecies(id) {
  const searchFirstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const allAnimals = species.find((specie) => specie.id === searchFirstSpecie).residents;
  let firstAge = allAnimals[0];
  allAnimals.forEach((animal, index) => {
    if (allAnimals[index].age > firstAge.age) {
      firstAge = allAnimals[index];
    }
  });
  return Object.values(firstAge);
}
// --------------------------------------------------------------------------------------------------- //

// ------------------------------------12°Requisito-------------------------------------------------- //
// Qual o objetivo dessa função? //
// - A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem //
// O que será avaliado ? //
// - Se o parâmetro da função recebe o valor 20, o aumento é de 20% //

function increasePrices(percentage) {
  const newValues = Object.values(prices).map((value) => (value + (value * (percentage / 100))));
  prices.Adult = Math.round(newValues[0] * 100) / 100;
  prices.Senior = Math.round(newValues[1] * 100) / 100;
  prices.Child = Math.round(newValues[2] * 100) / 100;
  return prices;
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
