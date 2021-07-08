const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return ids.map((param) => data.species.find((section) => (section.id === param)));
}

function getAnimalsOlderThan(specie, age) {
  const section = data.species.find((block) => block.name === specie);
  const animals = section.residents.every((animal) => animal.age >= age);
  return animals;
}

function getEmployeeByName(employeeName = {}) {
  if (Object.values(employeeName).length === 0) {
    return employeeName;
  }
  let human = data.employees.find((person) => person.firstName === employeeName);
  if (human === undefined) {
    human = data.employees.find((person) => person.lastName === employeeName);
  }
  return human;
}

function createEmployee(personalInfo, associatedWith) {
  const person = { ...personalInfo, ...associatedWith };
  return person;
}

function isManager(id) {
  return data.employees.some((human) => human.managers.some((adult) => adult === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species !== undefined) {
    const animals = data.species.find((animal) => animal.name === species);
    return animals.residents.length;
  }
  const animalsQnts = data.species.reduce((previus, current) => {
    const add = previus;
    add[current.name] = current.residents.length;
    return previus;
  }, {});
  return animalsQnts;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const { Adult: Ad, Senior: Se, Child: Ch } = data.prices;
  return (Adult * Ad) + (Senior * Se) + (Child * Ch);
}

function getAnimalMap(options) {
  // return data.species.reduce((acc, curr) => {
  //   if (acc[curr.location])
  // }, {})
}

function getSchedule(dayName) {
  const schedule = Object.entries(data.hours).reduce((acc, current) => {
    acc[current[0]] = `Open from ${current[1].open}am until ${current[1].close - 12}pm`;
    if (current[1].open === 0 && current[1].close === 0) {
      acc[current[0]] = 'CLOSED';
    }
    return acc;
  }, {});
  if (dayName !== undefined) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(identify) {
  const person = data.employees.find((employee) => employee.id === identify);
  const animals = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const ani = animals.residents.reduce((acc, current) => ((acc.age > current.age) ? acc : current));
  return Object.values(ani);
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
