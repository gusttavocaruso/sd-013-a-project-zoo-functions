const { prices /* , employees, species */ } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // Se o array de ids estiver vazio, retorna um array vazio.
  if (!ids.length) return [];
  // Array que ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id.
  const arrayOfAnimals = [];
  // Laço forEach que procura o primeiro animal que corresponda ao id da vez, por meio do método .find().
  ids.forEach((id) => {
    const currentAnimal = data.species.find((specie) => specie.id === id);
    // Faz-se um push que é responsável por colocar o animal encontrado na varredura feita pelo laço forEach no arrayOfAnimals.
    arrayOfAnimals.push(currentAnimal);
  });
  return arrayOfAnimals;
}

function getAnimalsOlderThan(animal, age) {
  // Por meio do método .find(), a função procura a primeira espécie que tem o nome igual ao informado como parâmetro.
  const searchAnimals = data.species.find((specie) => specie.name === animal);
  // Então, verifica se todos os animais daquela espécie possuem o atributo age maior do que o informado como parâmetro e retorna a função searchAnimals.
  return searchAnimals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // Se não for informado nenhum empregado, retorna um objeto vazio.
  if (!employeeName) return {};
  // Procura o primeiro empregado que o primeiro OU(||) o último nome correspondam ao informado como parâmetro.
  return data.employees.find((e) => (e.firstName === employeeName) || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Por meio do método spread (...), a função cria um novo colaborador concatenando as informações armazenadas nos parâmetros personalInfo e associatedWith, retornando-as em um novo objeto. FONTE: https://www.luiztools.com.br/post/4-segredos-do-operador-spread-em-javascript/
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // A função, por meio do método .some(), verifica se algum dos empregados possue o id informado como manager. Em caso positivo, retorna TRUE e, caso contrário, FALSE. FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // Tendo em vista que o test addEmployee.test.js informa que espera receber um array vazio tanto de managers quanto de responsibleFor, passamos como parâmetro da função esses dois elementos como arrays vazios.
  // Assim, declaramos uma constante lastEmployee que recebe um objeto contendo as chaves necessárias e, por fim, efetuamos um push das informações de lastEmployee para o arquivo data.js.
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(lastEmployee);
}

function countAnimals(species) {
  // Caso não seja informada espécie, retorna todos os animais do Zoo.
  if (!species) {
    // Para tanto, criamos um objeto vazio que será populado com as informações do laço forEach, retornando com todos esses animais.
    const everyAnimalInTheZoo = {};
    // Por meio do laço forEach, populamos o objeto vazio declarado anteriormente com a chave que contém o nome da espécie e, também, o valor correspondente ao número desses habitantes no Zoo.
    data.species.forEach((specie) => {
      everyAnimalInTheZoo[specie.name] = specie.residents.length;
    });
    return everyAnimalInTheZoo;
  }
  // Agora, declaramos uma nova constante que, procura pela espécie informada como parâmetro para a função e, por fim, retornamos essa espécie com a informação de quantos animais dessa mesma espécie vivem no Zoo, utilizando o método .length.
  const indicatedAnimal = data.species.find((specie) => specie.name === species);
  return indicatedAnimal.residents.length;
}

function calculateEntry(entrants) {
  // Questão resolvida com ajuda do coléga Reinaldo Paixão.
  // Se entrants for undefined ou um objeto vazio, retorna 0.
  if (!entrants || entrants === {}) return 0;
  // Utilizando o Object.keys, acessamos as propriedades do objeto entrants e, por meio do método .reduce(), varremos o parâmetro passado para que, entrants, na posição currentValue (ou seja currentValue corresponderá ao valor de 2, quando, por exemplo, estiver na posição da chave Adult; 3, quando estiver na posição da chave Child e 1, quando estiver na posição da chave Senior), seja multiplicado pelo valor de prices, também na posição currentValue (Ou seja, seguindo a mesma lógica de currentValue que já foi explicada, prices corresponderá ao valor que currentValue estiver analisando naquela posição específica, dentro do arquivo data.js).
  return Object.keys(entrants)
    .reduce((accumulator, currentValue) =>
      accumulator + (entrants[currentValue] * prices[currentValue]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // Primeiro, declaramos uma constante e atribuímos à ela, utilizando o operador spread (...), um objeto para termos acesso às propriedades de data.hours e, assim, podermos trabalhar com esses dados.
  const schedule = { ...data.hours };
  // Em seguida, utilizamos o Object.entries, passando como parâmetro a constante que acabamos de declarar e, por meio de um laço forEach, percorreremos cada elemento do objeto schedule para que, no final, possamos reproduzir a mensagem que desejarmos. Nesse caso, o retorno esperado no arquivo de testes.
  Object.entries(schedule).forEach((day) => {
    schedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    // Porém, se schedule na posição do laço.open, for igual a laço.close, retorna a mensagem de CLOSED, conforme esperado pelo teste.
    if (day[1].open === day[1].close) {
      schedule[day[0]] = 'CLOSED';
    }
  });
  // Por fim, retornamos a função, passando um operador condicional (?) FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  return (dayName !== undefined) ? { [dayName]: schedule[dayName] } : schedule;
}

function getOldestFromFirstSpecies(id) {
  // Questão resolvida com ajuda do coléga Reinaldo Paixão.
  // Busca o funcionário informado
  const funcionario = data.employees.find((employee) => employee.id === id);
  // Busca a especie informada, referente ao id do funcionário que é responsável por aquela especie.
  const especie = data.species.find((specie) => specie.id === funcionario.responsibleFor[0]);
  // Ordena os animais por idade.
  const maisVelho = especie.residents.sort((a, b) => b.age - a.age);
  // Retorna o valor das chaves do animal mais velho.
  return Object.values(maisVelho[0]);
}

function increasePrices(percentage) {
  // Questão resolvida com ajuda do coléga Reinaldo Paixão.
  // Por meio do Object.keys(), acessamos as propriedades do objeto prices e, então, utilizando um forEach para varrer as chaves e valores do objeto. Assim, prices, na posição value, é multiplicado por 1,2, por exemplo e, para que o resultado final seja arredondado e não quebre, utilizamos o método Math.round().
  Object.keys(prices).forEach((value) => {
    prices[value] = Math.round((prices[value] * (percentage / 100 + 1)) * 100) / 100;
  });
}

/* Primeiramente, criamos uma constante e atribuímos à ela um objeto vazio (const objOut), que será povoada com os resultados da função .map() que será implementada na sequência. Também declaramos uma variável que receberá o valor de cada chave referente aos empregados do Zoo (let value).
Assim, para acessarmos os dados dos empregados e montarmos um novo objeto que listrá todos eles e os animais que cada um é responsável, utilizamos um laço forEach (data.employees.forEach() => {})
Agora, informamos para a função que, caso não seja passado nenhum valor como parâmetro, retorna o valor de objOut. Caso seja informado, segue para execução da próxima função.
Por tanto, para acharmos o empregado, independente dos parâmetros que forem passados, declaramos uma constante findEmployee que, por meio de um .find(), busca no arquivo data.js pelo id, ou firstName, ou ainda pelo lastName do funcionário. Na sequência, definimos uma constante e atribuímos a ela uma string, contendo o nome completo do empregado encontrado anteriormente e, ainda, declaramos mais uma constante (animals) e atribuímos à ela o valor da chave employee.
Por fim, declaramos a constante arrayOfEmployeesAndAnimals, que inicialmente é atribuida com um objeto vazio que, mais tarde, irá retornar com um par, chave e valor, contendo o nome e sobrenome do empregado, bem como os respectivos animais pelos quais é responsável e retornamos o resultado.
*/
function getEmployeeCoverage(idOrName) { // Ques†ão resolvida com a ajuda do amigo Vinícius Dionysio.
  const objOut = {};
  let value;
  data.employees.forEach((item) => {
    // O item passado como parâmetro, a cada varredura, será equivalente a um empregado diferente. E, para cada empregado, estamos acessando diretamente o array responsibleFor, atribuindo o valor à variável value.
    value = item.responsibleFor
    // Nesse array, aplicamos um .map() para termos como retorno apenas um array com os nomes das espécies, sendo que como função callback do map utilizamos o .find(), a partir das espécies.
      .map((idAnimal) => data.species.find((specie) => specie.id === idAnimal).name);
    objOut[`${item.firstName} ${item.lastName}`] = value;
  });
  if (!idOrName) return objOut;
  const findEmployee = data.employees.find((employee) =>
    employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
  const employee = `${findEmployee.firstName} ${findEmployee.lastName}`;
  const animals = objOut[employee];
  const arrayOfEmployeesAndAnimals = {};
  arrayOfEmployeesAndAnimals[employee] = animals;
  return arrayOfEmployeesAndAnimals;
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
