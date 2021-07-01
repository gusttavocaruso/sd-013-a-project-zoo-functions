const { species, employees, prices, hours } = require('./data');
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

// source: https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
// Para um array de todas as locations (sem valores duplicados)
const getAllLocationsUnique = () => species
  .map((item) => item.location)
  .filter((value, index, array) => array.indexOf(value) === index);

const getSpeciesByLocation = (strLocation) => species
  .filter(({ location }) => location === strLocation)
  .map(({ name }) => name);

const getArrayResidentsBySpecieAndLocation = (specie, local) => {
  const outputUntillResidents = species
    .filter(({ name, location }) => name === specie && location === local)
    .map(({ residents }) => residents);
  return outputUntillResidents;
};

const fillNames = (specie, strLocation, strSex) => {
  const baseArray = getArrayResidentsBySpecieAndLocation(specie, strLocation);
  if (strSex === 'male' || strSex === 'female') {
    const outputWithNamesBySex = baseArray[0]
      .filter(({ name, sex }) => name && sex === strSex)
      .map(({ name }) => name);
    return outputWithNamesBySex;
  }
  const outputAllNames = baseArray[0].map(({ name }) => name);
  return outputAllNames;
};

const getResidentNameByLocation = (strLocation, strSex, arrayBySpeciesOfLocation) => {
  const outputTypeArray = [];
  const output = {};
  arrayBySpeciesOfLocation.forEach((specie) => {
    output[specie] = fillNames(specie, strLocation, strSex);
  });
  outputTypeArray.push(output);
  return outputTypeArray;
};

const getOutputDefault = () => {
  const output = {};
  const arrayOfUniqueLocations = getAllLocationsUnique();
  arrayOfUniqueLocations.forEach((locationUnique) => {
    output[locationUnique] = getSpeciesByLocation(locationUnique);
  });
  return output;
};

const getOutputWithNames = (strSex) => {
  const output = {};
  const outputDefault = getOutputDefault();
  Object.keys(outputDefault).forEach((location) => {
    const arrayBySpecieLocation = Object.values(outputDefault[location]);
    console.log(arrayBySpecieLocation);
    output[location] = getResidentNameByLocation(location, strSex, arrayBySpecieLocation);
  });
  return output;
};

function getAnimalMap(options = 0) {
  const { includeNames = 0, sorted = 0, sex = 0 } = options;

  if (includeNames === 0 || includeNames === false) {
    const outputDefault = getOutputDefault();
    return outputDefault;
  }
  const outputWithNames = getOutputWithNames(sex);
  if (sorted === true) return outputWithNames.sort();
  return outputWithNames;
}

function getSchedule(dayName = 0) {
  const output = {};
  if (dayName === 0) {
    Object.keys(hours).forEach((key) => {
      output[key] = key === 'Monday' ? 'CLOSED'
        : `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    });
    return output;
  }
  output[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return output;
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
