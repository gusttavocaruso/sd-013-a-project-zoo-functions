const data = require('./data');
const { employees, species, hours, prices} = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return species.filter((nome, index) => nome.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);

  return nomeAnimal.residents.every((ageAnimal) => ageAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const employeeSearch = employees.find((employ) => (employ.firstName === employeeName)
  || (employ.lastName === employeeName));
  return employeeSearch;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  if (manager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employ = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employ);
}

function countAnimals(difspecies) {
  const speciesCount = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return difspecies === undefined ? speciesCount : speciesCount[difspecies];
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
// seu código aqui
}

function getSchedule(dayName) {
  if (dayName) {
    const { open, close } = hours[dayName];
    return (open && close) ? {
      [dayName]: `Open from ${open}am until ${close - 12}pm`,
    } : {
      [dayName]: 'CLOSED',
    };
  }
  return {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
}

function getOldestFromFirstSpecies(id) {
  const finalSpecies = [];
  const animalsById = data.employees.find((empregado) => id === empregado.id).responsibleFor[0];
  const specificSpecies = data.species.find((especies) => especies.id === animalsById).residents;
  const ordenedAge = specificSpecies.sort((a, b) => b.age - a.age)[0];
  finalSpecies.push(ordenedAge.name, ordenedAge.sex, ordenedAge.age);
  return finalSpecies;
}

function increasePrices(percentage) {
  const values = Object.keys(data.prices);
  values.forEach((value) => {
    data.prices[value] = Math.round(data.prices[value] * (1 + percentage / 100) * 100) / 100;
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
