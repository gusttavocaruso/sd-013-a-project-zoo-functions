const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrSpecie = [];
  ids.forEach((id) => data.species.forEach((specie) => {
    if (specie.id === id) arrSpecie.push(specie);
  }));
  return arrSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = data.species.filter((specie) => specie.name === animal);
  return selectedAnimal[0].residents.every((ser) => ser.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = data
    .employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName);
  const [funcionario] = employee;
  if (typeof funcionario === 'undefined') return {};
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const manager = data.employees.find((employee) => employee
    .managers.some((check) => check === id));
  if (manager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (typeof species === 'undefined') {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const allSelectedAnimal = data.species.filter((selected) => selected.name === species);
  return allSelectedAnimal[0].residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') return 0;
  const { Adult, Child, Senior } = entrants;
  const adultValue = Adult * data.prices.Adult;
  const childValue = Child * data.prices.Child;
  const seniorValue = Senior * data.prices.Senior;
  let totalValue = 0;
  if (adultValue) totalValue += adultValue;
  if (childValue) totalValue += childValue;
  if (seniorValue) totalValue += seniorValue;
  totalValue.toFixed(2);
  return totalValue;
}

function getMapWithoutSorting(locations) {
  data.species.forEach((specie) => {
    const animalObject = {}; const arrayNomes = [];
    const localAnimal = specie.location;
    specie.residents.forEach((resident) => arrayNomes.push(resident.name));
    animalObject[specie.name] = arrayNomes;
    locations[localAnimal].push(animalObject);
  });
}

function getMapSorting(locations) {
  data.species.forEach((specie) => {
    const animalObject = {}; const arrayNomes = [];
    const localAnimal = specie.location;
    specie.residents.forEach((resident) => arrayNomes.push(resident.name));
    arrayNomes.sort();
    animalObject[specie.name] = arrayNomes;
    locations[localAnimal].push(animalObject);
  });
}

function getMapSexSorted(locations, options) {
  data.species.forEach((specie) => {
    const animalObject = {};
    const arrayNomes = [];
    const localAnimal = specie.location;
    specie.residents.forEach((resident) => {
      if (resident.sex === options.sex) {
        arrayNomes.push(resident.name);
      }
    });
    arrayNomes.sort();
    animalObject[specie.name] = arrayNomes;
    locations[localAnimal].push(animalObject);
  });
  return locations;
}

function getMapSex(locations, options) {
  data.species.forEach((specie) => {
    const animalObject = {};
    const arrayNomes = [];
    const localAnimal = specie.location;
    specie.residents.forEach((resident) => {
      if (options.sex === resident.sex) {
        arrayNomes.push(resident.name);
      }
    });
    animalObject[specie.name] = arrayNomes;
    locations[localAnimal].push(animalObject);
  });
  return locations;
}

function getMapRemaining(options = {}) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (options.includeNames === false) {
    data.species.forEach((specie) => {
      const localAnimal = specie.location; locations[localAnimal].push(specie.name);
    });
    return locations;
  }
  if (options.sorted === true) {
    return getMapSexSorted(locations, options);
  }
  return getMapSex(locations, options);
}

function getAnimalMap(options = {}) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (options.includeNames === undefined) {
    data.species.forEach((specie) => {
      const localAnimal = specie.location; locations[localAnimal].push(specie.name);
    });
    return locations;
  }
  if (options.sorted === true && options.sex === undefined) {
    getMapSorting(locations);
    return locations;
  }
  if (options.sex === undefined) {
    getMapWithoutSorting(locations);
    return locations;
  }
  return getMapRemaining(options);
}

function getSchedule(dayName) {
  // seu código aqui
  const dias = Object.keys(data.hours);
  const paresDias = Object.entries(data.hours);
  if (dias.includes(dayName)) {
    const resultado1dia = data.hours[dayName];
    const { open, close } = resultado1dia;
    const result = {};
    result[dayName] = `Open from ${open}am until ${close - 12}pm`;
    if (dayName === 'Monday') result[dayName] = 'CLOSED';
    return result;
  }
  const result = paresDias.reduce((acc, curr, index) => {
    acc[dias[index]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
  result.Monday = 'CLOSED';
  return result;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((employeee) => employeee.id === id);
  const selectedAnimalId = employee.responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === selectedAnimalId);
  const result = [];
  let age = 0;
  animals.residents.forEach((resident) => {
    if (resident.age > age) age = resident.age;
    return age;
  });
  const animal = animals.residents.find((resident) => resident.age === age);
  result.push(animal.name, animal.sex, animal.age);
  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  const increaseValue = (percentage / 100) + 1;
  data.prices.Adult *= increaseValue;
  data.prices.Adult = Math.round(data.prices.Adult * 100) / 100;
  data.prices.Senior *= increaseValue;
  data.prices.Senior = Math.round(data.prices.Senior * 100) / 100;
  data.prices.Child *= increaseValue;
  data.prices.Child = Math.round(data.prices.Child * 100) / 100;
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (typeof idOrName === 'undefined') {
    return data.employees.reduce((acc, curr) => {
      const animalsResposible = curr.responsibleFor.map((id) => data.species
        .find((specie) => specie.id === id).name);
      acc[`${curr.firstName} ${curr.lastName}`] = animalsResposible;
      return acc;
    }, {});
  }
  const selectedEmployee = data.employees
    .find((e) => e.firstName === idOrName || e.id === idOrName || e.lastName === idOrName);
  const animalsResposible = selectedEmployee.responsibleFor.map((id) => data.species
    .find((specie) => specie.id === id).name);
  const result = {};
  result[`${selectedEmployee.firstName} ${selectedEmployee.lastName}`] = animalsResposible;
  return result;
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
