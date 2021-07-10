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
  let controller = false
  data.employees.forEach((employee) =>{
    employee.managers.forEach((manager) => {
      if (manager === id) {
        controller = true;
      }
    })
  })
  return controller
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
