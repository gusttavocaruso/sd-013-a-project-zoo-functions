const { species, employees, hours, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((item) => item.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeObj = employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  return employeeObj || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(especie) {
  if (!especie) {
    const animalCount = {};
    species.forEach((item) => {
      animalCount[item.name] = item.residents.length;
    });
    return animalCount;
  } const animals = species.find((item) => item.name === especie);
  return animals.residents.length;
}

function calculateEntry(entrants) {
  const { Adult, Child, Senior } = prices;
  let entriesPrices = [];
  if (entrants) {
    entriesPrices = [
      (entrants.Adult * Adult),
      (entrants.Child * Child),
      (entrants.Senior * Senior),
    ];
  }
  return entriesPrices.reduce((acc, curr) => (curr ? acc + curr : acc), 0);
}

// ------------ Requisito 9
// ---------------tentativa de refatoração
// const buildMap = (buildFnc) => {
//   const animalMap = {};
//   const locations = ['NE', 'NW', 'SE', 'SW'];

//   locations.forEach((location) => {
//     animalMap[location] = buildFnc();
//   });
// };
// -------------final da tentativa
// const filterByLocation = (Obj, Loc) => Obj.filter((item) => item.location === Loc);
// const getSpecies = (Arr) => Arr.map((element) => element.name);
// const getSpeciesAndNames = (Arr) => Arr.map((element) => {
//   const speciesWithNames = {};
//   speciesWithNames[element.name] = element.residents.map((animal) => animal.name);
//   return speciesWithNames;
// });

function getAnimalMap(options) {}
//   const animalMap = {};
//   const locations = ['NE', 'NW', 'SE', 'SW'];

//   if (!options) {
//     locations.forEach((location) => {
//       animalMap[location] = getSpecies(filterByLocation(species, location));
//     });
//   } else {
//     if (options.includeNames) {
//       locations.forEach((location) => {
//         animalMap[location] = getSpeciesAndNames(filterByLocation(species, location));
//       });
//     } if (options.sort) {
//       locations.forEach((location) => {
//         animalMap[location][0][0] = animalMap[location][0][0].sort();
//       })
//     }
//   }
//   return animalMap;
// }

// ---------------
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

const isOldest = (resident, residents) => {
  const ages = residents.map((item) => item.age);
  const maxAge = Math.max(...ages);
  return resident.age === maxAge;
};

const getOldest = (Arr) => Object.values(Arr.find((element) => isOldest(element, Arr)));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id);
  const animal = species.find((element) => element.id === employee.responsibleFor[0]);
  return getOldest(animal.residents);
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Child, Senior } = prices;
  const adjustPrice = (entry) => Math.ceil(entry * (percentage + 100)) / 100;
  data.prices.Adult = adjustPrice(Adult);
  data.prices.Child = adjustPrice(Child);
  data.prices.Senior = adjustPrice(Senior);
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
