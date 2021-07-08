const data = require('./data');

function getSpeciesByIds(...ids) {
  const findSpecie = [];
  ids.forEach((id) => findSpecie.push(data.species.find((specie) => specie.id === id)));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => specie.name === animal).residents;
  return findSpecie.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => (employee.firstName === employeeName)
  || (employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmp = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(addEmp);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((counter1, currentValue) => {
      // A constante serve para corrigir um erro no lint, alguns colegas me ajudaram.
      const counter = counter1;
      counter[currentValue.name] = currentValue.residents.length;
      return counter;
    }, {});
  }
  return data.species.find((specs) => specs.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const fullPrice = `${(Adult * data.prices.Adult)
  + (Child * data.prices.Child) + (Senior * data.prices.Senior)}`;
  return parseFloat(fullPrice);
}

function getAnimalMap(options) {
  // seu código aqui
  // Não realizei por ter muitas dificuldades, assim como alguns colegas.
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const empId = data.employees.find((emp) => emp.id === id);
  const spcs = data.spcs.find((spc) => spc.id === empId.responsibleFor[0]);
  const old = spcs.residents.sort((fst, scd) => scd.age - fst.age);
  return Object.values(old[0]);
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
