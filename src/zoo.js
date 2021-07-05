const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const animais = species.filter((specie) => ids.includes(specie.id));
  return animais;
}

function getAnimalsOlderThan(animal, agee) {
  const bichos = species.find((nome) => nome.name === animal);
  return bichos.residents.every((bichoAge) => bichoAge.age >= agee);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const funcionario = employees.find((employ) => (employ.firstName === employeeName)
  || (employ.lastName === employeeName));
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(ids) {
  const {employees} = data;
  const test = 'teste';
  const funcionario = employees.find((employ) => {employ.id === ids});
  return funcionario.some((tru) => {typeof tru.id === typeof test});

}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const {employees} = data;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(speciess) {
  if (!speciess) {
    const obj = {};
    data.species.forEach((nome) => { obj[nome.name] = nome.residents.length; });
    return obj;
  }

  return data.species.find((nome) => nome.name === speciess)
    .residents.length;
}

function calculateEntry(entrants) {
  const {prices} = data;
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const {hours} = data;
  const {Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday} = hours;
  const obj = {};
  if (!dayName) {Object.keys(hours).forEach((dia) => obj[dia] = `${dia}: Open from ${Object.values(dia[0])}pm until ${Object.values(dia[1])}pm`)};
  return obj;

  obj[dayName] = Object.values(dayName);
}

function getOldestFromFirstSpecies(id) {
  const {employees, species} = data;
  let array = [];
  const pessoa = employees.find((currObj) => currObj.id === id);
  const primeiraSpe = pessoa.responsibleFor.find((currO) => currO[0]);
  const primeiraSpecie = species.find((i) => i.id === primeiraSpe);
  const quase = primeiraSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(quase);
}

function increasePrices(percentage) {
  const {prices} = data;
  const chavesObjetos = Object.keys(prices);
  chavesObjetos.forEach((value) => value = prices[value] * Math.round((percentage / 100) * 100) / 100);
  
  
}

function getEmployeeCoverage(idOrName) {
  const {employees} = data;
  const alEmployees = {}
  if (!idOrName) {
  const fullName = employess.map((employ) => {`${employ.firstName} ${employ.lastName}`
  fullName.forEach((per) => {per = responsibleFor[employ]})
});
  
  
  }
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
