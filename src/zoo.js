const data = require('./data');

function getSpeciesByIds(...ids) {
  const control = [];
  if (ids) {
    data.species.forEach((arrayObjects) => {
      ids.forEach((parametros) => {
        if (arrayObjects.id === parametros) {
          control.push(arrayObjects);
        }
      });
    });
  }
  return control;
}

function getAnimalsOlderThan(animal, age) {
  let control = true;
  data.species.forEach((arrayObjects) => {
    if (animal === arrayObjects.name) {
      arrayObjects.residents.forEach((animals) => {
        if (age > animals.age) {
          control = false;
        }
      });
    }
  });
  return control;
}

function getEmployeeByName(employeeName) {
  let control = {};
  if (employeeName) {
    data.employees.forEach((info) => {
      if ((info.firstName === employeeName) || (info.lastName === employeeName)) {
        control = info;
      }
    });
  }
  return control;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.keys(personalInfo).forEach((key, i) => {
    newObject[key] = Object.values(personalInfo)[i];
  });
  Object.keys(associatedWith).forEach((key, i) => {
    newObject[key] = Object.values(associatedWith)[i];
  });
  return newObject;
}

function isManager(id) {
  let control = false;
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (id === manager) {
        control = true;
      }
    });
  });
  return control;
}

function addEmployee(...parametros) {
  const newObjects = {};
  Object.keys(data.employees[0]).forEach((employee, i) => {
    if (parametros[i]) {
      newObjects[employee] = parametros[i];
    } else {
      newObjects[employee] = [];
    }
  });
  data.employees.push(newObjects);
}

function countAnimals(especies) {
  const objects = {};
  let countSpecies = 0;
  if (especies) {
    data.species.forEach((specie) => {
      if (especies === specie.name) {
        countSpecies = specie.residents.length;
      }
    });
    return countSpecies;
  }
  data.species.forEach((specie) => {
    objects[specie.name] = specie.residents.length;
  });
  return objects;
}

function calculateEntry(entrants) {
  let soma = 0;
  if ((!entrants) || (Object.keys(entrants).length === 0)) return 0;
  Object.keys(entrants).forEach((entrant, i) => {
    Object.keys(data.prices).forEach((price, i2) => {
      if (entrant === price) {
        soma += Object.values(entrants)[i] * Object.values(data.prices)[i2];
      }
    });
  });
  return soma;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const control = {};
  const mensagem = (open, close, hour) => {
    control[hour] = (hour !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
  };
  Object.keys(data.hours).forEach((hour) => {
    const open = Object.values(data.hours[hour])[0];
    const close = Object.values(data.hours[hour])[1] - 12;
    if (!dayName) {
      control[hour] = (hour !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
    } else if (dayName === hour) {
      mensagem(open, close, hour);
    }
  });
  return control;
}

function getOldestFromFirstSpecies(id) {
  const capture = [];
  const colaborador = data.employees.find((employee) => employee.id === id);
  const ordem = [];
  colaborador.responsibleFor.forEach((idAnimals) => {
    capture.push(data.species.find((specie) => specie.id === idAnimals));
  });
  capture.forEach((animal) => {
    ordem.push(animal.residents.sort((a, b) => b.age - a.age));
  })
  const topList = [];
  ordem.forEach((top) => {
    topList.push(top[0]);
  });
  const oldest = topList.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]).map((element) => element);
}

function increasePrices(percentage) {
  const newPrices = Object.values(data.prices).map((price) => price * (1 + (percentage / 100) / 1));
  Object.keys(data.prices).forEach((price, i) => {
    data.prices[price] = Number((newPrices[i] + 0.005).toFixed(2));
  })
  return data.prices;
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
