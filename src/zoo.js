const { prices, hours, species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((idAtual) => data.species.find((specie) => specie.id === idAtual));
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);
  return nomeAnimal.residents.every((ageAnimal) => ageAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employe) => employe.firstName === employeeName
  || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  if (manager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployer = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addEmployer);
}

function countAnimals(species1) {
  if (!species1) {
    const objectAnimal = {};
    data.species.forEach((animal) => {
      objectAnimal[animal.name] = animal.residents.length;
    });
    return objectAnimal;
  }
  return data.species.find((animal) => animal.name === species1).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const valorTotal = ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
  return valorTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const keys = Object.keys(hours);
  const objectDay = {};
  keys.forEach((day) => {
    if (day !== 'Monday') {
      objectDay[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      objectDay[day] = 'CLOSED';
    }
  });
  if (dayName) {
    return { [dayName]: objectDay[dayName],
    };
  }
  return objectDay;
}

function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.find((emplo) => emplo.id === id);
  const animal1 = data.species.find((animal) => animal.id === employeeId.responsibleFor[0]);
  const oldAnimal = animal1.residents.sort((animalA, animalB) => animalB.age - animalA.age);
  const arrayValor = Object.values(oldAnimal[0]);
  return arrayValor;
}

function increasePrices(percentage) {
  const percent = (percentage / 100) + 1;
  const newPrice = Object.keys(prices);
  newPrice.forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] * percent) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  // Função desenvolvida com a Bianca na monitoria
  const listEmployeeAnimals = data.employees.reduce((acc, employee) => {
    const nameEmploye = `${employee.firstName} ${employee.lastName}`;
    const listAnimals = employee.responsibleFor;
    acc[nameEmploye] = listAnimals.map((id) => data.species
      .find((specie) => specie.id === id).name);
    return acc;
  }, {});
  // console.log(listEmployeeAnimals);
  if (!idOrName) return listEmployeeAnimals;

  const foundEmployee = data.employees.find((employee) =>
    employee.id === idOrName
      || employee.firstName === idOrName || employee.lastName === idOrName);
  const foundEspecies = foundEmployee.responsibleFor;
  return { [`${foundEmployee.firstName} ${foundEmployee.lastName}`]: foundEspecies.map((id) =>
    species.find((specie) => specie.id === id).name) };
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
