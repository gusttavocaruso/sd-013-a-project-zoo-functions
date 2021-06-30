const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (ids.length === 0) return result;
  ids.forEach((id) => data.species.map((specie) => (specie.id === id ? result.push(specie) : id)));
  return result;
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.find(({ name }) => name === animal);
  return animalSpecie.residents.every(({ age: residentAge }) => residentAge > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;
  const { Adult: adult, Senior: senior, Child: child } = entrants;
  let total = 0;
  if (adult) {
    total += adultPrice * adult;
  }
  if (senior) {
    total += seniorPrice * senior;
  }
  if (child) {
    total += childPrice * child;
  }
  return total;
}

function getAnimalMap(options) {

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
