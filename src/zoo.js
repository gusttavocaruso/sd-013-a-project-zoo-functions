const data = require('./data');

const { species } = data;

const { employees } = data;

const { prices } = data;

const { hours } = data;
// #################################################################################################### //
// ################ Funções auxiliares criadas por @Jorge Felipe Campos Chagas #######################//
// #################################################################################################### //
const animalMapObject = (objectAcc = {}, key, keyValue = []) => species.reduce(((local, names) =>
  Object.assign(local, { [names[key]]: ((keyValue).length === 0 ? new Array(0) : names[keyValue]) })
), objectAcc);
const emptyParam = (parametro) => !parametro
|| (parametro && Object.keys(parametro).length === 0 && parametro.constructor === Object);

const emptyObj = (obj) => Object.keys(obj).length === 0;
function sortByOption(options, array) {
  return (options.sorted ? array.sort() : array);
}
function filterAnimal(specie, options) {
  return (options.includeNames && /male/.test(options.sex) ? sortByOption(options,
    specie.residents
      .filter((animals) => animals.sex === options.sex)
      .map((animal) => animal.name))

    : sortByOption(options, specie.residents.map((animal) => animal.name)));
}

function convertHourToPm(number) {
  return number - 12;
}

function dailyScheduleMaker(weekDay) {
  const { open } = weekDay[1];
  const close = convertHourToPm(weekDay[1].close);
  const dayOfWeek = weekDay[0];
  return (close < 0
    ? { [dayOfWeek]: 'CLOSED' }
    : { [dayOfWeek]: `Open from ${open}am until ${close}pm` });
}

function round(value, decimals) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
}

// #################################################################################################### //
function getSpeciesByIds(...ids) {
  return (!ids.length ? [] : species.filter((specie) => ids.includes(specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find((specie) => specie.name === animal).residents
      .every((animalAge) => animalAge.age >= age)
  );
}

function getEmployeeByName(employeeName) {
  return (!employeeName ? {}
    : employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  return (employees.some((employee) => employee.managers.includes(id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function countAnimals(animal = {}) {
  if (emptyParam(animal)) {
    const animalListTotal = animal;
    const speciesName = (species.map((specieName) => specieName.name));
    const animalsTotal = (species.map((specieName) => specieName.residents.length));
    speciesName.forEach((specie, index) => {
      animalListTotal[specie] = animalsTotal[index];
    });
    return animalListTotal;
  }
  return (species.find((specie) => specie.name === animal).residents.length);
}

function calculateEntry(entrants) {
  return (emptyParam(entrants) ? 0
    : Object.entries(entrants)
      .map((entrant) => prices[entrant[0]] * entrant[1])
      .reduce((total, price) => total + price));
}
// TODO: melhorar a lógica de filterAnimal e comprimir o filtro em uma única varipavel
function getAnimalMap(options = {}) {
  const locations = animalMapObject({}, 'location');
  const defaultLocations = animalMapObject({}, 'location');
  species.forEach((animal) => defaultLocations[animal.location].push(animal.name));
  species.forEach((specie) => locations[specie.location]
    .push(...[{ [specie.name]: filterAnimal(specie, options) }]));
  return ((emptyObj(options) || !options.includeNames) ? defaultLocations : locations);
}
// 'Tuesday': 'Open from 8am until 6pm',
function getSchedule(dayName = {}) {
  return (emptyObj(dayName)
    ? Object.entries(hours)
      .reduce(((schedule, businessHour) => {
        const scheduleFormat = Object.assign(schedule, dailyScheduleMaker(businessHour));
        return scheduleFormat;
      }), {})
    : Object.entries(hours)
      .filter((day) => day[0] === dayName)
      .reduce(((schedule, businessHour) => {
        const scheduleFormat = Object.assign(schedule, dailyScheduleMaker(businessHour));
        console.log(scheduleFormat);
        return scheduleFormat;
      }), {})
  );
}

function getOldestFromFirstSpecies(id) {
  const [firstSpecieID] = employees.find((thisEmployee) => thisEmployee.id === id).responsibleFor;
  const animals = species.find((specie) => specie.id === firstSpecieID).residents;
  const oldestAnimal = animals
    .find((animal) => animal.age === Math.max(...animals.map((animalAge) => animalAge.age)));
  return (Object.values(oldestAnimal));
}

function increasePrices(percentage) {
  Object.entries(prices)
    .forEach(
      (price) => {
        prices[price[0]] = round((price[1] * 100 * ((percentage + 100))) / 10000, 2);
      },
    );
}

function getEmployeeCoverage(idOrName = {}) {
  if (emptyObj(idOrName)) {
    return employees.reduce((list, employee) => {
      const animals = species
        .filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((animal) => animal.name);
      return ({ ...list, ...{ [`${employee.firstName} ${employee.lastName}`]: animals } });
    }, {});
  }
  const employObj = employees.find((employ) =>
    employ.id === idOrName || employ.firstName === idOrName || employ.lastName === idOrName);
  const employAnimals = species
    .filter((specie) => employObj.responsibleFor.includes(specie.id))
    .map((animal) => animal.name);
  return ({ [`${employObj.firstName} ${employObj.lastName}`]: employAnimals });
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
