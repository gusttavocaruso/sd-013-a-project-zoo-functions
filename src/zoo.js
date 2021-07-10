const data = require('./data');

const getObj = {};

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((animal) => ids.find((nome) => animal.id === nome));
}
function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName === false) {
    return data.employees.find((nome) => nome.lastName === employeeName
      || nome.firstName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmpre = { ...personalInfo, ...associatedWith }; // desestrutura as informações passadas
  return novoEmpre; // retorna o objeto novoEmprego com os dois objetos desestruturados
}

function isManager(id) {
  return data.employees.find((indexItem) => indexItem.id === id)
    .managers.every((cargo) => cargo === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const teste = {};
  const testeId = id;
  teste.id = testeId;
  teste.firstName = firstName;
  teste.lastName = lastName;
  teste.managers = managers;
  teste.responsibleFor = responsibleFor;
  const adEmployee = data.employees;
  adEmployee.push(teste);
}

function countAnimals(species) {
  if (!species !== true) {
    return data.species.find((nome) => nome.name === species)
      .residents.length;
  }
  return data.species.reduce((acc, value) => {
    acc[value.name] = value.residents.length;
    return acc;
  }, {});
}
function calculateEntry(entrants) {
  let acu = 0;
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  Object.keys(data.prices).forEach((preco, index) => {
    Object.keys(entrants).forEach((entra, j) => {
      if (entra === preco) {
        const valor = Object.values(data.prices)[index];
        const valor2 = Object.values(entrants)[j];
        acu += (valor2 * valor);
      }
    });
  });
  return acu;
}

function getAnimalMap(options) {
  // seu código aqui
}
function aux(nome) {
  const newObj = {};
  Object.keys(getObj).forEach((dia) => {
    if (dia === nome) {
      newObj[dia] = getObj[dia];
    }
  });
  return newObj;
}

function getSchedule(dayName) {
  Object.keys(data.hours).forEach((dia) => {
    if (dia === 'Monday') {
      getObj[dia] = 'CLOSED';
    } else {
      getObj[dia] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
    }
  });
  if (!dayName) {
    return getObj;
  }
  return aux(dayName);
}

function getOldestFromFirstSpecies(id) {
  let valoresAni = 0;
  let idadeAni = 0;
  const one = data.employees.find((empregado) => empregado.id === id).responsibleFor[0];
  const two = data.species.find((resid) => resid.id === one).residents;
  two.forEach((animal) => {
    if (valoresAni === 0) {
      valoresAni = Object.values(animal);
    } else if (animal.age > idadeAni) {
      idadeAni = animal.age;
      valoresAni = Object.values(animal);
    }
  });
  return valoresAni;
}
function increasePrices(percentage) {
  const porcen = percentage / 100;
  // const valorAdult = Object.values(data.prices)[0] + (data.prices.Adult * porcen);
  // const valorSenior = data.prices.Senior + (data.prices.Senior * porcen);
  // const valorChild = data.prices.Child + (data.prices.Child * porcen);
  // data.prices.Adult = Math.ceil(valorAdult * 100) / 100;
  // data.prices.Senior = Math.ceil(valorSenior * 100) / 100; // para andar mais casas casa decimais é necessario
  // data.prices.Child = Math.ceil(valorChild * 100) / 100; // adicionar mais zeros nos digitos 100
  Object.keys(data.prices).forEach((pessoa) => {
    data.prices[pessoa] += (data.prices[pessoa] * porcen);
    data.prices[pessoa] = Math.ceil(data.prices[pessoa] * 100) / 100;
  });
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
