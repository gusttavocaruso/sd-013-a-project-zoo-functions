const { species } = require('./data');
const data = require('./data');

// ==========================================================================================================
// Requisito 1
// ==========================================================================================================
function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// ==========================================================================================================
// Requisito 2
// ==========================================================================================================
function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find(({ name }) => name === animal);

  const trueOrFalse = specie.residents.every((resident) => resident.age >= age);

  return trueOrFalse;
}

// ==========================================================================================================
// Requisito 3
// ==========================================================================================================
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((ob) => ob.firstName === employeeName || ob.lastName === employeeName);
}

// ==========================================================================================================
// Requisito 4
// ==========================================================================================================
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

// ==========================================================================================================
// Requisito 5 - Feito com ajuda de Pedro Delicoli
// ==========================================================================================================
function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

// ==========================================================================================================
// Requisito 6
// ==========================================================================================================
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const object = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(object);
}

// ==========================================================================================================
// Requisito 7
// ==========================================================================================================
function countAnimals(speciesAnimals) {
  if (speciesAnimals === undefined) {
    return data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }

  return data.species.find((specie) => specie.name === speciesAnimals).residents.length;
}

// ==========================================================================================================
// Requisito 8
// ==========================================================================================================
function calculateEntry(entrants) {
  if (entrants === undefined) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  const priceTotal = (Adult * data.prices.Adult) + (Child * data.prices.Child)
  + (Senior * data.prices.Senior);

  return priceTotal;
}

// ==========================================================================================================
// Requisito 9 - Requisito resolvido assistindo ao vídeo do Oliva nesse link: https://trybecourse.slack.com/archives/C016CCMKN9E/p1598393557448900?thread_ts=1597773758.316400&cid=C016CCMKN9E
// ==========================================================================================================

// Função que retorna um array com todas as pontos cardeais e colaterais, o qual será percorrido depois.
function getLocations() {
  return ['N', 'S', 'E', 'W', 'NW', 'NE', 'SE', 'SW'];
}

// função que será usada para aplicar o filtro das localizações e será chamada nas demais funções.
function retrieveFilteredAnimalsByLocation(location) {
  return species.filter((specie) => specie.location === location);
}

// Função que é chamada quando o parâmetro da função principal, getAnimalMap, é undefined (não tem parâmetro).
// A função usa o forEach para percorrer o Array getLocations (pontos cardeais) e acessar cada ponto cardeal (cada elemento do array);
// Depois de acessar cada elemento do array, a função usa um filtro em "data.species" pra filtrar os objetos que tem a localização igual ao elemento do array;
// O filter vai retornar um array com os objetos filtrados. Então usa-se um map para percorrer cada objeto filtrado e retornar um array com o nome das species.
// O if é usado para, caso o array seja vazio, não retorná-lo (o array é vazio quando o filter não ache nenhum elemento que respeite a regra de negócio)
// Se não for vazio, ele adiciona no modelo chave/valor ao objeto criado vazio.
function getAnimalsPerLocation(locations) {
  const animalsPerLocation = {};

  locations.forEach((location) => {
    const filterSpecies = retrieveFilteredAnimalsByLocation(location).map((obj) => obj.name);
    if (filterSpecies.length !== 0) animalsPerLocation[location] = filterSpecies;
  });

  return animalsPerLocation;
}

// função que filtra por sexo:
function getSpeciesBySex(obj, sex) {
  return obj.residents.filter((resident) => {
    const needFiltering = sex !== undefined;
    return needFiltering ? resident.sex === sex : true; // se não precisa de filtro, retorna true e ele não filtra.
  })
    .map((objResidents) => objResidents.name);
}

// Subrrequisito 2 => Com a opção `includeNames: true` especificada, retorna nomes de animais
// A lógica é mais ou menos como a anterior, porém o map retorna um array de objetos e esse array de objetos é adicionado como valor do objeto maior (animalsPerLocation) => as chaves são as localizações
function getAnimalsPerLocationWithName(locations, sorted, sex) {
  const animalsPerLocation = {};

  locations.forEach((location) => {
    const filterSpecies = retrieveFilteredAnimalsByLocation(location).map((obj) => {
      const specieName = obj.name;
      const residents = getSpeciesBySex(obj, sex);
      if (sorted) residents.sort();
      return { [specieName]: residents };
    });
    if (filterSpecies.length !== 0) animalsPerLocation[location] = filterSpecies;
  });

  return animalsPerLocation;
}

function getAnimalMap(options) {
  const locations = getLocations();

  if (!options) return getAnimalsPerLocation(locations);

  const { includeNames = false, sorted = false, sex } = options; // o default tem que ser falso, para caso ele não for passado. Se não colocar isso, ele retorna undefined e o if pode não funcionar.

  if (includeNames) {
    return getAnimalsPerLocationWithName(locations, sorted, sex);
  }
  return getAnimalsPerLocation(locations);
}

// ==========================================================================================================
// Requisito 10
// ==========================================================================================================

function checarParametro(arrayEntries) {
  return arrayEntries.reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
}

function getSchedule(dayName) {
  const arrayEntries = Object.entries(data.hours);
  if (dayName === undefined) return checarParametro(arrayEntries);
  const day = arrayEntries.find((weekDay) => weekDay[0] === dayName);
  console.log(day);
  const object = {};
  if (dayName === 'Monday') {
    object[day[0]] = 'CLOSED';
    return object;
  }
  object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  return object;
}

// ==========================================================================================================
// Requisito 11
// ==========================================================================================================
function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((employeeObj) => employeeObj.id === id);
  const responsibility = employee.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsibility);
  const olderAge = animal.residents.reduce((acc, resident) => {
    if (resident.age > acc) {
      return resident.age;
    }
    return acc;
  }, 0);
  const oldestAnimal = animal.residents.find((olderAnimal) => olderAnimal.age === olderAge);
  return Object.values(oldestAnimal);
}

// ==========================================================================================================
// Requisito 12
// ==========================================================================================================
function increasePrices(percentage) {
  const priceObj = data.prices;
  const adultPrice = priceObj.Adult + (priceObj.Adult * (percentage / 100));
  const seniorPrice = priceObj.Senior + (priceObj.Senior * (percentage / 100));
  const childPrice = priceObj.Child + (priceObj.Child * (percentage / 100));

  priceObj.Adult = Math.round(adultPrice * 100) / 100;
  priceObj.Senior = Math.round(seniorPrice * 100) / 100;
  priceObj.Child = Math.round(childPrice * 100) / 100;

  return priceObj;
}

// ==========================================================================================================
// Requisito 13
// ==========================================================================================================
function findSpecie(responSpecie) {
  return data.species.find((specie) => specie.id === responSpecie).name;
}

function or(objEm, curr) {
  return objEm.id === curr || objEm.firstName === curr || objEm.lastName === curr;
}

function findEmployee(curr) {
  return data.employees.find((objEm) => or(objEm, curr));
}

function getEmployeeCoverage(idOrName) {
  const objResp = data.employees;
  if (idOrName === undefined) {
    const array = objResp.map((resp) => resp.responsibleFor.map((respSpe) => findSpecie(respSpe)));

    return data.employees.reduce((acc, curr, index) => {
      const name = `${curr.firstName} ${curr.lastName}`;
      acc[name] = array[index];
      return acc;
    }, {});
  }
  return objResp.reduce((acc, curr) => {
    const employee = findEmployee(idOrName);
    const name = `${employee.firstName} ${employee.lastName}`;
    const arraySpec = employee.responsibleFor.map((respSpe) => findSpecie(respSpe));
    acc[name] = arraySpec;
    return acc;
  }, {});
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
