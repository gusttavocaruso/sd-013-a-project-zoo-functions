const { species, employees, hours, prices } = require('./data');

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
  // c
}

const searchDay = (day) => {
  if (day === 'Monday') {
    return { Monday: 'CLOSED' };
  }
  const dia = Object.entries(hours).find((date) => date[0] === day);

  const dataFinal = { };
  dataFinal[day] = `Open from ${dia[1].open}am until ${dia[1].close - 12}pm`;
  return dataFinal;
};

function getSchedule(dayName) {
  const obj = {};
  if (!dayName) {
    Object.entries(hours).forEach((hour) => {
      if (hour[0] === 'Monday') {
        obj[hour[0]] = 'CLOSED';
      } else {
        obj[hour[0]] = `Open from ${hour[1].open}am until ${hour[1].close - 12}pm`;
      }
    });
    return obj;
  } return searchDay(dayName);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((value) => {
    prices[value] = Math.round((prices[value] * (percentage / 100 + 1)) * 100) / 100;
  });
  /* Object.entries(prices).forEach((valor) => {
    const result = valor[1] + (valor[1] * (percentage / 100));
    prices.valor[0] = Math.round((result) * 100) / 100;
  }); */
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
  const obj = {};
  if (!idOrName) {
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
