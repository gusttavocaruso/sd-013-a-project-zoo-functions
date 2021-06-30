const { prices } = require('./data'); // Default Destructuring
const { species } = require('./data'); // Default Destructuring
const { employees } = require('./data'); // Default Destructuring
const { hours } = require('./data'); // Default Destructuring

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

const diaFechado = (dia) => { // requisito 10
  if (dia === 'Monday') return 'CLOSED';
  return `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
};

function getSchedule(dayName) { // requisito 10
  const novoObjeto = {}; // Cria o objeto
  if (!dayName) { // Se não tiver colocado nada de parametro traz tudo
    Object
      .keys(hours)
      .forEach((elemento) => {
        novoObjeto[elemento] = diaFechado(elemento);
      });
    return novoObjeto;
  }
  novoObjeto[dayName] = diaFechado(dayName);
  return novoObjeto;
}

function getOldestFromFirstSpecies(id) { // requisito 11
  const animalId = employees // Primeiro busca os animais que o funcionário possui sob sua responsabilidade
    .find(({ id: funcionarioId }) => (
      funcionarioId === id // procura um funcionario com o id passado no parametro
    )).responsibleFor[0] // e com isso trazer os animais que são responsáveis.

  const animalMaisVelho = species // Em segundo, com os animais "em mãos" busca o animal em Species e pega o mais velho
    .find(({ id: funcionarioId }) => (
      funcionarioId === animalId
    )).residents.sort(({ age: idadeA }, { age: idadeB }) => idadeB - idadeA)[0] // Faz o sort e pega o primeiro do array criado
  return Object.values(animalMaisVelho) // retorna o animal mais velho como array
}

function increasePrices(percentage) { // requisito 12
  const { Adult: precoAdulto, Senior: precoIdoso, Child: precoCrianca } = prices;
  prices.Adult = Math.round(precoAdulto * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(precoIdoso * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(precoCrianca * (1 + (percentage / 100)) * 100) / 100;
  return prices;
}

function validaFuncionario(idOrName) { // requisito 13
  if (idOrName) { // Se tem a informação de parametro
    return (
      employees // Filtra e desconstroi objeto buscando se o idOrName é id, name ou sobrenome
        .filter(({ id, firstName, lastName }) => (
          id === idOrName || firstName === idOrName || lastName === idOrName
        ))
    );
  }
  return employees; // retorna o funcionário para a função principal
}

function getEmployeeCoverage(idOrName) { // requisito 13
  const novoObjeto = {}; // Cria o objeto de retorno
  const funcionarioFiltrado = validaFuncionario(idOrName); // checa funcionário
  funcionarioFiltrado
    .forEach(({ firstName, lastName, responsibleFor }) => {
      novoObjeto[`${firstName} ${lastName}`] = (responsibleFor
        .map((elemento) => (species // Inicia o mapeamento dos animais
          .find(({ id }) => id === elemento)).name) // Busca o animal conforme id e retorna o nome
      );
    });
  return novoObjeto;
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
