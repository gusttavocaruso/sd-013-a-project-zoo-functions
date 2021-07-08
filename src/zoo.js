const { species, employees, hours, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animalName, age) {
  return species.find((specie) => specie.name === animalName).residents
    .every((animal) => animal.age > age);
}

function getEmployeeByName(employeeName) {
  const result = employees.find((employee) => (employee.firstName === employeeName
    || employee.lastName === employeeName));
  return (result === undefined) ? {} : result;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers
    .some((managerID) => managerID === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specieName) {
  const result = {};
  if (specieName === undefined) {
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  return species.find((specie) => specie.name === specieName).residents.length;
}

function calculateEntry(entrants = { Adult: 0, Senior: 0, Child: 0 }) {
  let result = 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  result += Adult * 49.99;
  result += Senior * 24.99;
  result += Child * 20.99;
  return result;
}

/* function getLocationsAnimals() {
  const result = {};
  species.forEach((specie) => {
    if (result[specie.location] === undefined) {
      result[specie.location] = [specie.name];
    } else {
      result[specie.location].push(specie.name);
    }
  });
  return result;
} */

/* function filterAnimalsBySexAndMapTheirName(specie, sex) {
  if (sex === undefined) {
    return specie.residents.map((animal) => animal.name);
  }
  if (sex === 'female') {
    return specie.residents.filter((animal) => animal.sex === sex).map((animal) => animal.name);
  }
  if (sex === 'male') {
    return specie.residents.filter((animal) => animal.sex === sex).map((animal) => animal.name);
  }
} */

function getAnimalMap(options) {
/*   const result = {};
  if (options === undefined) {
    return getLocationsAnimals();
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    species.forEach((specie) => {
      const speciesNames = filterAnimalsBySexAndMapTheirName(specie, sex);
      if (sorted) {
        speciesNames.sort();
      }
      (result[specie.location] === undefined)
        ? result[specie.location] = [{ [specie.name]:
      [...speciesNames] }] : result[specie.location].push({ [specie.name]: [...speciesNames] });
    });
    return result;
  }
  return 'lions'; */
}

function convertDayToTimeLegible(day) {
  if (day.open === 0 || day.close === 0) {
    return 'CLOSED';
  }
  return `Open from ${day.open % 12}am until ${day.close % 12}pm`;
}

function getSchedule(dayName) {
  const day = hours[dayName];
  if (dayName) {
    return {
      [dayName]: convertDayToTimeLegible(day),
    };
  }
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;
  return {
    Tuesday: convertDayToTimeLegible(Tuesday),
    Wednesday: convertDayToTimeLegible(Wednesday),
    Thursday: convertDayToTimeLegible(Thursday),
    Friday: convertDayToTimeLegible(Friday),
    Saturday: convertDayToTimeLegible(Saturday),
    Sunday: convertDayToTimeLegible(Sunday),
    Monday: convertDayToTimeLegible(Monday),
  };
}

function getOldestFromFirstSpecies(id) {
  const employeeForSearch = employees.find((employee) => employee.id === id);
  const firstSpecieID = employeeForSearch.responsibleFor[0];
  const oldestFromFirstSpecie = species.find((specie) => specie.id === firstSpecieID).residents
    .reduce((acc, curr) => {
      if (curr.age > acc.age) {
        return curr;
      }
      return acc;
    });
  return [...Object.values(oldestFromFirstSpecie)];
}

function increasePrices(percentage) {
  // Não conseguia arredondar os números decimais,
  // Pesquisei e encontrei isso https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary mas ainda não entendo como a matemática se aplica
  prices.Adult = Math.round(((prices.Adult + (prices.Adult * (percentage / 100)))
   + Number.EPSILON) * 100) / 100;
  prices.Senior = Math.round(((prices.Senior + (prices.Senior * (percentage / 100)))
   + Number.EPSILON) * 100) / 100;
  prices.Child = Math.round(((prices.Child + (prices.Child * (percentage / 100)))
   + Number.EPSILON) * 100) / 100;
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
