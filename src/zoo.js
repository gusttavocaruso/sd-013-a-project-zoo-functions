const { species, employees, prices } = require('./data');// Atualizo o require com os arrays que quero obter do arquivo data.

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, idade) {
  return species.filter(({ name }) => name === animal)[0].residents
    .every(({ age }) => age >= idade);
}

function getEmployeeByName(string) {
  if (string === undefined) {
    return {};
  }
  return employees
    .filter(({ firstName, lastName }) => firstName === string || lastName === string)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(cod) {
  const gerenteSim = employees
    .filter(({ managers }) => managers
      .some((manager) => manager === cod));
  return (gerenteSim.length >= 1);
  // return gerenteSim;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = ({ id, firstName, lastName });
  const associatedWith = ({ managers, responsibleFor });
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(especie) {
  if (!especie) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find(({ name }) => name === especie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce((accumulator, key) =>
    accumulator + prices[key] * entrants[key], 0);
}

const posicao = species.reduce((acc, { name, location }) => {
  if (acc[location] === undefined) {
    acc[location] = [name];
  } else {
    acc[location].push(name);
  }
  return acc;
}, {});

function getAnimalMap(options) {
  if (!options) return posicao;
}

console.log(getAnimalMap());

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
