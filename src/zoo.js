const data = require('./data');

const { species, employees, prices, hours } = data;

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

const getAnimalsOlderThan = (animal, age) => {
  const animalFind = species.find((specie) => specie.name === animal);
  return animalFind.residents.every((resident) => resident.age > age);
};

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((e) => [e.lastName, e.firstName].includes(employeeName));
}

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.some((e) => e.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

function countAnimals(species2) {
  if (!species2) {
    const animals = {};
    species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  const animal = species.find((specie) => specie.name === species2).residents.length;
  return animal;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: Adults, Senior: Seniors, Child: Children } = prices;
  return Adult * Adults + Senior * Seniors + Child * Children;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronograma = {};
  const keyHours = Object.keys(hours);
  const valueHours = Object.values(hours);
  const openHour = valueHours.map((hour) => hour.open);
  const closeHour = valueHours.map((hour) => hour.close);
  keyHours.forEach((element, i) => {
    if (openHour[i] === 0) {
      cronograma[element] = 'CLOSED';
    } else {
      cronograma[element] = `Open from ${openHour[i]}am until ${closeHour[i] - 12}pm`;
    } return cronograma;
  });
  if (!dayName) {
    return cronograma;
  }
  const dias = Object.entries(cronograma).find((day) => day.includes(dayName));
  return dias.reduce((acc, v) => ({ [acc]: v }));
}

function getOldestFromFirstSpecies(funcID) {
  const funcionario = employees.find(({ id }) => id === funcID);
  const especie = funcionario.responsibleFor[0];
  const animals = species.find(({ id }) => id === especie);
  const olderAnimal = animals.residents.reduce((acc, a) => (acc.age < a.age ? a : acc));
  const final = Object.values(olderAnimal);
  return final;
}

function increasePrices(percentage) {
  const multi = (100 + percentage) / 100;
  prices.Adult = Math.round((prices.Adult * multi) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * multi) * 100) / 100;
  prices.Child = Math.round((prices.Child * multi) * 100) / 100;
}

const getAnimal = (employee) => employee.responsibleFor
  .map((animalID) => species
    .find((specie) => animalID === specie.id).name);

const employeeAnimals = (funcionarios) => funcionarios.reduce((acc, funcinario) => {
  acc[`${funcinario.firstName} ${funcinario.lastName}`] = getAnimal(funcinario);
  return acc;
}, {});

const idOrNameParameter = (funcionario) => {
  const empregados = employees.find(({ id, firstName, lastName }) =>
    funcionario === id || funcionario === firstName || funcionario === lastName);
  return employeeAnimals([empregados]);
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return employeeAnimals(employees);
  if (idOrName) return idOrNameParameter(idOrName);
}
// getEmployeeCoverage('Emery');

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

// Colaboradores:Felipe Neves, Leonardo Santos, Matheus Duarte,  Matheus Macedo.
