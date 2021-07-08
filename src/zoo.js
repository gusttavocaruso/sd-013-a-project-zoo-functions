const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((especies) => ids.some((id) => id === especies.id));
}

function getAnimalsOlderThan(animal, idade) {
  const animalVar = data.species.find((elemento) => elemento.name === animal);
  return animalVar.residents.every((element) => element.age >= idade);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  if ((data.employees.some((name) => name.firstName === employeeName)) === false) {
    return data.employees.find((nameFun) => nameFun.lastName === employeeName);
  }
  if (data.employees.some((name) => name.lastName === employeeName) === false) {
    return data.employees.find((nameFun) => nameFun.firstName === employeeName);
  }
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const verifyManager = data.employees
    .some(({ managers }) => managers.some((manager) => manager === id));
  return verifyManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  const animais = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});

  if (!animal) {
    return animais;
  }
  return animais[animal];
}

function calculateEntry(entrants = 0) {
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChildPrice, Senior: SeniorPrice, Adult: AdultPrice } = data.prices;
  const total = (ChildPrice * Child) + (SeniorPrice * Senior) + (AdultPrice * Adult);
  return total;
}

function createMapAnimal(option, points) {
  return points.map((point) => ([
    point,
    data.species.filter((specie) => specie.location === point)
      .map((value) => {
        const resident = value.residents.map((val) => val.name);
        if (option === 'optionsNo') return value.name;
        if (option === 'sorted') {
          return ({ [value.name]: resident.sort() });
        }
        return ({ [value.name]: resident });
      }),
  ]));
}

function sexMapAnimal(includeNames, sex, sort, points) {
  if (!includeNames) return createMapAnimal('optionsNo', points);
  return points.map((point) => ([
    point,
    data.species.filter((specie) => specie.location === point)
      .map((value) => {
        const residents = value.residents
          .filter((resident) => resident.sex === sex).map((resident) => resident.name);
        if (!sort) return ({ [value.name]: residents });
        return ({ [value.name]: residents.sort() });
      }),
  ]));
}

function getAnimalMap(options) {
  const points = ['NE', 'NW', 'SE', 'SW'];

  if (!options) return Object.fromEntries(createMapAnimal('optionsNo', points));
  if (options.sex) {
    return Object.fromEntries(
      sexMapAnimal(options.includeNames, options.sex, options.sorted, points),
    );
  }
  if (options.sorted) {
    return Object.fromEntries(createMapAnimal('sorted', points));
  }
  return Object.fromEntries(createMapAnimal('include-names', points));
}

function getSchedule(dayName) {
  const mensagem = ['CLOSED'];
  const dias = Object.keys(hours);
  dias.slice(0, -1).forEach((elem, i) => (
    mensagem.push(`Open from ${hours[dias[i]].open}am until ${hours[dias[i]].close - 12}pm`)));
  mensagem.push(mensagem.shift());

  const sche = Object.assign(...dias.map((chave, index) => ({ [chave]: mensagem[index] })));
  if (!dayName) return sche;
  const dia = Object.entries(sche).find((element) => element[0] === dayName);
  return {
    [dayName]: dia[1],
  };
}

function getOldestFromFirstSpecies(id) {
  const primeiroAnimal = data.employees.find((animal) => animal.id === id).responsibleFor[0];
  const animalMaisVelhor = data.species.find((specie) => specie.id === primeiroAnimal)
    .residents.sort((a, b) => b.age - a.age);
  return [animalMaisVelhor[0].name, animalMaisVelhor[0].sex, animalMaisVelhor[0].age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((value) => {
    data.prices[value] = Math.round(data.prices[value] * ((percentage / 100) + 1) * 100) / 100;
  });
}

const showAnimal = () => {
  const obj = {};
  data.employees.forEach((value) => {
    obj[`${value.firstName} ${value.lastName}`] = [];
    value.responsibleFor.forEach((id) => {
      const lista = data.species.find((specieId) => specieId.id === id);
      obj[`${value.firstName} ${value.lastName}`].push(lista.name);
    });
  });
  return obj;
};

function getEmployeeCoverage(idOrName = 0) {
  if (idOrName === 0) {
    const ret = showAnimal();
    return ret;
  }
  const obj = {};
  const selectEmployee = data.employees.find((value) => value
    .id === idOrName || value
    .lastName === idOrName || value
    .firstName === idOrName);
  obj[`${selectEmployee.firstName} ${selectEmployee.lastName}`] = [];
  selectEmployee.responsibleFor.forEach((id) => {
    const arrAnimais = data.species.find((specieId) => specieId.id === id);
    obj[`${selectEmployee.firstName} ${selectEmployee.lastName}`].push(arrAnimais.name);
  });
  return obj;
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
