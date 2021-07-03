const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui //
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal).residents
    .every((specieObtained) => specieObtained.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const returnedEmployee = employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return !returnedEmployee ? {} : returnedEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const createEmployeeObj = () => ({ id, firstName, lastName, managers, responsibleFor });
  const employeeObject = createEmployeeObj();
  employees.push(employeeObject);
}

function countAnimals(specieName) {
  // seu código aqui
  if (specieName) {
    return species.find((specie) => specie.name === specieName).residents.length;
  }
  const countAnimalsObj = {};
  species.forEach((resident) => { countAnimalsObj[resident.name] = resident.residents.length; });
  return countAnimalsObj;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return Number.isNaN(price) ? 0 : price;
}

function getAnimalMap(options) {
  // seu código aqui
  /* const { includeNames = false, sorted = false, sex = '' } = options;
  const getAnimals = (region) => {
    return species
    .filter((specie) => specie.location === region)
    .map((animal) => {
      return {
        [animal.name]: animal.residents.map((arrayAnimal) => arrayAnimal.name)
      }
    });
  }
  const objAnimals = {
    NE: getAnimals('NE'), NW: getAnimals('NW'), SE: getAnimals('SE'), SW: getAnimals('SW'),
  };
  return objAnimals; */
}

const daySchedule = () => {
  const arraySchedule = Object.entries(hours);
  const objectSchedule = {};
  arraySchedule.forEach(([day, schedule]) => {
    if (day === 'Monday') {
      objectSchedule[day] = 'CLOSED';
    } else {
      objectSchedule[day] = `Open from ${schedule.open}am until ${schedule.close - 12}pm`;
    }
  });
  return objectSchedule;
};

function getSchedule(dayName) {
  // seu código aqui
  const createUniqueEntry = () => ({ [dayName]: `${daySchedule()[dayName]}` });
  return dayName ? createUniqueEntry() : daySchedule();
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const getResidents = species
    .filter((specie) => specie.id === firstSpecie)
    .find((animal) => animal.residents).residents;
  const getOldestAge = getResidents
    .map((element) => element.age)
    .reduce((acc, curr) => (curr > acc ? curr : acc));
  const getOldAnimal = getResidents
    .filter((animal) => animal.age === getOldestAge);
  return getOldAnimal.map(({ name, sex, age }) => [name, sex, age])[0];
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = prices;
  prices.Adult = Math.ceil(Adult * (100 + (percentage))) / 100;
  prices.Senior = Math.ceil(Senior * (100 + (percentage))) / 100;
  prices.Child = Math.ceil(Child * (100 + (percentage))) / 100;
}

const getAnimal = ([...ids]) => {
  const arrayAnimals = [];
  ids.forEach((id) => {
    arrayAnimals.push(species.find((animal) => animal.id === id).name);
  });
  return arrayAnimals;
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const allEmployeesObject = {};
  employees.forEach((employee) => {
    allEmployeesObject[`${employee.firstName} ${employee.lastName}`] = (
      getAnimal(employee.responsibleFor));
  });
  const actualEmployeeObject = {};
  if (idOrName !== undefined) {
    const actualEmployee = employees
      .find((employee) => (
        employee.id === idOrName
        || employee.firstName === idOrName
        || employee.lastName === idOrName));
    actualEmployeeObject[`${actualEmployee.firstName} ${actualEmployee.lastName}`] = getAnimal(
      actualEmployee.responsibleFor,
    );
  }
  return idOrName ? actualEmployeeObject : allEmployeesObject;
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
