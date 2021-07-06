const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return data.species.filter((specie, i) => specie.id === ids[i]);
}

// Negativo o parametro para ele retornar um array vazio.
// Filtro os elementos que possuem id igual ao numero passado no parâmetro.

function getAnimalsOlderThan(animal, age) {
  const residentsSpecie = data.species.find((specie) => specie.name === animal).residents;
  return residentsSpecie.every((resident) => resident.age > age);
}

// Eu quero que retorne a chave residents do primeiro animal dado como parâmetro (por isso o find).
// Comparo as idades de todos os residentes daquela espécie com a idade mínima dada como parmâmetro.

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

// Negativo o parâmetro para ele retornar um array vazio.
// Retorno o primeiro objeto que consta o nome ou sobrenome passados como para

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// Utilização de spread.

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.includes(id));
}

// Com o includes, estou analisando se o meu array (managers) contém o parametro solicitado (id).

function addEmployee(idP, firstNameP, lastNameP, managersP = [], responsibleForP = []) {
  const personAdd = {
    id: idP,
    firstName: firstNameP,
    lastName: lastNameP,
    managers: managersP,
    responsibleFor: responsibleForP,
  };
  employees.push(personAdd);
}

// O requisito pede para que retorne arrays vazios em managers e resposibleFor caso não sejam passados como parâmetros.

function countAnimals(species) {
  if (!species) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

// Levei bastante tempo neste requisito. Tentei primeiro usar o map, mas como retornava um array usei o forEach (também por ser mais genérico).
// Na primeira parte, não existindo parâmetros é criado um novo objeto vazio, que recebe o nome da espécie e sua quantidade em cada iteração do forEach.
// Na segunda parte, para cada espécie dada como parâmetro o find percorre o objeto até encontrar o primeiro elemento, e retorna a quantidade daquela espécie.

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceAdult = (Adult * data.prices.Adult);
  const priceChild = (Child * data.prices.Child);
  const priceSenior = (Senior * data.prices.Senior);
  return priceAdult + priceChild + priceSenior;
}

// Na primeira parte conclui os dois primeiros requisitos, se o parâmetro for vazio ou igual a um objeto vazio, retorna 0;
// Depois fiz o destructing e igualei cada elemento a 0, para que quando não for dado um elemento como parâmetro possa ser feita a multiplicação depois (se não, o resultado é NaN);
// A multiplicação de cada número de adultos, crianças e senhores dado no paraêmtro, pelo valor do ingresso de cada faixa etária;

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const dayAndHour = Object.entries(data.hours);
  if (dayName) {
    const newSchedule = dayAndHour.find(([day]) => day === dayName);
    const [day, { open, close }] = newSchedule;
    if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
    return { [day]: `Open from ${open}am until ${close - 12}pm` };
  }
  return dayAndHour.reduce((acc, [day, { open, close }]) => {
    acc[day] = `Open from ${open}am until ${close - 12}pm`;
    if (day === 'Monday') acc[day] = 'CLOSED';
    return acc;
  }, {});
}

// Requisito que eu mais levei tempo. Fiz muita pesquisa no slack e contei com a ajuda do código https://github.com/tryber/sd-011-project-zoo-functions/pull/100/commits/9008a2ce8f18e7007beae92fd8e48fe3d3ff101f
// Criei um array com as chaves (os dias) e valores (horários de abertura e fechamento), percorri um find nesse array comparando o dia passado como parâmetro com as chaves;
// Para cada iteração ele retorna a chave (day) com a frase contida na linha 102;
// Caso o dia passado como parâmetro seja 'Monday' ele teroan 'CLOSED', como descrito na linha 101;
// Tentei por bastante tempo fazer a primeira parte do código, mas sem o destructuring na linha 100, desta forma não conseguia puxar os valores de 'open' e 'close' na linha 102;
// Na segunda parte fiz um reduce no array das chaves e valores de data.hours, que recebeu como parâmetros o acumulador, e o valor atual para cada iteração (dia, open e close);
// Retorna o acumulador contendo o dia se ele for diferente de Monday, com a frase contida na linha 105;
// Se o dia for igual a segunda, retorna o acumulador contendo este dia com o valor Closed;

function getOldestFromFirstSpecies(id) {
  const findSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findFirstAnimal = data.species.find((specie) => specie.id === findSpecie).residents;
  const ageAnimal = findFirstAnimal.sort((a, b) => b.age - a.age)[0];
  return Object.values(ageAnimal);
}

// Utilizei primeiro o find para encontrar a primeira especie que o funcionário era responsável, através do id passado como parametro;
// Utilizei mais uma vez o find para retornar o grupo de animais que faziam parte daquela espécie;
// Dentro do grupo de animais, coloquei em ordem decrescente os animais por idade e peguei o primeiro elemento;
// Retornei apenas os valores do objeto anteior.

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = (
      Math.round((data.prices[price] + (percentage / 100) * data.prices[price]) * 100) / 100);
  });
  return data.prices;
}

// Demorei para resolver este requisito devido a dois console.log que estavam imprimindo os resultados, quando eu passava eles no lint, os valores apareciam bem maiores lá.
// Acessei as chaves do objeto prices, percorri os valores com o forEach, e em cata iteração fiz o cálculo para o aumento do preço de acordo com o parâmetro dado.
// Para resolver o problema de arredondamento, não utilizei o toFixed por retornar uma string, então preferi pesquisar e encontrei a solução com base no link abaixo:
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

function getEmployeeCoverage(idOrName) {
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
