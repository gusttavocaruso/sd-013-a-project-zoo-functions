const { species, employees } = require('./data');
const data = require('./data');

// Requisito 1
function getSpeciesByIds(...ids) { // gerar um array de ids
  if (!ids) return [];// sem nada retorna vazio
  return ids.map((id) => species.find((specie) => specie.id === id));// o map vai separar id por id, depois especie por especie vai encontrar aquela cujo id é giual ao id passado lá em cima
}

// Requisito 2
function getAnimalsOlderThan(name, age) {
  return species.find((specie) => specie.name === name)// uma vez que eu achei o animal com aquele nome, dou um . residents para entrar nos residentes
    .residents.every((resident) => resident.age >= age);// compara os residentes um por um e vê se todos tem a idade mínima
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName // como aqui no parametro do employeeName pode jogar só o nome ou só o sobrenome, por isso o ou
  ));
}

// Requisito 4
function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith }; // como queremos juntas os dados lá de cima, criou uma constante empregado que junta os dois dados 
  return employee;
}

// Requisito 5
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));// ver se algum empregado tem um manager que inclui o id passado de parametro
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {// começou com o parametro com [], porque deixa como padrão caso, não coloquem nada em managers ou responsiblefor
  const EmployeeAdd = {// Usou Object Property Shorthand ensinado em aula para não repetir os parametros de novo
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(EmployeeAdd);// adicionou o novo empregado no employees
}

// Requisito 7
function countAnimals(specie) {
  if (!specie) {// não passou parametro
    return species.reduce((acc, curr) => {// cada animal
      acc[curr.name] = curr.residents.length;// acc vai guardar nele o current.name ou seja o nome do animal e também a quantidade de animais
      return acc;
    }, {});// começa com {} o acc porque queremos que fique dentro de um objeto
  }
  return species.find((animal) => animal.name === specie).residents.length;// encontra o animal que foi passado no parametro acima, e depois ve a quantidade que tem dentro de residents, como todos os residentes( que são objetos) estão dentro de um array, da para fazer o . length que cada objeto, vira uma posição  
}

// Requisito 8
function calculateEntry(entrants) {
// if (!entrants) {
// return 0;
}
// const { Adult = 0, Child = 0, Senior = 0 } = entrants;
// const priceTotal = (Adult * data.prices.Adult)
// + (Child * data.prices.Child)
// + (Senior * data.prices.Senior);
// return priceTotal;
// }

// console.log(calculateEntry())

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10
// function checarParametro(arrayEntries) {
//   return arrayEntries.reduce((acc, curr) => {
//   if (curr[1].open === 0 && curr[1].close === 0) {
//   acc[curr[0]] = 'CLOSED';
//   return acc;
//   }
//   acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
//   return acc;
//   }, {});
//   }

function getSchedule(dayName) {
//   const arrayEntries = Object.entries(data.hours);
//   if (dayName === undefined) return checarParametro(arrayEntries);
//   const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);
//   const object = {};
//   if (dayName === 'Monday') {
//   object[day[0]] = 'CLOSED';
//   return object;
}
//   object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
//   return object;
//   }

// Requisito 11
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

// Requisito 12
function increasePrices(percentage) {
//   prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;
//   prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
//   prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
}

// Requisito 13
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
