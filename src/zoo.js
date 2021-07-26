const data = require("./data");

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animals = [];
  ids.forEach((id) => {
    const especies = data.species.find((species) => species.id === id);
    animals.push(especies);
  });
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species.find((specie) => specie.name === animal);
  return especies.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(
    (funcionario) =>
      funcionario.firstName === employeeName ||
      funcionario.lastName === employeeName
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const merge = { ...personalInfo, ...associatedWith };
  return merge;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((gerente) => gerente.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  // seu código aqui
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(novoFuncionario);
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    return data.species.reduce((acumulador, valorAtual) => {
      const count = acumulador;
      count[valorAtual.name] = valorAtual.residents.length;
      return count;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const {Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price =
    Adult * data.prices.Adult +
    Child * data.prices.Child +
    Senior * data.prices.Senior;
  return price;
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
