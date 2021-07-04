const data = require('./data');

const { species } = data; // Importar o array species do arquivo data.js

const { employees } = data; // Importar o array employees do arquivo data.js

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));

  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimalName = species.find((specie) => specie.name === animal);
  const verifyAnimalAge = findAnimalName.residents.every((resident) => resident.age >= age);

  return verifyAnimalAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const emN = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);

  return emN;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const getManager = data.employees.find((employee) => employee.managers.includes(id));
  if (getManager) return true;

  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const setEmployee = data.employees.push({ id, firstName, lastName, managers, responsibleFor });

  return setEmployee;
}

function countAnimals(speciesNames) { // O nome do parâmetro precisou ser mudado devido a linha 3
  // seu código aqui
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;

    return acc;
  }, {});

  if (!speciesNames) return allAnimals;

  return allAnimals[speciesNames];
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

// Feito para a função getAnimalMap
function getAnimalName(animalName, sorted, sex) {
  let result = data.species.find((animal) => animal.name === animalName);
  result = result.residents;
  if (typeof sex === 'string') {
    result = result.filter((animal) => animal.sex === sex);
  }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort();
  return { [animalName]: result };
}

function getAnimalMap(options = {}) {
  // seu código aqui
  const { includeNames = false, sorted = false, sex } = options;
  let result = data.species.reduce((acc, cur) => {
    const { name, location } = cur;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalName]) => {
      acc[key] = animalName.map((name) => getAnimalName(name, sorted, sex));
      return acc;
    }, {});
  }
  return result;
}

// Feita para a função getSchedule
function hoursConverter(hour) {
  if (hour > 12) return `${(hour - 12)}pm`;
  if (hour === 0) return '12pm';
  return `${hour}am`;
}

// Feita para a função getSchedule
function scheduleMessage(dayName, schedule) {
  if (schedule[dayName].open !== schedule[dayName].close) {
    return `Open from ${hoursConverter(schedule[dayName]
      .open)} until ${hoursConverter(schedule[dayName].close)}`;
  }
  return 'CLOSED';
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};
  const { hours } = data;
  if (dayName) {
    schedule[dayName] = scheduleMessage(dayName, hours);
  } else {
    Object.keys(hours).forEach((day) => {
      schedule[day] = scheduleMessage(day, hours);
    });
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldest[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
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
  const find = data.employees.find((employee) => employee.id === id);
  return setObject(find);
};

// Feita para a função getEmployeeCoverage
const findByName = (name) => {
  const find = data.employees.find(({ firstName, lastName }) => firstName === name
    || lastName === name);
  return setObject(find);
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    const object = {};
    data.employees.forEach((employee) => {
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
