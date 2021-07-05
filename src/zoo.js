const { employees, species, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((especies) => ids.some((id) => id === especies.id));
}

function getAnimalsOlderThan(animal, idade) {
  const animalVar = data.species.find((elemento) => elemento.name === animal);
  return animalVar.residents.every((element) => element.age >= idade);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {}
  if ((employees.some((name) => name.firstName === employeeName)) === false) {
    return employees.find((nameFun) => nameFun.lastName === employeeName);
  }
  else if (employees.some((name) => name.lastName === employeeName) === false) {
    return employees.find((nameFun) => nameFun.firstName === employeeName);
  }
}

function createEmployee({id, firstName, lastName}, {managers ,responsibleFor}) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
}

function isManager(id) {
  const verifyManager = employees.some(({managers}) => managers.some((manager) => manager === id));
  return verifyManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  })
}

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    return {
      "bears": 3,
      "elephants": 4,
      "frogs": 2,
      "giraffes": 6,
      "lions": 4,
      "otters": 4,
      "penguins": 4,
      "snakes": 2,
      "tigers": 2,
    }
  }
  const name = species.find((elemento) => elemento.name === animal);
  return name.residents.length;
}

function calculateEntry(entrants = 0) {
  const {Child = 0, Senior = 0, Adult = 0} = entrants;
  const {Child: ChildPrice, Senior: SeniorPrice, Adult: AdultPrice} = data.prices;
  const total = (ChildPrice * Child) + (SeniorPrice * Senior) + (AdultPrice * Adult);
  return total;
}

function getAnimalMap(options) {
  const localidade = Array.from({});
  const obj = {};
  data.species.forEach(({location}) => localidade.push(location));
  if ((!options) || (!options.includeNames)) {
    localidade.forEach((local) => obj[local] = data.species.filter((specie) => specie.location === local).map((value) => value.name));
    return obj;
  }
  if (options.includeNames) {
    localidade.forEach((local) => {
      obj[local] = data.species.filter((value) => value.location === local).map((animal) => {
        const novoObj = {};
        const filter = animal.residents.filter((specie) => specie.sex === options.sex);
        novoObj[animal.name] = animal.residents.map((value) => value.name);
        if (!options.sex & options.sorted) {
          novoObj[animal.name] = animal.residents.map((resident) => resident.name).sort();
        } else if (options.sex && !options.sorted) {
          novoObj[animal.name] = filter.map((value) => value.name);
        } else if (options.sorted) {
          novoObj[animal.name] = filter.map((value) => value.name).sort();
        }
        return novoObj;
      });
    });
    return obj;
  }
}

function getSchedule(dayName) {
  const chaves = Object.keys(data.hours);
  const obj = {};
  if (!dayName) {
    chaves.forEach((chave) => {
      if (chave === 'Monday') {
        obj[chave] = 'CLOSED'
      } else {
        obj[chave] = `Open from ${data.hours[chave].open}am until ${data.hours[chave].close - 12}pm`
      }
    })
  }
  if (dayName) {
    if (dayName === 'Monday') {
      obj[dayName] = 'CLOSED'
    } else {
      obj[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`
    }
  }
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const primeiroAnimal = data.employees.find((animal) => animal.id === id).responsibleFor[0];
  const animalMaisVelhor = data.species.find((specie) => specie.id === primeiroAnimal).residents.sort((a, b) => b.age - a.age);
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
}

function getEmployeeCoverage(idOrName = 0) {
  if (idOrName === 0) {
    const ret = showAnimal();
    return ret;
  }
  const obj = {};
  const selectEmployee = data.employees.find((value) => value.id === idOrName || value.lastName === idOrName || value.firstName === idOrName);
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
