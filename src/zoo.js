const { species, employees, hours, prices } = require('./data');// Atualizo o require com os arrays que quero obter do arquivo data.

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, idade) {
  return species.filter(({ name }) => name === animal)[0].residents
    .every(({ age }) => age >= idade);
}

function getEmployeeByName(string) {
  if (string === undefined) {
    return {};
  }
  return employees
    .filter(({ firstName, lastName }) => firstName === string || lastName === string)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(cod) {
  const gerenteSim = employees
    .filter(({ managers }) => managers
      .some((manager) => manager === cod));
  return (gerenteSim.length >= 1);
  // return gerenteSim;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = ({ id, firstName, lastName });
  const associatedWith = ({ managers, responsibleFor });
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(especie) {
  if (!especie) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find(({ name }) => name === especie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce((accumulator, key) =>
    accumulator + prices[key] * entrants[key], 0);
}

// INICIO DA QUESTÃO 9
const zooMap = () => species.reduce((acc, { location }) => {
  acc[location] = [];
  return acc;
}, {});

// console.log(zooMap());

function possuiIncludeNames(options = {}) {
  const mapa = zooMap(); // mapa é igual ao objeto cujas chaves são a localização e os valores de cada chave são um array vazio.
  species.forEach(({ name, location, residents }) => {
    const filtradosPorSexo = residents.filter(({ sex }) => sex === options.sex); // Aqui está sendo retornado em cada iteração, um array com os animais de cada espécie, filtrando apenas os animais que possuem o sexo passado na chave 'sex' do parâmetro-objeto 'options'.
    const nomeDosFiltrados = filtradosPorSexo.map((animalUnico) => animalUnico.name); // Aqui está sendo retornado um array com o valor da propriedade 'name' de cada animal filtrado na funcao 'filtradosPorSexo'.
    let nomeDosAnimais = residents.map((animalUnico) => animalUnico.name); // Aqui está sendo retornado um array com o nome de todos individuos de uma espécie, para cada vez que o forEach passa pelo array 'species'
    // console.log(filtradosPorSexo);
    // console.log(nomeDosFiltrados);
    // console.log(nomeDosAnimais);

    if (options.sex) nomeDosAnimais = nomeDosFiltrados; // Se existe algum valor para a chave 'sex' do objeto Options o array nomeDosAnimais passa a ser igual ao array nomeDosFiltrados.
    // console.log(nomeDosAnimais);

    if (options.sorted) nomeDosAnimais.sort(); // Se o valor da propriedade 'sorted' do objeto 'options' é 'true', então o array nomeDosAnimais será ordenado alfabeticamente.
    mapa[location].push({ [name]: nomeDosAnimais }); // Agora monto o objeto mapa, a ser retornado, de forma que cada chave é uma localização, e o valor do array de cada chave, sofrerá um incremento com um objeto cuja única chave é o valor da chave 'name' de cada espécie iterada pelo forEach, e o seu valor é o array 'nomeDosAnimais' filtrado.
  });
  return mapa;
}

function naoPossuiIncludeNames() {
  const mapa = zooMap(); // mapa é igual ao objeto cujas chaves são a localização e os valores de cada chave são um array vazio.
  species.forEach(({ name, location }) => mapa[location].push(name)); // para cada esécie do array 'species' pego o objeto 'mapa', e nem cada chave que eu passar a iteração do forEach (que possui um array vazio como valor), eu atribuo o valor de .name passado como parâmetro no forEach
  return mapa;
}

function getAnimalMap(options = {}) {
  if (!options.includeNames) {
    return naoPossuiIncludeNames();
  } return possuiIncludeNames(options);
}

// console.log(getAnimalMap());

// FIM DA QUESTÃO 9

const horarioSemanal = () => {
  const cronogramaCompleto = {};
  const dias = Object.entries(hours);

  dias.forEach((dia) => {
    if (dia[1].open === 0) {
      cronogramaCompleto[dia[0]] = 'CLOSED';
    } else {
      cronogramaCompleto[dia[0]] = `Open from ${dia[1].open}am until ${dia[1].close}pm`;
    }
  });
  return cronogramaCompleto;
};

const horarioDiario = (nomeDoDia) => {
  const diaInfo = Object.entries(horarioSemanal());
  const infoDoDia = diaInfo.find((dia) => dia[0] === nomeDoDia);
  const cronogramaDoDia = { [nomeDoDia]: infoDoDia[1] };
  return cronogramaDoDia;
};

function getSchedule(dayName) {
  if (!dayName) {
    return horarioSemanal();
  } return horarioDiario(dayName);
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
