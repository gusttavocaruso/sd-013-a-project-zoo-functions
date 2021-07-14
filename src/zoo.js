const data = require('./data');

function getSpeciesByIds(...ids) {
  const arr = [];
  ids.forEach((id) => {
    data.species.filter((specie) => {
      if (specie.id === id) {
        arr.push(specie);
      } return arr;
    });
  });
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  const dataAnimal = data.species.find((specie) => specie.name === animal);
  return dataAnimal.residents.every((residente) => residente.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee
      .lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {
    ...personalInfo,
    ...associatedWith,
  };
  return obj;
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  const manager = data.employees.find((employee) => employee.id === id);
  return manager.managers.includes(...managers);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }; return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const obj = {};
    const specieName = data.species.map((specie) => specie.name);
    const specieResidents = data.species.map((specie) => Object.keys(specie.residents).length);
    for (let OIndex = 0; OIndex < specieName.length; OIndex += 1) {
      const specieNi = specieName[OIndex];
      const speResiI = specieResidents[OIndex];
      obj[specieNi] = speResiI;
    } return obj;
  } return data.species.find((specie) => specie.name === species).residents.length;
}

function calback(entrantsInd, entrantsValue) {
  let total = 0;
  for (let o = 0; o < Object.keys(data.prices).length; o += 1) {
    if (entrantsInd === Object.keys(data.prices)[o]) {
      const result = entrantsValue * Object.values(data.prices)[o];
      total += result;
    }
  } return total;
}

function calculateEntry(entrants = 0) {
  let expected = 0;
  for (let i = 0; i < Object.keys(entrants).length; i += 1) {
    const entry = calback(Object.keys(entrants)[i], Object.values(entrants)[i]);
    expected += entry;
  } return expected;
}

function getAnimalMap(options) {

}

const calendário = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function getSchedule(dayName) {
  if (dayName === undefined) {
    return calendário;
  }
  const obj = {};
  const acharValor = calendário[dayName];
  obj[dayName] = acharValor;
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const animalFinder = data.species.find((specie) => findEmployee.responsibleFor[0] === specie.id);
  const sortAnimalF = animalFinder.residents.sort((a, b) => b.age - a.age)[0];
  return [sortAnimalF.name, sortAnimalF.sex, sortAnimalF.age];
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

const createNullParam = () => {
  let vazi = null;
  const obj = {};
  let arr = [];
  data.employees.forEach((employee) => {
    employee.responsibleFor
      .forEach((id) => data.species.find((specie) => {
        if (specie.id === id) {
          arr.push(specie.name);
        }
        vazi += vazi;
        return null;
      })); obj[`${employee.firstName} ${employee.lastName}`] = arr;
    arr = [];
  }); return obj;
};

const GetAnimals = (employee) => {
  const obj = {};
  let animals = [];
  const vazi = null;
  employee.responsibleFor.forEach((id) => data.species
    .find((specie) => {
      if (specie.id === id) {
        animals.push(specie.name);
      } return vazi;
    })); obj[`${employee.firstName} ${employee.lastName}`] = animals;
  animals = [];
  return obj;
};

const GetEmployee = (idorName) => {
  let employeeLet;
  const dataEmplo = data.employees.forEach((employee) => {
    if (employee.id === idorName
      || employee.firstName === idorName || employee.lastName === idorName) {
      employeeLet = employee;
    }
  });
  return GetAnimals(employeeLet);
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return createNullParam();
  }
  return GetEmployee(idOrName);
}
// data.species.find((element) => element.id === findAnimal[i]).name;

console.log(GetEmployee('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

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
