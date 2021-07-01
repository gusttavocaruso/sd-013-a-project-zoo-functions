const data = require('./data');
const { hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  // seu código aqui
  const animals = [];
  ids.forEach((elem) => {
    data.species.forEach((specie) => {
      if (specie.id === elem) {
        animals.push(specie);
      }
    });
  });
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  let response;
  return data.species.some((specie) => {
    if (specie.name === animal) {
      response = specie.residents.every((resident) => resident.age > age);
    }
    return response;
  });
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return data.species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
  }
  return data.species.reduce((acc, crr) => {
    if (crr.name === animal) {
      return crr.residents.length;
    }
    return acc;
  }, 0);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  let sum = 0;
  const adults = entrants.Adult;
  const seniors = entrants.Senior;
  const child = entrants.Child;

  if (adults !== undefined) {
    sum += data.prices.Adult * adults;
  }
  if (seniors !== undefined) {
    sum += data.prices.Senior * seniors;
  }
  if (child !== undefined) {
    sum += data.prices.Child * child;
  }
  return sum;
}

function getAnimalMap(options) {
  // seu código aqui
}

const weekSchedule = () => {
  const object = {};
  const days = Object.keys(hours);
  days.forEach((day) => {
    if (hours[day].close === 18) {
      object[day] = `Open from ${hours[day].open}am until 6pm`;
    } else if (hours[day].close === 20) {
      object[day] = `Open from ${hours[day].open}am until 8pm`;
    } else if (hours[day].close === 22) {
      object[day] = `Open from ${hours[day].open}am until 10pm`;
    } else {
      object[day] = 'CLOSED';
    }
  });
  return object;
};

const daySchedule = (day) => {
  const object = {};
  if (hours[day].close === 18) {
    object[day] = `Open from ${hours[day].open}am until 6pm`;
  } else if (hours[day].close === 20) {
    object[day] = `Open from ${hours[day].open}am until 8pm`;
  } else if (hours[day].close === 22) {
    object[day] = `Open from ${hours[day].open}am until 10pm`;
  } else {
    object[day] = 'CLOSED';
  }
  return object;
};

function getSchedule(dayName) {
  // seu código aqui
  let response;
  if (dayName === undefined) {
    response = weekSchedule();
  } else {
    response = daySchedule(dayName);
  }
  return response;
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
