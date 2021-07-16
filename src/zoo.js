const { prices, species, hours, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return []; // Se a função for chamada sem parâmetro...
  const speciesReturn = [];
  ids.filter((id) => species.forEach((idSpecies) => {
    if (idSpecies.id === id) speciesReturn.push(idSpecies);
  }));
  return speciesReturn;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const accessSpecies = species;
  const AnimalsAccess = accessSpecies.filter((namesAccess) => namesAccess.name === animal);
  return AnimalsAccess[0].residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const searchEmployee = employees
    .find((name) => (name.firstName === employeeName) || (name.lastName === employeeName));
  return searchEmployee;
  // Usa-se o find, pois deseja-se achar o primeiro correspondente. Com filter não funciona.
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // Percebi que a estrutura desejada, é praticamente a que é passada nos parâmetros.
  // Uma lógica interessante aqui é utilizar o spread operator. Para espalhar os elementos
  // de cada objeto passado como parametro. Conceito mostrado na aula!
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Tentei com find(). Não deu certo pois o mesmo retorna o valor do
  // elemento que passa no teste da função callback.
  // O some() verifica se ALGUM dos elementos passa no teste. Retornando
  // true para caso encontre algum elemento que passou no teste.
  // O includes() é magnífico. Retornando true ou false se o elemento passado
  // pertença ao array ou ao objeto.
  return employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employeeAdd);
}

function countAnimals(speciesAnimal) {
  // seu código aqui
  if (!speciesAnimal) {
    const animalsAll = {};
    species.forEach((animal) => {
      animalsAll[animal.name] = animal.residents.length;
    });
    return animalsAll;
  }
  const allAnimals = species.find((animalItem) => animalItem.name === speciesAnimal);
  return allAnimals.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') return 0;
  // Separar as chaves e valores em um array para poder usá-los individualmente
  const entreRecept = Object.entries(entrants);
  // Percorrer cada item pegando a chave e valor, referenciando a key com a key do prices.
  return entreRecept.reduce((totalPerson, [key, value]) => {
    let totalPrice = totalPerson;
    totalPrice += prices[key] * value;
    return totalPrice;
  }, 0); // É necessário colocar 0 zero aqui, pois o reduce começará a contar do indice 1.
}

//  Requisito 9
// A resolução desta questão tomou como base a resolução do colega Josué Lobo
// Sem a ajuda dele nas questões 10, 11 não seria possível entender o workflow dessa
// questão.
function getAnimalName(animalName, sorted, sex) {
  let result = species.find((animal) => animal.name === animalName);
  result = result.residents;
  if (typeof sex === 'string') {
    result = result.filter((animal) => animal.sex === sex);
  }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort();
  return { [animalName]: result };
}

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  let result = species.reduce((res, specie) => {
    const { name, location } = specie;
    if (typeof res[location] === 'undefined') {
      res[location] = [];
    }
    res[location].push(name);
    return res;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalName]) => {
      acc[key] = animalName.map((name) => getAnimalName(name, sorted, sex));
      return acc;
    }, {});
  }
  return result;
}

// Faz parte do requisito 10.
// Resolução feita graças ao grande Josué Lobo.
const convertHour = (hour) => {
  if (hour > 12) {
    return `${(hour - 12)}pm`;
  }
  return `${hour}am`;
};

const msgConvert = (day, horario) => {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${convertHour(horario[day].open)} until ${convertHour(horario[day].close)}`;
};

function getSchedule(dayName) {
  // seu código aqui
  const objNull = {};
  if (!dayName) {
    Object.keys(hours).forEach((day) => {
      objNull[day] = msgConvert(day, hours);
    });
  } else {
    objNull[dayName] = msgConvert(dayName, hours);
  }
  return objNull;
}

// Resolução feita graças ao grande Josué Lobo.
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcId = employees.find((funcionario) => funcionario.id === id);
  const animalFirst = species.find((animal) => animal.id === funcId.responsibleFor[0]);
  const animalOle = animalFirst.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalOle[0]);
}

// O metodo de arredondar com (decimal*100) / 100
// não é confiável, pois cai nas limitações do JS.
// Agradecendo à Bianca Caetano pela força no desenvolvimento.
function increasePrices(percentage) {
  // Transformar o valor em decimal aplicando porcentágem.
  const valuePercent = ((percentage / 100) + 1);
  // transformar o price em um array com Object.keys
  const pricesKey = Object.keys(prices);
  pricesKey.forEach((key) => {
    const roundValue = (prices[key] * valuePercent);
    prices[key] = Math.round(roundValue * 100) / 100;
  });
  return prices;
}

// Requisito 13
// Feito com base na resolução do Josué Lobo com ajuda do grande Zezé.
const message = (firstName, lastName) => `${firstName} ${lastName}`;

const createObject = (employee) => {
  const person = {};
  const fullName = message(employee.firstName, employee.lastName);
  person[fullName] = [];
  employee.responsibleFor.forEach((source) => {
    const { name } = species.find(({ id }) => id === source);
    person[fullName].push(name);
  });
  return person;
};

const findById = (id) => {
  const find = employees.find((employee) => employee.id === id);
  return createObject(find);
};

const findByName = (name) => {
  const find = employees.find(({ firstName, lastName }) => firstName === name
    || lastName === name);
  return createObject(find);
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (typeof idOrName === 'undefined') {
    const person = {};
    employees.forEach((employee) => {
      Object.assign(person, createObject(employee));
    });
    return person;
  }
  if (idOrName.length > 25) return findById(idOrName);
  return findByName(idOrName);
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
