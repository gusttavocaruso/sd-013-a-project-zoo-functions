const data = require('./data');

function getSpeciesByIds(...ids) {
  const findSpecie = [];
  ids.forEach((id) => {
    findSpecie.push(data.species.find((specie) => specie.id === id));
  });
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) =>
    specie.name === animal && specie.residents.every((resident) =>
      resident.age > age));
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((employe) =>
      employe.firstName === employeeName || employe.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.find((employee) => employee)
    .managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function countAnimals(species) {
  if (species === undefined) {
    const listaAnimals = {};
    data.species.forEach((specie) => {
      listaAnimals[specie.name] = specie.residents.length;
    });
    return listaAnimals;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultoZoo, Child: criancaZoo, Senior: senhorZoo } = data.prices;
  return (Adult * adultoZoo) + (Child * criancaZoo) + (Senior * senhorZoo);
}

function getAnimalMapOptionsNameUndefined() {
  const reduceLocation = data.species.reduce((acc, crr) => {
    const animalLocation = data.species.filter((specie) => specie.location === crr.location)
      .map((specieMap) => specieMap.name);
    acc[crr.location] = animalLocation;
    return acc;
  }, {});
  return reduceLocation;
}

function getAnimalMapWithName(options) {
  const reduceLocation = data.species.reduce((acc, crr) => {
    const animalLocation = data.species.filter((specie) => specie.location === crr.location)
      .map((specieMap) => specieMap.residents.reduce((acumulador) => {
        const accu = acumulador;
        accu[specieMap.name] = (options.sorted === true ? specieMap.residents
          .map((resident) => resident.name).sort() : specieMap.residents
          .map((resident) => resident.name));
        return accu;
      }, {}));
    acc[crr.location] = animalLocation;
    return acc;
  }, {});
  return reduceLocation;
}

function getAnimalMapWithNameAndSex(options) {
  const reduceLocation = data.species.reduce((acc, crr) => {
    const animalLocation = data.species.filter((specie) => specie.location === crr.location)
      .map((specieMap) => specieMap.residents.reduce((acumulador) => {
        const accu = acumulador;
        accu[specieMap.name] = (options.sorted === true ? specieMap.residents
          .filter((resident) => resident.sex === options.sex)
          .map((resident) => resident.name).sort() : specieMap.residents
          .filter((resident) => resident.sex === options.sex)
          .map((resident) => resident.name));
        return accu;
      }, {}));
    acc[crr.location] = animalLocation;
    return acc;
  }, {});
  return reduceLocation;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getAnimalMapOptionsNameUndefined();
  if (options.sex) return getAnimalMapWithNameAndSex(options);
  if (options.includeNames === true) return getAnimalMapWithName(options);
}

function nenhumDiaPassado(keys, Values, diasSemana) {
  const dSemana = diasSemana;
  keys.forEach((key, index) => {
    if (key === 'Monday') {
      dSemana[key] = 'CLOSED';
    } else {
      dSemana[key] = `Open from ${Values[index].open}am until ${Values[index].close - 12}pm`;
    }
  });
  return dSemana;
}

function monday(keys, diasSemana) {
  const dSemana = diasSemana;
  keys.forEach((key, index) => {
    if (key === 'Monday') {
      dSemana[key] = 'CLOSED';
    }
  });
  return dSemana;
}

function umDiaPassado(keys, Values, diasSemana, dayName) {
  const dSemana = diasSemana;
  keys.forEach((key, index) => {
    if (key === dayName) {
      dSemana[key] = `Open from ${Values[index].open}am until ${Values[index].close - 12}pm`;
    }
  });
  return dSemana;
}

function getSchedule(dayName) {
  const diasSemana = {};
  const keys = Object.keys(data.hours);
  const Values = Object.values(data.hours);
  if (!dayName) return nenhumDiaPassado(keys, Values, diasSemana);
  if (dayName === 'Monday') return monday(keys, diasSemana);
  if (dayName && dayName !== 'Monday') return umDiaPassado(keys, Values, diasSemana, dayName);
}

function getOldestFromFirstSpecies(id) {
  const idSpecie = data.employees.find((employee) => employee.id === id).responsibleFor
    .find((respFor) => respFor);

  return data.species.find((specie) => specie.id === idSpecie).residents
    .sort((a, b) => b.age - a.age).map((resident) => Object.keys(resident)
      .map((key) => resident[key]))[0];
}

function increasePrices(percentage) {
  data.prices.Adult = Math.round(data.prices.Adult * (1 + (percentage / 100)) * 100) / 100;
  data.prices.Child = Math.round(data.prices.Child * (1 + (percentage / 100)) * 100) / 100;
  data.prices.Senior = Math.round(data.prices.Senior * (1 + (percentage / 100)) * 100) / 100;
}

function employeeCoverageNoParam() {
  const coverageReduce = data.employees.reduce((acc, crr) => {
    const animals = [];
    crr.responsibleFor.forEach((respFor) =>
      animals.push(data.species.find((specie) => specie.id === respFor)));
    acc[`${crr.firstName} ${crr.lastName}`] = animals.map((animal) => animal.name);
    return acc;
  }, {});
  return coverageReduce;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return employeeCoverageNoParam();
  const coverageReduceIdOrName = data.employees
    .filter((employee) => employee.id === idOrName
    || employee.firstName === idOrName
    || employee.lastName === idOrName)
    .reduce((accIdOrName, crrIdOrName) => {
      const aIdOrName = accIdOrName;
      const animalsIdOrName = [];
      crrIdOrName.responsibleFor.forEach((respFor) =>
        animalsIdOrName.push(data.species.find((specie) => specie.id === respFor)));
      aIdOrName[`${crrIdOrName.firstName} ${crrIdOrName.lastName}`] = animalsIdOrName
        .map((animal) => animal.name);
      return aIdOrName;
    }, {});
  return coverageReduceIdOrName;
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
