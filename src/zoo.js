const { species, employees, prices, hours } = require('./data');
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

function verifyUseResidents(acc, location) {
  acc[location] = [];
}
function returnObjectWithLocation() {
  return species.reduce((acc, cur) => {
    const { name, location } = cur;
    if (!acc[location]) verifyUseResidents(acc, location);
    acc[location].push(name);
    return acc;
  }, {});
}
function bears(acc, location) {
  const ResidentGone = { bears: [] };
  acc[location].push(ResidentGone);
  return acc;
}
function pushResident(useResidents, cur) {
  return useResidents.reduce((acumulator, current) => {
    const newObj = acumulator;
    if (!newObj[cur.name]) newObj[cur.name] = [];
    acumulator[cur.name].push(current.name);
    return newObj;
  }, {});
}
function sortObjectNames(ObjectEspecieResident, name) {
  const newobj = { name: ObjectEspecieResident[name].sort() };
  return newobj;
}
function returnObWithParameters(sex, sorted) {
  return species.reduce((acc, cur) => {
    const { name, residents, location } = cur;
    let useResidents = residents;
    if (!acc[location]) verifyUseResidents(acc, location);
    if (sex !== '') useResidents = residents.filter((resident) => resident.sex === sex);
    if (useResidents.length === 0) return bears(acc, location);
    const ObjectEspecieResident = pushResident(useResidents, cur);
    if (sorted === true) sortObjectNames(ObjectEspecieResident, name);
    acc[location].push(ObjectEspecieResident);
    return acc;
  }, {});
}
function getAnimalMap(parameters = {}) {
  const { includeNames = false, sorted = false, sex = '' } = parameters;
  if (includeNames === false) {
    return returnObjectWithLocation();
  }
  return returnObWithParameters(sex, sorted);
}

function noParametersExecute(dayName) {
  const printHoras = Object.keys(hours);
  return printHoras.reduce((acc, cur, index) => {
    let { open, close } = Object.values(hours)[index];
    if (open === close) {
      acc[printHoras[index]] = 'CLOSED';
      return acc;
    }
    if (close > 12) close -= 12;
    if (open > 12) open -= 12;
    acc[printHoras[index]] = `Open from ${open}am until ${close}pm`;
    return acc;
  }, {});
}
function returnOneDay(dayName, dia) {
  let string = '';
  const objDay = {};
  const { open, close } = hours[dayName];
  if (open === close) {
    string = 'CLOSED';
    objDay[dia] = string;
    return objDay;
  }
  string = `Open from ${open}am until ${close - 12}pm`;
  objDay[dia] = string;
  return objDay;
}
function getSchedule(dayName) {
  if (!dayName) return noParametersExecute(dayName);
  let retorno;
  Object.keys(hours).forEach((dia) => {
    if (dayName === dia) {
      retorno = returnOneDay(dayName, dia);
    }
  });
  return retorno;
}

function getOldestFromFirstSpecies(id) {
  const specieResponsibility = employees.find((employee) => employee.id === id).responsibleFor[0];
  console.log(specieResponsibility);
  const fistSpecie = species.find((specie) => specie.id === specieResponsibility);
  console.log(fistSpecie);
  const retorno = fistSpecie.residents.reduce((acc, cur) => {
    if (cur.age > acc.age) {
      acc.name = cur.name;
      acc.sex = cur.sex;
      acc.age = cur.age;
    }
    return acc;
  }, { name: '', sex: '', age: 0 });
  return [retorno.name, retorno.sex, retorno.age];
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
