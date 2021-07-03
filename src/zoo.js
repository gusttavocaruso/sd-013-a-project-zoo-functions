const data = require('./data');

/*
...ids: ao usarmos o spread, permite que se passe multiplos parametros
        e nos permite manipula-los como arrays.
*/
// getSpeciesByIds('dsdas', 'dasdasd', '321')
function getSpeciesByIds(...ids) { // no parametro estou dando um spread operator no parametro pois ele recebe multiplos parametros e deixa eles guardados em arrays.
  const speciesEncontradasParaTodosIds = []; // criei um array vazio pois vou precisar percorrer os ids

  ids.forEach((id) => { // dei um forEach nos ids pois preciso percorrer o array de ids e cada elemento percorrido esta representado pelo id.
    const specieEncontradaParaCadaId = data.species.filter((specie) => specie.id === id); // estou filtrando as species com o filter, e verificando se o id da species é igual ao id passado no forEach.

    speciesEncontradasParaTodosIds.push(...specieEncontradaParaCadaId); // peguei a variavel speciesEncontradasParaTodosIds que era um array vazio e dei um push do que foi filtrado pelo filter. Usei o spread operator para tirar os elementos de dentro dos arrays criados no parametro ids. ficando desta forma somente um array com os elementos espalhados dentro.
  });

  return speciesEncontradasParaTodosIds; // retornei a variavel speciesEncontradasParaTodosIds
}

function getAnimalsOlderThan(animal, age) { // a funcao a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  const specieQueQuero = data.species.find((specie) => specie.name === animal); // criei uma constante specieQueQuero e atribui a ela a const data.species.find(). Usei o find para procurar se o nome do animal é igual ao animal passado como parametro.

  return specieQueQuero.residents.every((resident) => resident.age >= age); // retornei a constante specieQueQuero.residents.every() para ver se dentro de residents TODOS os resident.age possuem idade igual ou maior a age passada como parametro. Lembrando que o every retorna um valor booleano.
}

function getEmployeeByName(employeeName) { // a questao diz que a funcao é responsavel pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
  // o que usar? usar find ou filter
  // onde vamos usar? data.employees
  if (!employeeName) { // se nao existir um parametro dentro da funcao, retorno um objeto vazio.
    return {}; // retornando o objeto vazio
  }

  const employee = data.employees.find((e) => ( // criei uma constante employee que recebe data.employees.find(). Escolhi o find pois iremos retornar o objeto do funcionario. find retorna o elemento em si e retorna o primeiro que passar pela sua condicao.
    e.firstName === employeeName || e.lastName === employeeName // a condicao é que se o e.firstname for igual ao parametro passado ou e.lastname for igual ao parametro passado, retorne a constante employee.
  ));

  return employee; // retornando a constante employee.
}

function createEmployee(personalInfo, associatedWith) { // a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o.
  // nem tudo é filter/map/find/reduce, essas coisas usamos com arrays.
  const newEmployee = { // criei a constante newEmployee e atribui a ela um objeto com os dados que serao passados nos parametros.
    ...personalInfo, // escolhi o spread operator para espalhar dentro desse novo objeto os dados que serao passados. A chave do objeto e do parametro sao iguais, por isso ela so aparece uma vez.
    ...associatedWith,
  };

  return newEmployee; // retornando o objeto criado com os dados do novo empregado.
}

function isManager(id) {
  // Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  const idsDeTodosManagers = []; // criei uma constante recebendo um array vazio.

  data.employees.forEach((e) => { // chamei data.employees.forEach() para percorrer o array de objetos.
    idsDeTodosManagers.push(...e.managers); // dei um push na constante idsDeTodosManagers passando dentro do push o e.manegers. usei o spread operator para que nao ficasse um array dentro de outro array.
  });

  return idsDeTodosManagers.includes(id); // retornando idsDeTodosManagers.includes() com o parametro id dentro pois o includes retorna valores booleanos e ele irá ver se dentro da constante existe esse id.
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // no teste aparece que quando manager e resposibleFor nao tiverem valores, retornar um array vazio. Por isso já determinamos nos parametros.
  const funcionario = { // a questao pede para que adicione um funcionario no final do array de employees. criei uma variavel com um objeto vazio, dado os employee serem objetos.
    id, // adicionei os parametros passados na funcao para dentro do objeto funcionario. nao repeti a chave e o valor pois quando o parametro é o objeto só adicionamos uma vez.
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(funcionario); // pesquisei o emplooyees por data.employees e adicionei no final da lista com o push.
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceTotal = (Adult * data.prices.Adult)
    + (Child * data.prices.Child)
    + (Senior * data.prices.Senior);
  return priceTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {

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
