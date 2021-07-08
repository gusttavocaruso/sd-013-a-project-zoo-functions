const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return undefined;
  }
  return species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const find = species.find((specie) => specie.name === animal);
  return find.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((a) => a.firstName === employeeName || a.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(especie) {
  const objeto = {};
  if (especie === undefined) {
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  const animal = species.find((specie) => specie.name === especie);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const priceAdult = prices.Adult * entrants.Adult;
  const priceSenior = prices.Senior * entrants.Senior;
  const priceChild = prices.Child * entrants.Child;

  let test = 0;
  if (priceAdult) test += priceAdult;
  if (priceSenior) test += priceSenior;
  if (priceChild) test += priceChild;

  return test;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (!dayName) { // Ajudado pela Bianca plantão da manhã
    const objeto = {};
    const entradas = Object.entries(hours);
    entradas.forEach((each) => {
      objeto[each[0]] = `Open from ${each[1].open}am until ${each[1].close - 12}pm`;
      if (each[0] === 'Monday') objeto[each[0]] = 'CLOSED';
    });
    return objeto;
  }

  const oneDay = {};
  const horarios = Object.entries(hours);
  const getData = horarios.find((horario) => horario.find((day) => day === dayName));

  oneDay[getData[0]] = `Open from ${getData[1].open}am until ${getData[1].close - 12}pm`;
  return oneDay;
}
// console.log(`Sem parâmetros`);
// console.log(getSchedule());
// console.log(`Segunda`);
// console.log(getSchedule('Monday'));
// console.log(`Terça`);
console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // const newPriceAdult = prices.Adult + (prices.Adult * (percentage / 100) + 0.005);
  // const adult = +(parseFloat(newPriceAdult).toFixed(2));

  // const newPriceSenior = prices.Senior + (prices.Senior * (percentage / 100) + 0.005);
  // const senior = +(parseFloat(newPriceSenior).toFixed(2));

  // const newPriceChild = prices.Child + (prices.Child * (percentage / 100) + 0.005);
  // const child = +(parseFloat(newPriceChild).toFixed(2));

  // return {
  //   Adult: adult,
  //   Senior: senior,
  //   Child: child,
  // };
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
