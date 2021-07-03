const data = require('./data');
const { employees, prices, species } = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (ids.length === 0) return result;
  ids.forEach((id) => data.species.map((specie) => (specie.id === id ? result.push(specie) : id)));
  return result;
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.find(({ name }) => name === animal);
  return animalSpecie.residents.every(({ age: residentAge }) => residentAge > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { Adult: adult, Senior: senior, Child: child } = entrants;
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;
  let total = 0;
  if (adult) {
    total += adultPrice * adult;
  }
  if (senior) {
    total += seniorPrice * senior;
  }
  if (child) {
    total += childPrice * child;
  }
  return total;
}

function getAnimalMap(options) {
  // const result = data.species.map((specie) => {
  //   let animals = data.species.filter((animal) => animal.location === specie.location)
  //   animals = animals.map((animal) => animal.name);
  //   return {`${specie.location}`: `${animals}`};
  // });
}

// USAR Keys
const scheduleWithoutParameter = (weekDays) => {
  const schedule = {};
  weekDays.forEach((day) => {
    if (day[0] === 'Monday') {
      schedule[day[0]] = 'CLOSED';
    } else {
      schedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
  });
  return schedule;
};

function getSchedule(dayName) {
  let schedule = {};
  const weekDays = Object.entries(data.hours);
  if (!dayName) {
    return scheduleWithoutParameter(weekDays);
  }

  schedule = weekDays.find((day) => day[0] === dayName);
  if (schedule[0] === 'Monday') return { [schedule[0]]: 'CLOSED' };
  const phrase = `Open from ${[schedule[1].open]}am until ${[schedule[1].close] - 12}pm`;
  return { [schedule[0]]: phrase };
}

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === animalId).residents;
  animals.sort((a, b) => b.age - a.age);
  const { name, sex, age } = animals[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const ticketPrices = Object.keys(prices);
  ticketPrices.forEach((ticket) => {
    (prices[ticket] = Math.round((prices[ticket] * (1 + percentage / 100)) * 100) / 100).toFixed();
  });
}

const employeeCoverageWithoutParam = () => {
  const objectResponsibleFor = {};
  employees.forEach((employee) => {
    const animals = employee.responsibleFor.map((animalID) => {
      const result = data.species.find((specie) => specie.id === animalID).name;
      return result;
    });
    objectResponsibleFor[`${[employee.firstName]} ${[employee.lastName]}`] = animals;
  });
  return objectResponsibleFor;
};

const employeeCoverageWithID = (idOrName) => {
  const objectResponsibleFor = {};
  const employeeFound = employees.find((employee) => employee.id === idOrName);
  const animals = employeeFound.responsibleFor.map((animalId) => {
    const animal = data.species.find((specie) => specie.id === animalId).name;
    return animal;
  });
  objectResponsibleFor[`${employeeFound.firstName} ${employeeFound.lastName}`] = animals;
  return objectResponsibleFor;
};

const employeeCoverageWithName = (name) => {
  const objectResponsibleFor = {};
  const employeeFound = employees.find((employee) => {
    const result = employee.firstName === name || employee.lastName === name;
    return result;
  });
  const animals = employeeFound.responsibleFor.map((animalId) => {
    const animal = data.species.find((specie) => specie.id === animalId).name;
    return animal;
  });
  objectResponsibleFor[`${employeeFound.firstName} ${employeeFound.lastName}`] = animals;
  return objectResponsibleFor;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return employeeCoverageWithoutParam();
  const idOrNot = idOrName.split('').some((character) => character === '-');
  if (idOrNot === true) return employeeCoverageWithID(idOrName);
  return employeeCoverageWithName(idOrName);
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
