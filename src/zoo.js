const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const control = [];
  if (ids) {
    data.species.forEach((objects) => {
      ids.forEach((sentIds) => {
        if (objects.id === sentIds) {
          control.push(objects);
        }
      });
    });
  }
  return control;
}

function getAnimalsOlderThan(animal, age) {
  let control = true;
  const animalName = data.species.find((element) => element.name === animal);
  animalName.residents.forEach((resident) => {
    if (resident.age < age) {
      control = false;
    }
  });
  return control;
}

function getEmployeeByName(specieName) {
  let control = {};
  if (specieName) {
    data.employees.forEach((objects) => {
      if ((objects.firstName === specieName) || (objects.lastName === specieName)) {
        control = objects;
      }
    });
  }
  return control;
}

function createEmployee(...ids) {
  const newObject = {};
  ids.forEach((id) => {
    Object.keys(id).forEach((key, i) => {
      newObject[key] = Object.values(id)[i];
    });
  });
  return newObject;
}

function isManager(id) {
  let control = false;
  data.employees.forEach((objects) => {
    objects.managers.forEach((arrayManagers) => {
      if (arrayManagers === id) {
        control = true;
      }
    });
  });
  return control;
}

function addEmployee(...params) {
  const newObject = {};
  Object.keys(data.employees[0]).forEach((days, i) => {
    if (params[i]) {
      newObject[days] = params[i];
    } else {
      newObject[days] = [];
    }
  });
  data.employees.push(newObject);
}

function countAnimals(specie) {
  const newObject = {};
  let popularity = 0;
  if (specie) {
    data.species.forEach((objects) => {
      if (objects.name === specie) {
        popularity = objects.residents.length;
      }
    });
    return popularity;
  }
  data.species.forEach((objects) => {
    newObject[objects.name] = objects.residents.length;
  });
  return newObject;
}

function calculateEntry(entrants) {
  let sum = 0;
  if ((!entrants) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  Object.keys(entrants).forEach((entrant, i) => {
    Object.keys(data.prices).forEach((days, i2) => {
      if (entrant === days) {
        sum += Object.values(entrants)[i] * Object.values(data.prices)[i2];
      }
    });
  });
  return sum;
}

const emptyOptions = () => {
  const locations = [];
  const mapAnimals = {};
  let animals = [];
  data.species.forEach((specie) => {
    if (locations.indexOf(specie.location) === -1) {
      locations.push(specie.location);
    }
  });
  locations.forEach((location) => {
    data.species.forEach((specie) => {
      if (specie.location === location) {
        animals.push(specie.name);
      }
    });
    mapAnimals[location] = animals;
    animals = [];
  });
  return mapAnimals;
};

const noEmptyOptions = {
  includeNames: () => {
    const locations = [];
    const mapAnimals = {};
    const animals = [];
    data.species.forEach((specie) => {
      if (locations.indexOf(specie.location) === -1) {
        locations.push(specie.location);
      }
    });
    locations.forEach((location) => {
      mapAnimals[location] = animals;
    });
    return mapAnimals;
  },
  sorted: () => {
    return 'sorted';
  },
  sex: () => {
    return 'sex';
  },
};

function getAnimalMap(options) {
  Object.keys(options).forEach((option) => {
    Object.keys(noEmptyOptions).forEach((no) => {
      if (option === no) return noEmptyOptions[option]();
    });
  });
  if (!options) return emptyOptions();
}
const options = { includeNames: true };
console.log(getAnimalMap(options));
function getSchedule(dayName) {
  const control = {};
  const message = (days, open, close) => {
    control[days] = (days !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
  };
  Object.keys(data.hours).forEach((days) => {
    const open = Object.values(data.hours[days])[0];
    const close = Object.values(data.hours[days])[1] - 12;
    if (!dayName) {
      control[days] = (days !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
    } else if (dayName === days) {
      message(days, open, close);
    }
  });
  return control;
}

function getOldestFromFirstSpecies(id) {
  const first = [];
  const older = [];
  const collaborator = data.employees.find((collab) => collab.id === id);
  collaborator.responsibleFor.forEach((idsCollabs) => {
    first.push(data.species.find((specie) => specie.id === idsCollabs));
  });
  first.forEach((firsts) => {
    older.push(firsts.residents.sort((age1, age2) => age2.age - age1.age));
  });
  const arrayMax = [];
  older.forEach((arrays) => {
    arrayMax.push(arrays[0]);
  });
  const max = arrayMax.sort((age1, age2) => age2.age - age1.age);
  return Object.values(max[0]).map((e) => e);
}

function increasePrices(percentage) {
  const newPrices = Object.values(data.prices).map((price) => price * (1 + (percentage / 100) / 1));
  Object.keys(data.prices).forEach((key, i) => {
    data.prices[key] = Number((newPrices[i] + 0.005).toFixed(2));
  });
  return data.prices;
}

const emptyIdOrName = () => {
  const newObject = {};
  let capture = [];
  data.employees.forEach((employee) => {
    data.species.forEach((specie) => {
      if (specie.responsibleFor.indexOf(employee.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${employees.firstName} ${employees.lastName}`] = capture;
    capture = [];
  });
  return newObject;
};

const noEmptyIdOrName = (id, name) => {
  const newObject = {};
  if (id) {
    const capture = [];
    data.species.forEach((specie) => {
      if (id.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${id.firstName} ${id.lastName}`] = capture;
  } else if (name) {
    const capture = [];
    data.species.forEach((specie) => {
      if (name.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${name.firstName} ${name.lastName}`] = capture;
  }
  return newObject;
};

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const id = data.employees.find((e) => e.id === idOrName);
    const name = data.employees.find((e) => e.firstName === idOrName || e.lastName === idOrName);
    return noEmptyIdOrName(id, name);
  }
  return emptyIdOrName();
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
