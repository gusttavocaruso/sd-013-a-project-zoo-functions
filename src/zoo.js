const data = require('./data');

const { species, employees, prices, hours } = data;

function getSpeciesByIds(...ids) {
  const controlador = [];
  if (ids) {
    data.species.forEach((elements) => {
      ids.forEach((par) => {
        if (elements.id === par) {
          controlador.push(elements);
        }
      });
    });
  }
  return controlador;
}

function getAnimalsOlderThan(animal, age) {
  let controlador = true;
  data.species.forEach((elements) => {
    if (animal === elements.name) {
      elements.residents.forEach((animals) => {
        if (age > animals.age) {
          controlador = false;
        }
      });
    }
  });
  return controlador;
}

function getEmployeeByName(employeeName) {
  let controlador = {};
  if (employeeName) {
    data.employees.forEach((info) => {
      if ((info.firstName === employeeName) || (info.lastName === employeeName)) {
        controlador = info;
      }
    });
  }
  return controlador;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.keys(personalInfo).forEach((key, index) => {
    newObject[key] = Object.values(personalInfo)[index];
  });
  Object.keys(associatedWith).forEach((key, index) => {
    newObject[key] = Object.values(associatedWith)[index];
  });
  return newObject;
}

function isManager(id) {
  let controle = false;
  employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager === id) {
        controle = true;
      }
    });
  });
  return controle;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciesNames) {
  const allAnimals = speciesNames.reduce((acc, current) => {
    acc[current.name] = current.resudents.length;

    return acc;
  }, {});
  if (!speciesNames) return allAnimals;
  return allAnimals[speciesNames];
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const newObjeto = {};
  const mensagem = (key, open, close) => {
    newObjeto[key] = (key !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
  };
  Object.keys(hours).forEach((key) => {
    const open = Object.values(hours[key])[0];
    const close = Object.values(hours[key])[1] - 12;
    if (!dayName) {
      newObjeto[key] = (key !== 'Monday') ? `Open from ${open}am until ${close}pm` : 'CLOSED';
    } else if (dayName === key) {
      mensagem(key, open, close);
    }
  });

  return newObjeto;
}

function getOldestFromFirstSpecies(id) {
  const primeiroAnimal = [];
  const oldArray = [];
  const select = [];
  const manager = employees.find((employee) => employee.id === id);
  manager.responsibleFor.forEach((animal) => {
    primeiroAnimal.push(species.find((specie) => specie.id === animal));
  });
  primeiroAnimal.forEach((orden) => {
    oldArray.push(orden.residents.sort((a, b) => b.age - a.age));
  });
  oldArray.forEach((old) => {
    select.push(old[0]);
  });
  const ordena = select.sort((a, b) => b.age - a.age);
  return Object.values(ordena[0]).map((element) => element);
}

function increasePrices(percentage) {
  const keys = Object.values(prices).map((price) => (price * (1 + (percentage / 100))) / 1);
  Object.keys(prices).forEach((key, i) => {
    prices[key] = Number((keys[i] + 0.005).toFixed(2));
  });
  return prices;
}

const empty = (newObject) => {
  let capture = [];
  employees.forEach((employee) => {
    species.forEach((specie) => {
      if (employee.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${employee.firstName} ${employee.lastName}`] = capture;
    capture = [];
  });
};

const noEmpty = (newObject, id, name) => {
  const capture = [];
  if (id) {
    species.forEach((specie) => {
      if (id.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${id.firstName} ${id.lastName}`] = capture;
  } else if (name) {
    species.forEach((specie) => {
      if (name.responsibleFor.indexOf(specie.id) !== -1) {
        capture.push(specie.name);
      }
    });
    newObject[`${name.firstName} ${name.lastName}`] = capture;
  }
};

function getEmployeeCoverage(idOrName) {
  const newObject = {};
  if (!idOrName) {
    empty(newObject);
  } else {
    const id = employees.find((employee) => employee.id === idOrName);
    const name = employees.find((emp) => emp.firstName === idOrName || emp.lastName === idOrName);
    noEmpty(newObject, id, name);
  }
  return newObject;
}
console.log(getEmployeeCoverage('Stephanie'));
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
