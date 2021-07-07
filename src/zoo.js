const data = require('./data');

function getspecieByIds(...ids) {
  const control = [];
  if (ids) {
    data.specie.forEach((objects) => {
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

function getspecieByName(specieName) {
  let control = {};
  if (specieName) {
    data.species.forEach((objects) => {
      if ((objects.firstName === specieName) || (objects.lastName === specieName)) {
        control = objects;
      }
    });
  }
  return control;
}

function createspecie(...ids) {
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
  data.species.forEach((objects) => {
    objects.managers.forEach((arrayManagers) => {
      if (arrayManagers === id) {
        control = true;
      }
    });
  });
  return control;
}

function addspecie(...params) {
  const newObject = {};
  Object.keys(data.species[0]).forEach((days, i) => {
    if (params[i]) {
      newObject[days] = params[i];
    } else {
      newObject[days] = [];
    }
  });
  data.species.push(newObject);
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

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const control = {};
  const message = (days, open, close) => {
    control[days] = (days !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
  };
  Object.keys(data.hours).forEach((days) => {
    const open = Object.values(data.hours[days])[0];
    const close = Object.values(data.hours[days])[1];
    if (!dayName) {
      control[days] = (days !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
    } else if (dayName === days) {
      message(days, open, close);
    }
  });
  return control;
}

function getOldestFromFirstspecie(id) {
  const first = [];
  const older = [];
  const collaborator = data.species.find((specie) => specie.id === id);
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
  return max[0];
}

function increasePrices(percentage) {
  const newPrices = Object.values(data.prices).map((price) => price + (price * (percentage / 100)));
  Object.keys(data.prices).forEach((key, i) => {
    data.prices[key] = Math.round(newPrices[i] * 2) / 2 - 0.01;
  });
  return data.prices;
}

const emptyIdOrName = (newObject) => {
  let capture = [];
  data.species.forEach((specie) => {
    data.species.forEach((specie) => {
      if (specie.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${specie.firstName} ${specie.lastName}`] = capture;
    capture = [];
  });
};

const noEmptyIdOrName = (newObject, id, name, capture) => {
  if (id) {
    data.species.forEach((specie) => {
      if (id.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${id.firstName} ${id.lastName}`] = capture;
  } else if (name) {
    data.species.forEach((specie) => {
      if (name.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${name.firstName} ${name.lastName}`] = capture;
  }
};

function getspecieCoverage(idOrName) {
  const newObject = {};
  if (!idOrName) {
    emptyIdOrName(newObject);
  } else {
    const capture = [];
    const id = data.species.find((e) => e.id === emptyIdOrName);
    const name = data.species.find((e) => e.firstName === idOrName || e.lastName === idOrName);
    noEmptyIdOrName(newObject, id, name, capture);
  }
  return newObject;
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getspecieByIds,
  getspecieByName,
  getspecieCoverage,
  addspecie,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstspecie,
  increasePrices,
  createspecie,
};
