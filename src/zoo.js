const { hours } = require('./data');
const { species } = require('./data');
const { prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // requisito 01
  return species
    .filter((elemento) => ids.includes(elemento.id));
}

function getAnimalsOlderThan(animal, age) { // requisito 02
  return species
    .find((elemento) => elemento.name === animal).residents
    .every((elemento) => elemento.age >= age);
}

function getEmployeeByName(employeeName) { // requisito 03
  if (!employeeName) return {};
  return employees
    .find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) { // requisito 04
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) { // requisito 05
  return employees
  .some((elemento) => elemento.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // requisito 06
  employees
    .push({
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
  });
}

function countAnimals(parametro) { // requisito 07
  const retornoObjeto = {};
  if (!parametro) { // Se nao for colocado parametro
    species
      .forEach(({ name, residents }) => { // traz todos animais
        retornoObjeto[name] = residents.length;
      });
      return retornoObjeto;
    }
    return species
    .find(({ name }) => (name === parametro)).residents.length;      
}

function calculateEntry(entrants) { // requisito 08
  if (!entrants) return 0; // Retorna 0 se nenhum argumento for passado
  if (entrants === {}) return 0; // Retorna 0 se um objeto vazio for passado
  return Object
    .keys(entrants)
    .reduce((acumulador, atual) => (
      acumulador + (prices[atual] * entrants[atual])
    ), 0);
}

function getAnimalMap(options) { // requisito 09
  // seu código aqui
}

const fechado = (dia) => { // requisito 10
  if (dia === 'Monday') return 'CLOSED';
  return `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
};

function getSchedule(dayName) { // requisito 10
  const novoObjeto = {}; // Cria o objeto
  if (!dayName) { // Se não tiver colocado nada de parametro traz tudo
    Object
      .keys(hours)
      .forEach((elemento) => {
        novoObjeto[elemento] = fechado(elemento);
      });
    return novoObjeto;
  }
  novoObjeto[dayName] = fechado(dayName);
  return novoObjeto;
}

function getOldestFromFirstSpecies(id) { // requisito 11
  
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'))
// expected = ['Vicky', 'female', 12];

function increasePrices(percentage) { // requisito 12
  const { Adult: precoAdulto, Senior: precoIdoso, Child: precoCrianca } = prices;
  prices.Adult = Math.round(precoAdulto * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(precoIdoso * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(precoCrianca * (1 + (percentage / 100)) * 100) / 100;
  return prices;
}

function getEmployeeCoverage(idOrName) { // requisito 13
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
