const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  let animal = [];
  if (ids.length === 0) {
    return animal;
  }
  animal = species.filter((specie) => ids.some((id) => specie.id === id));
  return animal;
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function getAnimalsOlderThan(animal, age) {
  const animalElement = species.find((specie) => specie.name === animal);
  const result = animalElement.residents
    .every((animalResident) => animalResident.age >= age);

  return result;
}
getAnimalsOlderThan('otters', 7);

function getEmployeeByName(employeeName = undefined) {
  if (employeeName === undefined) {
    return {};
  }
  const employees = data.employees
    .filter((loy) => loy.firstName.includes(employeeName) || loy.lastName.includes(employeeName));
  return employees[0];
}
getEmployeeByName('Emery');

function createEmployee(personalInfo = undefined, associatedWith = undefined) {
  if (personalInfo === undefined || associatedWith === undefined) {
    return {};
  }
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}
createEmployee({
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
});

function isManager(id) {
  const manager = data.employees
    .filter((worker) => worker.managers[0] === id);
  if (manager.length === 0) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(speciesAnimals = undefined) {
  if (speciesAnimals === undefined) {
    const animals = {};
    species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  const animal = species
    .find((specie) => specie.name === speciesAnimals).residents.length;
  return animal;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult, Child, Senior } = data.prices;
  const { Adult: a = 0, Child: c = 0, Senior: s = 0 } = entrants;
  const costs = [a * Adult, c * Child, s * Senior];
  const finalCost = costs.reduce((acc, current) => acc + current, 0);
  return finalCost;
}
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName = undefined) {
  // const schedule = data.hours
  // console.log(schedule);
  // if (dayName === undefined) {
  //   return schedule;
  // }
  // const result = {};
  // const output = Object.entries(schedule).find((day) => day.includes(dayName));
  // console.log(output);
  // const a = output.reduce((key, value) => result[key] = value);
  // console.log(result);

  // Object.entries(schedule).find((day) => day.includes(dayName))
  //   .reduce((key, value) => {
  //     result[key] = value;
  //     return result;
  //   });
}

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((worker) => worker.id === id).responsibleFor[0];
  const oldestAnimal = species
    .find((specie) => specie.id === animal).residents.sort((a, b) => b.age - a.age)[0];
  const result = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return result;
}

function increasePrices(percentage) {
  const { Adult: adult, Child: child, Senior: senior } = data.prices;
  data.prices.Adult = Math.ceil((adult + (adult * (percentage / 100))) * 100) / 100;
  data.prices.Child = Math.ceil((child + (child * (percentage / 100))) * 100) / 100;
  data.prices.Senior = Math.ceil((senior + (senior * (percentage / 100))) * 100) / 100;
  return data.prices;
}

function getByIdOrName(idOrName) {
  const keys = Object.keys(data.employees[0]);
  const keyObj = keys.find((key) => data.employees
    .find((worker) => worker[key] === idOrName));
  const employee = data.employees.find((worker) => worker[keyObj] === idOrName);
  const animals = species
    .filter((specie) => employee.responsibleFor
      .some((id) => specie.id === id))
    .map((animalName) => animalName.name);
  const a = {};
  if (keyObj === 'firstName') {
    a[`${employee.firstName} ${employee.lastName}`] = animals.sort();
    return a;
  }
  a[`${employee.firstName} ${employee.lastName}`] = animals;
  return a;
}
function getEmployeeCoverage(idOrName = undefined) {
  // This if was inspired by Juliette Beaudet's code
  // https://github.com/tryber/sd-05-block8-project-zoo-functions/pull/10/files
  if (!idOrName) {
    const employeeAnimal = {};
    data.employees.forEach((worker) => {
      const fullName = `${worker.firstName} ${worker.lastName}`;
      employeeAnimal[fullName] = worker.responsibleFor.map((ids) => species
        .find((specie) => specie.id === ids).name);
    });
    return employeeAnimal;
  }
  return getByIdOrName(idOrName);
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
