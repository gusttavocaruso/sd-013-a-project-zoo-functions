const { hours, species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...rest) {
  const array = [];
  if (rest.length > 0) {
    rest.forEach((id) => {
      const dadosSpecies = species.filter((objA) => objA.id === id);
      array.push(...dadosSpecies);
    });
  }
  return array;
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimais = species.find((specie) => specie.name === animal);
  return nomeAnimais.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((fun) =>
    fun.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc; // objeto inteiro
  }, {});
  if (!speciesName) return allAnimals;
  // console.log(allAnimals);
  return allAnimals[speciesName];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const cronograma = Object.entries(hours);
  const scheduleObject = cronograma.reduce((day, [key, valor]) => {
    const dia = day;
    dia[key] = `Open from ${valor.open}am until ${valor.close - 12}pm`;
    if (valor.open === 0 && valor.close === 0) {
      dia[key] = 'CLOSED';
    }
    return dia;
  }, {});
  if (dayName) {
    return { [dayName]: scheduleObject[dayName] };
  }
  return scheduleObject;
}

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.find((employee) => employee.id === id);
  const primeiraEspecie = species.find((specie) => specie.id === pessoa.responsibleFor[0]);
  const maisVelho = primeiraEspecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(maisVelho[0]);
}

function increasePrices(percentage) {

}

function getEmployeeCoverage(idOrName) {

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
