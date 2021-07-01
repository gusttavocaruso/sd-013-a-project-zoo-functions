const data = require('./data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const speciesById = [];

  ids.forEach((id) => {
    const result = species.filter((specie) => specie.id === id);
    speciesById.push(...result);
  });

  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const currentSpecie = species.find((specie) => specie.name === animal);

  const { residents } = currentSpecie;
  const hasMinAge = residents.every((resident) => resident.age > age);

  return hasMinAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const { employees } = data;
  const employeeData = employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return employee;
    }
    return null;
  });

  return employeeData;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const { employees } = data;

  const currentEmployee = employees.some((employee) => {
    const { managers } = employee;
    const isInManagerList = managers.find((manager) => manager === id);

    return isInManagerList;
  });

  return currentEmployee;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const { species: speciesData } = data;

  if (!species) {
    const speciesCount = speciesData.reduce((acc, specie) => {
      const { name, residents } = specie;
      acc[name] = residents.length;
      return acc;
    }, {});
    return speciesCount;
  }

  const { residents } = speciesData.find((specie) => specie.name === species);
  const currentSpecieCount = residents.length;

  return currentSpecieCount;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const { prices: { Adult, Senior, Child } } = data;
  let total = 0;

  if (entrants.Adult) total += entrants.Adult * Adult;
  if (entrants.Senior) total += entrants.Senior * Senior;
  if (entrants.Child) total += entrants.Child * Child;

  return total;
}

function getAnimalMapByLocation(species) {
  const speciesByLocation = species.reduce((acc, specie) => {
    const { name, location } = specie;

    if (!acc[location]) acc[location] = [];

    acc[location].push(name);

    return acc;
  }, {});
  // console.log(speciesByLocation);
  return speciesByLocation;
}

function filterAnimalNamesBySex(residents, sex) {
  const filteredAnimals = residents.filter((resident) => resident.sex === sex);
  const animalsWithSelectedSex = filteredAnimals.map((filteredAnimal) => filteredAnimal.name);

  return animalsWithSelectedSex;
}

function getAnimalMapWithNames(species, sorted, sex) {
  const speciesWithNames = species.reduce((acc, specie) => {
    const { name, location, residents } = specie;

    if (!acc[location]) acc[location] = [];

    const AnimalNamesList = {};
    AnimalNamesList[name] = residents.map((resident) => resident.name);

    if (sex) AnimalNamesList[name] = filterAnimalNamesBySex(residents, sex);
    if (sorted) AnimalNamesList[name].sort();

    acc[location].push(AnimalNamesList);

    return acc;
  }, {});
  // console.log(speciesWithNames);
  return speciesWithNames;
}

function getAnimalMap(options = { includeNames: false }) {
  const { species } = data;
  let animalList = {};

  if (!options || !options.includeNames) {
    animalList = getAnimalMapByLocation(species);
  } else {
    const { sorted, sex } = options;
    animalList = getAnimalMapWithNames(species, sorted, sex);
  }

  return animalList;
}

function getScheduleOfWeek(hours) {
  const schedule = Object.entries(hours);

  const organizedSchedule = schedule.reduce((acc, currentDay) => {
    const [weekday, hour] = currentDay;
    acc[weekday] = `Open from ${hour.open}am until ${hour.close - 12}pm`;

    if (hour.open === 0 && hour.close === 0) {
      acc[weekday] = 'CLOSED';
    }
    return acc;
  }, {});

  return organizedSchedule;
}

function getScheduleOfDay(hours, dayName) {
  const { open, close } = hours[dayName];
  const scheduleOfDay = {};

  scheduleOfDay[dayName] = `Open from ${open}am until ${close - 12}pm`;
  if (open === 0 && close === 0) {
    scheduleOfDay[dayName] = 'CLOSED';
  }

  return scheduleOfDay;
}

function getSchedule(dayName) {
  const { hours } = data;
  let organizedSchedule;

  if (!dayName) {
    organizedSchedule = getScheduleOfWeek(hours);
  } else {
    organizedSchedule = getScheduleOfDay(hours, dayName);
  }

  return organizedSchedule;
}

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const { responsibleFor } = employees.find((employee) => employee.id === id);
  const [firstResponsible] = responsibleFor;

  const { residents } = species.find((specie) => specie.id === firstResponsible);

  const oldestAnimal = residents.reduce((acc, currentResident) => {
    if (currentResident.age > acc.age) {
      return currentResident;
    }
    return acc;
  });

  const oldestAnimalList = Object.values(oldestAnimal);

  return oldestAnimalList;
}

function increasePrices(percentage) {
  const { prices } = data;
  Object.entries(prices).forEach((currentPrice) => {
    const [peopleGroup, price] = currentPrice;
    prices[peopleGroup] = Number((price + Math.round(price * percentage) / 100).toFixed(2));
  });
  return prices;
}

function getAllEmployees(employees, species) {
  const allEmployees = employees.reduce((acc, currentEmployee) => {
    const { firstName, lastName, responsibleFor } = currentEmployee;
    acc[`${firstName} ${lastName}`] = responsibleFor.map((responsible) => {
      const { name } = species.find((specie) => specie.id === responsible);
      return name;
    });
    return acc;
  }, {});
  return allEmployees;
}

function getAllEmployeesByIdOrName(employees, idOrName, species) {
  const { firstName, lastName, responsibleFor } = employees.find((employee) => (
    employee.id === idOrName
  || employee.firstName === idOrName
  || employee.lastName === idOrName));

  const employeeResponsibleFor = {};
  employeeResponsibleFor[`${firstName} ${lastName}`] = responsibleFor.map((responsible) => {
    const { name } = species.find((specie) => specie.id === responsible);
    return name;
  });

  return employeeResponsibleFor;
}

function getEmployeeCoverage(idOrName) {
  const { employees, species } = data;
  if (!idOrName) {
    const allEmployees = getAllEmployees(employees, species);
    return allEmployees;
  }

  const employeeResponsibleFor = getAllEmployeesByIdOrName(employees, idOrName, species);
  // console.log(employeeResponsibleFor);
  return employeeResponsibleFor;
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
