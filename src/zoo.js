const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return {};
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  if (data.employees.find((employee) => employee.managers.includes(id))) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  if (!speciesName) {
    return species.reduce((animals, specie) => {
      const allAnimals = animals;
      allAnimals[specie.name] = specie.residents.length;
      return allAnimals;
    }, {});
  }
  const { residents } = species.find((specie) => specie.name === speciesName);
  return residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function localizacoes() {
  return ['NE', 'NW', 'SE', 'SW', 'N', 'S', 'E', 'W'];
}

function animaisFiltadrosLocalizacao(location) {
  return species.filter((specie) => specie.location === location);
}

function animaisPorLocalizacao(locations) {
  const animaisPorLocal = {};
  locations.forEach((location) => {
    const filterSpecies = animaisFiltadrosLocalizacao(location).map((obj) => obj.name);
    if (filterSpecies.length !== 0) animaisPorLocal[location] = filterSpecies;
  });
  return animaisPorLocal;
}

function animaisPorSexo(obj, sex) {
  return obj.residents.filter((resident) => {
    const filtro = sex !== undefined;
    return filtro ? resident.sex === sex : true
  })
    .map((objResidents) => objResidents.name);
}

function localizacaoEnome(locations, sorted, sex) {
  const animalPorLocal = {};
  locations.forEach((location) => {
    const filterSpecies = animaisFiltadrosLocalizacao(location).map((obj) => {
      const specieName = obj.name;
      const residents = animaisPorSexo(obj, sex);
      if (sorted) residents.sort();
      return { [specieName]: residents };
    });
    if (filterSpecies.length !== 0) animalPorLocal[location] = filterSpecies;
  });

  return animalPorLocal;
}

function getAnimalMap(options) {
  const locations = localizacoes();
  if (!options) return animaisPorLocalizacao(locations);
  const { includeNames = false, sorted = false, sex } = options;
  if (includeNames) {
    return localizacaoEnome(locations, sorted, sex);
  }
  return animaisPorLocalizacao(locations);
}

function getSchedule(dayName) {
  const obj = {};
  const array = Object.keys(hours);
  array.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      obj[day] = 'CLOSED';
    } else {
      obj[day] = `Open from ${open}am until ${close % 12}pm`;
    }
  });
  return dayName ? { [dayName]: obj[dayName] } : obj;
}

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(oldest[0]);
}

function increasePrices(percentage) {
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

//function nomeInteiro({ firstName, lastName}) {
//  return `${firstName} ${lastName}`;
//}

//function idEmployees (id) {
//  return employees.find(employee => employee.id === id)
//}

  function getEmployeeCoverage(idOrName) {
  //  Código
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
