const { employees, species, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, animalAge) {
  return (
    species.filter(
      ({ name, residents }) =>
        name === animal && residents.every(({ age }) => age >= animalAge),
    ).length > 0
  );
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (person) =>
      person.firstName === employeeName || person.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((idNumber) => idNumber.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees;
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => speciesName === name).residents.length;
  }
  return species.reduce((acc, { name, residents }) => {
    if (!acc[name]) acc[name] = 0;

    acc[name] = residents.length;

    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).reduce((acc, [key, value]) => {
    const multi = prices[key] * value;
    let aux = acc;
    aux += multi;
    return aux;
  }, 0);
}

function getAnimalMap({ sex, sorted, includeNames }) {}

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

function getOldestFromFirstSpecies(receivedId) {
  const { responsibleFor } = employees.find(({ id }) => id === receivedId);
  const localSpecies = getSpeciesByIds(responsibleFor[0]);
  const r1 = localSpecies.flatMap(({ residents }) => residents);
  const r2 = r1.find(({ age }) => age === Math.max(...r1.map(({ age: age1 }) => age1)));
  return Object.values(r2);
}

function increasePrices(percentage) {
  const multi = `1.${percentage}`;
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round((prices[key] * multi) * 100) / 100;
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
