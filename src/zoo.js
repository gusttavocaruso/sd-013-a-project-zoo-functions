const { species, employees, prices } = require('./data');
const data = require('./data');

// Todos os requisitos fizemos um estudo em grupo, todos tentando dar a opnião sobre o código
// Requisito 1
function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids.map((id) => species.find((specie) => specie.id === id));
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
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // começou com o parametro com [], porque deixa como padrão caso, não coloquem nada em managers ou responsiblefor
  const EmployeeAdd = { // Usou Object Property Shorthand ensinado em aula para não repetir os parametros de novo
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(EmployeeAdd);// adicionou o novo empregado no employees
}

// Requisito 7 Ajuda Luiza
function countAnimals(specie) {
  if (!specie) { // não passou parametro
    return species.reduce((acc, curr) => { // cada animal
      acc[curr.name] = curr.residents.length;// acc vai guardar nele o current.name ou seja o nome do animal e também a quantidade de animais
      return acc;
    }, {});// começa com {} o acc porque queremos que fique dentro de um objeto
  }
  return species.find((animal) => animal.name === specie).residents.length;// encontra o animal que foi passado no parametro acima, e depois ve a quantidade que tem dentro de residents, como todos os residentes( que são objetos) estão dentro de um array, da para fazer o . length que cada objeto, vira uma posição
}

// Requisito 8
function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceTotal = (Adult * data.prices.Adult)// quantidade de adultos multiplicado pelo valor
+ (Child * data.prices.Child)
+ (Senior * data.prices.Senior);
  return priceTotal;
}

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10 Ajuda Julia, Isa, Carol, Lanai e Pedro
function checarParametro(arrayEntries) {
  return arrayEntries.reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) { // { open: 8, close: 18 }- é toda essa parte aqui
      acc[curr[0]] = 'CLOSED';// curr 0 é o dia da semana virá segunda que é o unico que entra nessa condição acima
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;// aqui virão os outros dia da semana, -12 porque está em am e pm
    return acc;
  }, {});
}

function getSchedule(dayName) {
  const arrayEntries = Object.entries(data.hours);// vai pegar chave e valor e colocar num array
  if (dayName === undefined) return checarParametro(arrayEntries);// sobe para a função de cima
  const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);// vai olhar dia por dia até achar o dia do day name, exemplo se for sexta daí retorna assim :[Friday, {open:10, close:20}]
  const object = {};
  if (dayName === 'Monday') {
    object[day[0]] = 'CLOSED';
    return object;
  }
  object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;// o indice 0 desse day é o dia da semana , daí estamos dizendo para o objeto que estamos add essa chave e valor
  return object;
}

// Requisito 11 Ajuda da Julia
function getOldestFromFirstSpecies(id) {
  const employee1 = employees.find((employee) => employee.id === id);// ver qual empregado tem o id igual do parametro
  const animalId = employee1.responsibleFor[0];// pega esse empregado e o indice[0] para pegar o id do 1 animal que ele é responsável
  const FamilyResidents = species.find((specie) => specie.id === animalId).residents;// vai em especies e ve qual id da especie bate com o id do animal, dá um . residents para puxar os 4 animais daquela espécie
  const OldestAnimal = FamilyResidents.sort((a, b) => b.age - a.age)[0];// um sorte em ordem decrescente para pegar deixar do animal mais velho para o mais novo, pega na posição [0] que já será o mais velho
  return Object.values(OldestAnimal);
// depois como quero só o valor, uso object.values porque está vindo assim:
// {
//   name: 'Zena',
//   sex: 'female',
//   age: 12,
// },
// ficando só ['Zena', 'female', 12]
}

// Requisito 12 // link da thread no slack https://trybecourse.slack.com/archives/C017W4EDD4K/p1602438914147800
function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100))) * 100) / 100;// multiplica por 100 para arredondar a casa dos centavos e depois divide por 100 para chegar na resposta
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100))) * 100) / 100;
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
