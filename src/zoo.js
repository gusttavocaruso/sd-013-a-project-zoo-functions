const { species, employees, prices } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((itemDoArray) => ids.includes(itemDoArray.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const animalFinded = species.find((specie) => specie.name === animal);
  return animalFinded.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === '' || employeeName === 0 || employeeName === undefined) return {};
  const output = employees
    .find((item) => employeeName === item.firstName || employeeName === item.lastName);
  return output;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // const result = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  // return result;
}

function isManager(id) {
  return employees.some((item) => item.managers.includes(id) === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers,
    responsibleFor,
  };
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function countAnimals(objSpecies) {
  const objOutputCountSpecies = {};
  if (objSpecies === '' || objSpecies === null || objSpecies === undefined) {
    species.forEach((item) => {
      objOutputCountSpecies[item.name] = item.residents.length;
    });
    return objOutputCountSpecies;
  }
  const blnThereIsTheAnimal = species.some((item) => item.name === objSpecies);
  if (blnThereIsTheAnimal === true) {
    const theuniqueSpecie = species.find((item) => item.name === objSpecies);
    return theuniqueSpecie.residents.length;
  }
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: AdultPrice, Senior: SeniorPrice, Child: ChildPrice } = prices;
  const result = (Adult * AdultPrice) + (Senior * SeniorPrice) + (Child * ChildPrice);
  return result;
}

function getAnimalMap(options = 0) {
  console.log(options);
  const { includeNames = 0, sorted = 0, sex = 0 } = options;
  const output = {};
  // source: https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
  // Para um array de todas as locations (sem valores duplicados)
  const allLocations = species
    .map((item) => item.location)
    .filter((value, index, array) => array.indexOf(value) === index);
  // Se parametros vazio
  if (includeNames === 0 && sorted === 0 && sex === 0) {
    allLocations.forEach((locationUnique) => {
      output[locationUnique] = species
        .filter(({ location }) => location === locationUnique)
        .map(({ name }) => name);
    });
    return output;
  }
}

const allLocations = species
  .map((item) => item.location)
  .filter((value, index, array) => array.indexOf(value) === index);

console.log(allLocations);

console.log(getAnimalMap());

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
