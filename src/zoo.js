const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return {};
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(Species) {
  if (!Species) {
    const obj = {};
    species
      .forEach((specie) => {
        const nameAnimal = [specie.name];
        const quantAnimal = [specie.residents];
        obj[nameAnimal] = quantAnimal[0].length;
      });
    return obj;
  }

  const quantidade = species
    .filter((specie) => specie.name === Species)[0].residents.length;
  return quantidade;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const values = Object.values({ Adult, Child, Senior });
  const sum = values[0] * 49.99 + values[1] * 20.99 + values[2] * 24.99;
  return sum;
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

function getIdorName(funcionario) {
  const obj = {};
  employees
    .filter((employe) => employe
      .id === funcionario || employe
      .firstName === funcionario || employe
      .lastName === funcionario).forEach((test) => {
      const initialName = test.firstName;
      const finalName = test.lastName;
      const fullName = `${initialName} ${finalName}`;
      const animals = test.responsibleFor;
      const listPet = animals.map((animal) => species.find((specie) => specie.id === animal).name);
      obj[fullName] = listPet;
    });
  return obj;
}
// feito com a ajuda da Bianca, sumo e Rafa;
function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    const obj = {};
    employees.forEach((employe) => {
      const initialName = employe.firstName;
      const finalName = employe.lastName;
      const fullName = `${initialName} ${finalName}`;
      const animals = employe.responsibleFor;
      const listPet = animals.map((animal) => species.find((specie) => specie.id === animal).name);
      obj[fullName] = listPet;
    });
    return obj;
  }
  return getIdorName(idOrName);
}

console.log(getEmployeeCoverage());

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
