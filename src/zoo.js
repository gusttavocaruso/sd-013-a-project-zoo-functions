// Alguns exercicios foram feitos com amigos, ou baseados em exercicios feitos (Gabriel Gaspar,Josue Lobo)

const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const retorno = [];

  ids.forEach((idPassado) => {
    const procurarId = data.species.find((elemento) => elemento.id === idPassado);
    retorno.push(procurarId);
  });

  return retorno;
}

function getAnimalsOlderThan(animal, age) {
  const procurarNome = data.species.find((elemento) => elemento.name === animal);
  return procurarNome.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((elemento) => elemento.firstName === employeeName
  || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  let controller = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) {
        controller = true;
      }
    });
  });
  return controller;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function countAnimals(species) {
  if (species === undefined) {
    const objeto = {};
    data.species.forEach((animal) => {
      objeto[animal.name] = animal.residents.length;
    });
    return objeto;
  }
  const procurarAnimal = data.species.find((elemento) => elemento.name === species);
  return procurarAnimal.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const valores = data.prices;
  return (valores.Adult * Adult) + (valores.Senior * Senior) + (valores.Child * Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const objeto = {};
  const horas = Object.keys(data.hours);
  horas.forEach((day) => {
    if (day !== 'Monday') {
      objeto[day] = `Open from ${data.hours[day].open}am until ${(data.hours[day].close) - 12}pm`;
    } else {
      objeto[day] = 'CLOSED';
    }
  });
  if (dayName) {
    return {
      [dayName]: objeto[dayName],
    };
  }
  return objeto;
}

// Função abaixo baseada no exercicio do Josué Lobo
function getOldestFromFirstSpecies(id) {
  const employees = data.employees.find((employee) => employee.id === id);
  const firstSpecies = data.species.find((specie) => specie.id === employees.responsibleFor[0]);
  const oldestResident = firstSpecies.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestResident);
}

function increasePrices(percentage) {
  const novoValor = 1 + (percentage / 100);
  const valores = data.prices;
  Object.keys(valores).forEach((key) => {
    valores[key] = Math.ceil((valores[key] * novoValor * 100)) / 100;
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
