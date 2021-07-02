const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((itemDoArray) => ids.includes(itemDoArray.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const animalFinded = species.find((specie) => specie.name === animal);
  return animalFinded.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === 0 || employeeName === undefined) return {};
  const output = employees
    .find((item) => employeeName === item.firstName || employeeName === item.lastName);
  return output;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // const result = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  // return result;
}

function isManager(id) {
  return employees.some((item) => item.managers.includes(id) === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers,
    responsibleFor,
  };
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function countAnimals(objSpecies) {
  const objOutputCountSpecies = {};
  if (objSpecies === '' || objSpecies === null || objSpecies === undefined) {
    species.forEach((item) => {
      objOutputCountSpecies[item.name] = item.residents.length;
    });
    return objOutputCountSpecies;
  }
  const blnThereIsTheAnimal = species.some((item) => item.name === objSpecies);
  if (blnThereIsTheAnimal === true) {
    const theuniqueSpecie = species.find((item) => item.name === objSpecies);
    return theuniqueSpecie.residents.length;
  }
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: AdultPrice, Senior: SeniorPrice, Child: ChildPrice } = prices;
  const result = (Adult * AdultPrice) + (Senior * SeniorPrice) + (Child * ChildPrice);
  return result;
}

function getAnimalMap(options) {
  // Escreva seu código aqui...
}

function getSchedule(dayName = 0) {
  const output = {};
  if (dayName === 0) {
    Object.keys(hours).forEach((key) => {
      output[key] = key === 'Monday' ? 'CLOSED'
        : `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    });
    return output;
  }
  output[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return output;
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((item) => item.id === id);
  const idFromFirstSpecie = employee.responsibleFor[0];
  const arrayOfFirstSpecie = species.filter((item) => item.id === idFromFirstSpecie)
    .map(({ residents }) => residents);

  const maxAge = arrayOfFirstSpecie[0].reduce((acc, curr) => (acc > curr.age ? acc : curr.age), 0);
  const itemRefToTheOldestAnimal = arrayOfFirstSpecie[0].find((item) => item.age === maxAge);
  const { name, sex, age } = itemRefToTheOldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage = 0) {
  const multiplier = (1 + (percentage / 100));
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(prices[key] * multiplier * 100) / 100;
  });
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
