const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, idx) =>
    specie.id === ids[idx]);
}

function getAnimalsOlderThan(animal, age) {
  const analiseEspecie = species.filter((specie, idx) =>
    specie.name === animal);
  return analiseEspecie[0].residents.every((resident) =>
    resident.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  if (Object.entries(employeeName).length === 0) return {};
  return employees.find((employee = {}) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
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
  return employees.push(newEmployee);
}

function countAnimals(animal) {
  if (!animal) {
    const objSpecies = {};
    species.forEach((specie) => {
      objSpecies[specie.name] = specie.residents.length;
    });
    return objSpecies;
  }
  return species.find((specie) => (specie.name === animal)).residents.length;
}

function calculateEntry(persons) {
  if (!persons) return 0;
  return Object.keys(persons).reduce((acc, cur) => acc
  + (persons[cur] * prices[cur]), 0);
}

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line max-lines-per-function
function getAnimalMap(parameters = {}) {
  const { includeNames = false, sorted = false, sex = '' } = parameters;
  if (includeNames === false) {
    return species.reduce((acc, cur) => {
      const { name, location } = cur;
      if (!acc[location]) acc[location] = [];
      acc[location].push(name);
      return acc;
    }, {});
  }
  // eslint-disable-next-line max-lines-per-function
  return species.reduce((acc, cur) => {
    const { name, residents, location } = cur;
    if (!acc[location]) acc[location] = [];
    let useResidents = residents;
    if (sex !== '') {
      useResidents = residents.filter((resident) => resident.sex === sex);
      console.log(useResidents);
    }
    const ObjectEspecieResident = useResidents.reduce((acumulator, current) => {
      // eslint-disable-next-line no-param-reassign
      if (!acumulator[cur.name]) acumulator[cur.name] = [];
      acumulator[cur.name].push(current.name);
      return acumulator;
    }, {});
    if (sorted === true && ObjectEspecieResident[name] !== undefined) {
      ObjectEspecieResident[name] = ObjectEspecieResident[name].sort();
    }
    acc[location].push(ObjectEspecieResident);
    return acc;
  }, {});
}
console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }));

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
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
