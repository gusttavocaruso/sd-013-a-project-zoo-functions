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
  // seu código aqui
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
console.log(getSchedule('tuesday'));
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
    prices[key] = Math.round(keys[i] * 2) / 2 - 0.01;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {
  //
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
