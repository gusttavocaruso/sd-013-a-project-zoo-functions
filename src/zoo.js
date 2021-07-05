const moment = require('moment');
const data = require('./data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
};

const getAnimalsOlderThan = (animal, age) => data.species.find(({ name }) => name === animal)
  .residents.every((resident) => resident.age > age);

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) => firstName === employeeName
    || lastName === employeeName);
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (species) => {
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === species).residents.length;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult)
    + (Child * data.prices.Child)
    + (Senior * data.prices.Senior);
};

const createObjSpeciesWithResidents = (speciesName, speciesResidents, options) => {
  const { sorted, sex: residentSex } = options;
  const obj = {};
  let residents = speciesResidents;

  if (residentSex) residents = speciesResidents.filter(({ sex }) => sex === residentSex);
  residents = residents.map((resident) => resident.name);
  if (sorted) residents.sort();
  obj[speciesName] = residents;
  return obj;
};

const mapSpecies = (species) => species.map((i) => i.name);

const mapSpeciesWithResidents = (species, options) => species.map(
  ({ name, residents }) => createObjSpeciesWithResidents(name, residents, options),
);

const setLocation = (options, acc, location) => {
  const { includeNames } = options;
  const speciesByLocation = data.species.filter((species) => species.location === location);

  if (!includeNames) {
    acc[location] = mapSpecies(speciesByLocation);
  } else {
    acc[location] = mapSpeciesWithResidents(speciesByLocation, options);
  }

  return acc;
};

const getAnimalMap = (options) => {
  const { includeNames = false, sorted = false, sex = false } = options || {};
  const consolidatedOptions = { includeNames, sorted, sex };

  return data.species.reduce((acc, { location }) => {
    // Process each location just one time
    if (!Object.prototype.hasOwnProperty.call(acc, location)) {
      setLocation(consolidatedOptions, acc, location);
    }
    return acc;
  }, {});
};

const formatSchedule = (start, end) => {
  if (!start && !end) {
    return 'CLOSED';
  }
  const open = moment(start, 'HH');
  const close = moment(end, 'HH');
  return `Open from ${open.format('ha')} until ${close.format('ha')}`;
};

const getSchedule = (dayName = false) => {
  const { hours } = data;
  const schedule = {};

  if (!dayName) {
    return Object.entries(hours).reduce((acc, entry) => {
      acc[entry[0]] = formatSchedule(entry[1].open, entry[1].close);
      return acc;
    }, schedule);
  }

  schedule[dayName] = formatSchedule(hours[dayName].open, hours[dayName].close);
  return schedule;
};

const getOldestFromFirstSpecies = (id) => {
  const { employees, species } = data;
  const speciesId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstSpecies = species.find((item) => item.id === speciesId);
  const oldest = firstSpecies.residents.reduce((acc, cur) => {
    if (acc.age < cur.age) {
      return cur;
    }
    return acc;
  });
  return Object.values(oldest);
};

const increasePrices = (percentage) => {
  Object.entries(data.prices).forEach(([key, value]) => {
    const newPrice = value * (percentage / 100 + 1);
    data.prices[key] = Math.round(newPrice * 100) / 100;
  });
};

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
