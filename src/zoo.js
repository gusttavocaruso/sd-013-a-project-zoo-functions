const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((speci) => ids.some((id) => speci.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((spec) => spec.name === animal
  && spec.residents.every((resident) => resident.age > age));
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return data.employees.find(((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const employee = personalInfo;
  employee.managers = associatedWith.managers;
  employee.responsibleFor = associatedWith.responsibleFor;
  return employee;
}

function isManager(id) {
  let aux = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) aux = true;
    });
  });
  return aux;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(employee);
  // seu código aqui
}

function countAnimals(speciess) {
  if (!speciess) {
    const obj = {};
    data.species.forEach((nome) => { obj[nome.name] = nome.residents.length; });
    return obj;
  }

  return data.species.find((nome) => nome.name === speciess)
    .residents.length;
  // seu código aqui
}

const calculateEntry = ({ Adult = 0, Senior = 0, Child = 0 } = 0) => {
  const { prices } = data;
  const validation = {
    Adult,
    Senior,
    Child,
  };

  const price = (prices.Adult * validation.Adult)
  + (prices.Child * validation.Child) + (prices.Senior * validation.Senior);
  return price;
  // seu código aqui
};

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  let priceAdult = data.prices.Adult;
  let priceSenior = data.prices.Senior;
  let priceChild = data.prices.Child;

  priceAdult = ((percentage / 100) * priceAdult) + priceAdult;
  priceSenior = ((percentage / 100) * priceSenior) + priceSenior;
  priceChild = ((percentage / 100) * priceChild) + priceChild;

  priceAdult = (Math.round(priceAdult * 100) / 100);
  priceSenior = (Math.round(priceSenior * 100) / 100);
  priceChild = (Math.round(priceChild * 100) / 100);

  data.prices.Adult = parseFloat(priceAdult);
  data.prices.Senior = parseFloat(priceSenior);
  data.prices.Child = parseFloat(priceChild);

  return data.prices;
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
