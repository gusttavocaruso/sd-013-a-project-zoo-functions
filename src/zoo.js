const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === []) return [];
  return ids
    .map((id) => data.species
      .find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((anim) => anim.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(name) {
  if (!name) return {};
  return data.employees
    .find((employee) => ((employee.firstName === name) || (employee.lastName === name)));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return data.employees
    .some((employee) => employee.managers
      .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  data.employees[data.employees.length] = newEmployee;
}

function countAnimals(species) {
  const counts = {};
  data.species
    .forEach((animal) => { counts[animal.name] = animal.residents.length; });
  return !species ? counts : counts[species];
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  return Object.keys(entrants)
    .map((category) => data.prices[category] * entrants[category])
    .reduce((a, b) => a + b, 0);
}

const getNames = (animal, sorted, sex) => {
  const names = [];
  animal.residents.forEach((resid) => {
    if (!sex) names.push(resid.name);
    if (resid.sex === sex) names.push(resid.name);
  });
  return sorted ? names.sort() : names;
};

function getAnimalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const response = {};
  locations.forEach((loc) => {
    const animals = data.species.filter((spe) => spe.location === loc);
    response[loc] = animals.map((obj) => obj.name);
  });
  if (!options) return response;
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return response;
  locations.forEach((loc) => {
    response[loc] = [];
    const animals = data.species.filter((spe) => spe.location === loc);
    animals.forEach((animal) => {
      const names = getNames(animal, sorted, sex);
      response[loc].push({ [animal.name]: names });
    });
  });
  return response;
}

function getSchedule(dayName) {
  const crono = data.hours;
  const response = {};
  Object.keys(crono).forEach((key) => {
    if ((crono[key].open !== 0) && (crono[key].close !== 0)) {
      response[key] = `Open from ${crono[key].open}am until ${crono[key].close - 12}pm`;
    } else {
      response[key] = 'CLOSED';
    }
  });
  return !dayName ? response : { [dayName]: response[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employeeById = data.employees.find((employee) => employee.id === id);
  const firstSpecieResidents = getSpeciesByIds(employeeById.responsibleFor[0])[0].residents;
  const oldestAnimal = firstSpecieResidents.sort((b, a) => a.age - b.age)[0];
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const adjustedPct = percentage / 100 + 1;
  Object.keys(data.prices)
    .forEach((el) => { data.prices[el] = Math.round(data.prices[el] * adjustedPct * 100) / 100; });
}

function getEmployeeCoverage(idOrName) {
  const response = {};
  data.employees.forEach((em) => {
    const animals = [];
    em.responsibleFor.forEach((id) => getSpeciesByIds(id).forEach((an) => animals.push(an.name)));
    response[`${em.firstName} ${em.lastName}`] = animals;
  });
  if (!idOrName) return response;
  if (!getEmployeeByName(idOrName)) {
    const employee = data.employees.find((emp) => emp.id === idOrName);
    const first = employee.firstName;
    const last = employee.lastName;
    const fullName = `${first} ${last}`;
    return { [fullName]: response[fullName] };
  }
  const emp = getEmployeeByName(idOrName);
  const fullName = `${emp.firstName} ${emp.lastName}`;
  return { [fullName]: response[fullName] };
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
