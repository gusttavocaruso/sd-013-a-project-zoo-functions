const { species: theSpecies, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesId = [];
  ids.forEach((id) => {
    const specieId = theSpecies.find((specie) => specie.id === id);
    speciesId.push(specieId);
  });
  return speciesId;
}

function getAnimalsOlderThan(animal, age) {
  return theSpecies.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const information = personalInfo;
  information.managers = associatedWith.managers;
  information.responsibleFor = associatedWith.responsibleFor;

  return information;
}

function isManager(id) {
  let managerInfo = false;
  employees.forEach((employee) => {
    employee.managers.forEach((managerId) => {
      if (managerId === id) managerInfo = true;
    });
  });
  return managerInfo;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(speciesNumber) {
  const allAnimals = theSpecies.reduce((acc, current) => {
    acc[current.name] = current.residents.length;

    return acc;
  }, {});

  if (!speciesNumber) return allAnimals;

  return allAnimals[speciesNumber];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Senior = 0, Child = 0 } = entrants;

  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}

function getAnimalMap(options) {

}
// Fiz com o Rodrigo Pova
const timeAmPm = (time) => (time < 12 ? `${time}am` : `${time - 12}pm`);
const openSentence = (Obj) => {
  if (Obj.open === Obj.close) return 'CLOSED';
  return `Open from ${timeAmPm(Obj.open)} until ${timeAmPm(Obj.close)}`;
};

function getSchedule(dayName) {
  const Obj = {};
  if (dayName) {
    Obj[dayName] = openSentence(hours[dayName]);
    return Obj;
  } Object.entries(hours).forEach((item) => {
    Obj[item[0]] = openSentence(item[1]);
  });
  return Obj;
}

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstEspecie = theSpecies.find((specie) => specie.id === person.responsibleFor[0]);
  const oldAnimal = firstEspecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldAnimal[0]);
}

function increasePrices(percentage) {
  const { Adult, Child, Senior } = prices;
  const adjustPrice = (entry) => Math.ceil(entry * (percentage + 100)) / 100;
  prices.Adult = adjustPrice(Adult);
  prices.Child = adjustPrice(Child);
  prices.Senior = adjustPrice(Senior);
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
