const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((itemDoArray) => ids.includes(itemDoArray.id) === true);
}

function getAnimalsOlderThan(animal, age) {
  const animalFinded = species.find((specie) => specie.name === animal);
  return animalFinded.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => employeeName === firstName
  || employeeName === lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
  // ********************************************
  // Forma alternativa:
  // ********************************************
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

function countAnimals(animalName) {
  if (!animalName) {
    return species.reduce((acc, { name, residents }) => ({
      ...acc,
      [name]: residents.length,
    }), {});
  }
  return species.find(({ name }) => name === animalName).residents.length;
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: AdultPrice, Senior: SeniorPrice, Child: ChildPrice } = prices;
  const result = (Adult * AdultPrice) + (Senior * SeniorPrice) + (Child * ChildPrice);
  return result;
}

const getLocations = () => species.reduce((acc, { location }) => (!acc[location] ? {
  ...acc,
  [location]: [],
} : acc), {});

console.log(getLocations());

const getAllAnimalsName = (arrayResidents, strSex) => {
  // Se foi descriminado sexo:
  if (strSex !== 'all') {
    return arrayResidents.filter(({ sex }) => sex === strSex)
      .map(({ name }) => name);
  }
  return arrayResidents.map(({ name }) => name);
};

const isSorted = (arrayOfAnimalsName, sorted) =>
  (sorted ? arrayOfAnimalsName.sort() : arrayOfAnimalsName);

const filterAnimals = (location, { includeNames = false, sorted = false, sex = 'all' }) => {
  const speciesFiltered = species.filter((specie) => specie.location === location)
    .reduce((acc, specie) => {
      const { name, residents } = specie;
      if (includeNames) {
        const residentsName = getAllAnimalsName(residents, sex);
        return [...acc, { [name]: isSorted(residentsName, sorted) }];
      }
      return [...acc, name];
    }, []);
  return speciesFiltered;
};

function getAnimalMap(options = {}) {
  const animalsByLocation = getLocations();
  Object.keys(animalsByLocation).forEach((location) => {
    animalsByLocation[location] = filterAnimals(location, options);
  });
  return animalsByLocation;
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

getAnimalMap();

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((item) => item.id === id);
  const idFromFirstSpecie = employee.responsibleFor[0];
  const arrayOfFirstSpecie = species.filter((item) => item.id === idFromFirstSpecie)
    .map(({ residents }) => residents);

  const maxAge = arrayOfFirstSpecie[0].reduce((acc, curr) => (acc > curr.age ? acc : curr.age), 0);
  const itemRefToTheOldestAnimal = arrayOfFirstSpecie[0].find((item) => item.age === maxAge);
  const { name, sex, age } = itemRefToTheOldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage = 0) {
  const multiplier = (1 + (percentage / 100));
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(prices[key] * multiplier * 100) / 100;
  });
}

function showAllAnimalsByEmployee() {
  const output = {};
  employees.forEach((item) => {
    output[`${item.firstName} ${item.lastName}`] = [];
    item.responsibleFor.forEach((idAnimal) => {
      const animalsList = species.find((idSpecie) => idSpecie.id === idAnimal);
      output[`${item.firstName} ${item.lastName}`].push(animalsList.name);
    });
  });
  return output;
}

function getEmployeeCoverage(idOrName = 0) {
  if (idOrName === 0) {
    const result = showAllAnimalsByEmployee();
    return result;
  }
  const output = {};
  const empSelect = employees
    .find((e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName);
  output[`${empSelect.firstName} ${empSelect.lastName}`] = [];
  empSelect.responsibleFor.forEach((idAnimal) => {
    const arrNameOfAnimals = species.find((specie) => specie.id === idAnimal);
    // .filter(({ residents }) => residents);
    // .map(({ name }) => name);
    console.log(arrNameOfAnimals);
    output[`${empSelect.firstName} ${empSelect.lastName}`].push(arrNameOfAnimals.name);
  });
  return output;
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
