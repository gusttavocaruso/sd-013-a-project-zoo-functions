const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animals = [];
  ids.forEach((id) => {
    const especies = data.species.find((species) => species.id === id);
    animals.push(especies);
  });
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species.find((specie) => specie.name === animal);
  return especies.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((funcionario) => funcionario.firstName
  === employeeName || funcionario.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const merge = { ...personalInfo, ...associatedWith };
  return merge;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((gerente) => gerente.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(novoFuncionario);
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    return data.species.reduce((acumulador, valorAtual) => {
      const count = acumulador;
      count[valorAtual.name] = valorAtual.residents.length;
      return count;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents
    .length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const price = Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior;
  return price;
}

function getAnimalMap(options) {
  // seu código aqui
}

function returnn(open, close) {
  const closePm = close - 12;
  if (open === 0 && close === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${closePm}pm`;
}

function getSchedule(dayName) {
  // seu código aqui
  if (dayName) {
    const daily = data.hours[dayName];
    return {
      [dayName]: returnn(daily.open, daily.close),
    };
  }
  const allTime = {};
  const keys = Object.keys(data.hours);
  keys.forEach((key) => {
    const { hours } = data;
    const day = hours[key];
    allTime[key] = returnn(day.open, day.close);
  });
  return allTime;
}

function getOldestFromFirstSpecies(id) {
  const find = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const specieOne = data.species.find((specie) => specie.id === find).residents;
  const old = specieOne.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  return Object.values(old);
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((people) => {
    data.prices[people] = Math.round(data.prices[people] * (percentage / 100 + 1) * 100) / 100;
  });
}

function getNameSpecies(employee) {
  const specieName = [];
  employee.responsibleFor.forEach((i) => {
    const specieFind = data.species.find((specie) => specie.id === i);
    specieName.push(specieFind.name);
  });
  return specieName;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    const objectEmployee = {};
    data.employees.forEach((employee) => {
      const key = `${employee.firstName} ${employee.lastName}`;
      const specieName = getNameSpecies(employee);
      objectEmployee[key] = specieName;
    });
    return objectEmployee;
  }
  const employeeName = data.employees.find(
    (name) => name.id === idOrName || name.firstName === idOrName || name.lastName === idOrName,
  );
  const specieName = getNameSpecies(employeeName);
  return { [`${employeeName.firstName} ${employeeName.lastName}`]: specieName };
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
