const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const resultadoBusca = [];
  ids.forEach((specieId) => {
    const buscaId = data.species.find((elemento) => elemento.id === specieId);
    resultadoBusca.push(buscaId);
  });
  return resultadoBusca;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elementoX) => elementoX.name === animal)
    .residents.every((elementoY) => elementoY.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employeeCreated = { lastName: personalInfo.lastName,
    firstName: personalInfo.firstName,
    id: personalInfo.id,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employeeCreated;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }
  return species.find((specimen) => specimen.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const resultado = ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
  return resultado;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  //  79 localiza o funcionário da id passada;
  const empregado = employees.find((idEmployee) => idEmployee.id === id);
  //  81 encontra a primeira espécie de animal gerenciado pelo funcionário;
  const animalMaisVelho = species.find((specie) => specie.id === empregado.responsibleFor[0])
    .residents.sort((a, b) => b.age - a.age)[0]; //  82 coloca os animais em ordem de idade decrescente e seleciona o primeiro, ou seja, o mais velho;
  return Object.values(animalMaisVelho);
}

function increasePrices(percentage) {
  Object.keys(data.prices)
    .forEach((tipo) => {
      data.prices[tipo] = Math.round(data.prices[tipo] * (percentage / 100 + 1) * 100) / 100;
    });
}

function getEmployeeCoverage(idOrName) {
  const verifyParam = (employee) => (idOrName === employee.firstName)
  || (idOrName === employee.lastName) || (idOrName === employee.id);
  const nameSearch = (arrayOfIds) => {
    const speciesName = [];
    arrayOfIds.forEach((id) => speciesName
      .push(species.find((specie) => specie.id === id).name));
    return speciesName;
  };
  const employeeName = (employee) => `${employee.firstName} ${employee.lastName}`;
  const alias = employeeName; // cria um alias de employeeName para a linha 101 não ultrapassar o máximo de 100 caracteres do lint;
  const employeesReduce = employees
    .reduce((acc, cV) => ({ ...acc, [alias(cV)]: nameSearch(cV.responsibleFor) }), {});

  if (!idOrName) return employeesReduce;
  const result = employees.find((employee) => verifyParam(employee));
  return { [employeeName(result)]: nameSearch(result.responsibleFor) };
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
