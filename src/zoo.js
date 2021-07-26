const data = require('./data');

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employe) => employe.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesNames) { // O nome do parâmetro precisou ser mudado devido a linha 3
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;

    return acc;
  }, {});

  if (!speciesNames) return allAnimals;

  return allAnimals[speciesNames];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

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
  const cronogramaDia = dias.reduce((acc, valor) => ({ [acc]: valor }));
  return cronogramaDia;
}

function getOldestFromFirstSpecies(idEmploye) {
  const person = employees.find((employee) => employee.id === idEmploye);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  const oldestValues = Object.values(oldest[0]);

  return oldestValues;
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

// Feita para a função getEmployeeCoverage
const setObject = (employee) => {
  const object = {};
  const fullName = `${employee.firstName} ${employee.lastName}`;
  object[fullName] = [];
  employee.responsibleFor.forEach((res) => {
    const { name } = data.species.find(({ id }) => id === res);
    object[fullName].push(name);
  });
  return object;
};

// Feita para a função getEmployeeCoverage
const findById = (id) => {
  const find = employees.find((employee) => employee.id === id);
  return setObject(find);
};

// Feita para a função getEmployeeCoverage
const findByName = (name) => {
  const find = employees.find(({ firstName, lastName }) => firstName === name
    || lastName === name);
  return setObject(find);
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    const object = {};
    employees.forEach((employee) => {
      Object.assign(object, setObject(employee));
    });
    return object;
  }
  if (idOrName.length > 25) return findById(idOrName);
  return findByName(idOrName);
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
