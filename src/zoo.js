const data = require('./data');
const { hours } = require('./data');

let employeObject = {};
const animalsObject = {};
let objectDays = {}

const getSpeciesByIds = (...ids) => data.species.filter((specie) => ids.includes(specie.id));

function getAnimalsOlderThan(animal, age) {
  let response;
  return data.species.some((specie) => {
    if (specie.name === animal) {
      response = specie.residents.every((resident) => resident.age > age);
    }
    return response;
  });
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
  }
  return data.species.reduce((acc, crr) => {
    if (crr.name === animal) {
      return crr.residents.length;
    }
    return acc;
  }, 0);
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const entries = Object.entries(entrants);
  return entries.reduce((sum, entrie) => {
    return sum + data.prices[entrie[0]] * entrie[1]
  }, 0)
}

const map = (options, specie) => {
  let response = {};
  if (options.sex) {
    response = {
      [specie.name]: specie.residents
        .filter((resident) => resident.sex === options.sex)
        .map((resident) => resident.name),
    };
  } else {
    response = {
      [specie.name]: specie.residents.map((resident) => resident.name),
    };
  }
  if (options.sorted) {
    response[specie.name].sort();
  }
  return response;
};

function getAnimalMap(options) {
  data.species.forEach((specie) => {
    animalsObject[specie.location] = [];
  });
  const regions = Object.keys(animalsObject);
  regions.forEach((region) => {
    animalsObject[region] = data.species
      .filter((specie) => specie.location === region)
      .map((specie) => {
        if (!options || !options.includeNames) {
          return specie.name;
        }
        return map(options, specie);
      });
  });
  return animalsObject;
}

const daySchedule = (day) => {
  if (hours[day].close !== 0 && hours[day].open !== 0) {
    objectDays[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  } else {
    objectDays[day] = 'CLOSED';
  }
};

function getSchedule(dayName) {
  if (dayName === undefined) {
    const days = Object.keys(hours);
    days.forEach((day) => {
      daySchedule(day);
    })
  }
  else {
    objectDays = {}
    daySchedule(dayName)
  }
  return objectDays;
}

function getOldestFromFirstSpecies(idEmployee) {
  // seu código aqui
  const animalID = data.employees.find((employee) => idEmployee === employee.id).responsibleFor[0];
  const { residents } = data.species.find((specie) => specie.id === animalID);
  residents.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    }
    return 0;
  });
  return Object.values(residents[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const aux = Number(`1.${percentage}`);
  const priceKeys = Object.keys(data.prices);
  priceKeys.forEach((key) => {
    data.prices[key] = Math.round(((data.prices[key] * aux)) * 100) / 100;
  });
}

const verifyEmployee = (empregado) => {
  employeObject[`${empregado.firstName} ${empregado.lastName}`] = []; // Crio uma chave com nome e sobrenome e atribuo um array vazio como valor
  empregado.responsibleFor.forEach((animalId) => { // Percorro o array de animais pelos quais o empregado é responsável
    const animalName = data.species.find((specie) => specie.id === animalId).name; // Percorro as espécies e procuro aquela que tem o id igual ao id do animal pelo qual o funcionário é encarregado
    employeObject[`${empregado.firstName} ${empregado.lastName}`].push(animalName); // Jogo o nome desse animal no array vazio declarado anteriormente
  });
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) { // Se a função não receber parâmetros
    data.employees.forEach((employee) => { // Percorro cada empregado
      verifyEmployee(employee);
    });
  } else { // se a função receber parametro
    let empregado; // defino uma var que irá guardar o objeto com as infos do empregado desejado
    data.employees.forEach((employee) => { // percorro o array que contém todos os empregados
      const values = Object.values(employee); // pego as os valores do objeto de cada empregado
      if (values.includes(idOrName)) { // verifico se nesse array vazio contém alguma das chaves passadas por parâmetro
        empregado = employee; // minha var empregado recebe o objeto do empregado com o qual eu quero trabalhar
      }
    });
    employeObject = {}; // reatribuo o valor do array que vou usar na função verifyEmployee para vazio
    verifyEmployee(empregado);
  }
  return employeObject;
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
