const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return ids.map((param) => data.species.find((section) => section.id === param));
}

function getAnimalsOlderThan(specie, minAge) {
  const section = data.species.find((block) => block.name === specie);
  const animals = section.residents.every((animal) => animal.age >= minAge);
  return animals;
}

function getEmployeeByName(employeeName = {}) {
  if (Object.values(employeeName).length === 0) {
    return employeeName;
  }
  let human = data.employees.find((person) => person.firstName === employeeName);
  if (human === undefined) {
    human = data.employees.find((person) => person.lastName === employeeName);
  }
  return human;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((human) => human.managers.some((adult) => adult === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species !== undefined) {
    const animals = data.species.find((animal) => animal.name === species);
    return animals.residents.length;
  }
  const animalsQuantities = data.species.reduce((previous, current) => {
    const add = previous;
    add[current.name] = current.residents.length;
    return previous;
  }, {});
  return animalsQuantities;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const { Adult: Ad, Senior: Se, Child: Ch } = data.prices;
  return (Adult * Ad) + (Senior * Se) + (Child * Ch);
}

function getAnimalMap({ includeNames = false, sorted = false, sex = false } = false) {
  const mapAnimals = data.species.reduce((acc, crt) => {
    if (acc[crt.location] !== undefined) {
      acc[crt.location].push(crt.name);
    } else {
      acc[crt.location] = [];
      acc[crt.location].push(crt.name);
    }
    return acc;
  }, {});
  return mapAnimals;
}
// if (includeNames = true) {
//   Object.keys(mapAnimals).forEach((element) => {
//     mapAnimals[element] = mapAnimals[element].map((curr) => {
//       const sectionAnimal = data.species.find((element) => element.name === curr);
//       const arr = sectionAnimal.residents.map((nam) => `${nam.name}`);
//       return { [curr]: arr };
//     });
//   });
// }

// console.log(getAnimalMap({ includeNames: true }));

function getSchedule(dayName) {
  const dataHour = { ...data.hours };
  Object.entries(dataHour).forEach((arr) => {
    dataHour[arr[0]] = `Open from ${arr[1].open}am until ${arr[1].close - 12}pm`;
    if (arr[1].open === arr[1].close) {
      dataHour[arr[0]] = 'CLOSED';
    }
  });
  return (dayName !== undefined) ? { [dayName]: dataHour[dayName] } : dataHour;
}

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id);
  const animals = data.species.find((animal) => animal.id === person.responsibleFor[0]);
  const oldest = animals.residents.reduce((old, curr) => ((old.age < curr.age) ? curr : old));
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((element) => {
    data.prices[element] += (data.prices[element] * (percentage / 100));
    data.prices[element] = Math.round(data.prices[element] * 100) / 100;
  });
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  const employees = data.employees.reduce((acc, curr) => {
    const arr = curr.responsibleFor.map((element) => {
      const pet = data.species.find((animal) => animal.id === element);
      return pet.name;
    });
    acc[`${curr.firstName} ${curr.lastName}`] = arr;
    return acc;
  }, {});
  if (idOrName !== undefined) {
    let employee = data.employees.find((worker) => worker.id === idOrName);
    if (employee === undefined) employee = getEmployeeByName(idOrName);
    const tempStr = `${employee.firstName} ${employee.lastName}`;
    return { [tempStr]: employees[tempStr] };
  }
  return employees;
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
