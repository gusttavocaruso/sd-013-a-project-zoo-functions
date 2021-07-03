const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  const listSpecie = [];
  if (ids.length) {
    ids.forEach((item) => {
      listSpecie.push(species.find((specie) => specie.id === item));
    });
    return listSpecie;
  }
  return listSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal);
  return getAnimal.residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return employees.find((emp) => [emp.firstName, emp.lastName].includes(employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Dica dada pelo Josue
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
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
  if (!entrants) { return 0; }

  const entrantsList = Object.entries(entrants);
  return entrantsList.reduce((acc, [key, value]) => {
    let total = acc;
    total += prices[key] * value;
    return total;
  }, 0);
}

const localizacaoSpecis = (objet, animal) => {
  const acomulador = objet;
  if (acomulador[animal.location]) {
    acomulador[animal.location].push(animal.name);
  } else {
    acomulador[animal.location] = [animal.name];
  }
  return acomulador;
};

const sexNameSortes = (objetMap, options) => {
  const animalMap = objetMap;
  Object.keys(animalMap).forEach((location) => {
    //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
    animalMap[location] = animalMap[location].map((nameSpecie) => {
      const list = species.find((specie) => specie.name === nameSpecie)
        .residents.filter((sex) => sex.sex === options.sex)
        .map((listNameSex) => listNameSex.name).sort();
      console.log(list);
      return { [nameSpecie]: list };
    });
  });
};

const sexIncludeNames = (objectMap, options) => {
  const animalMap = objectMap;
  Object.keys(animalMap).forEach((location) => {
    //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
    animalMap[location] = animalMap[location].map((nameSpecie) => {
      const list = species.find((specie) => specie.name === nameSpecie)
        .residents.filter((sex) => sex.sex === options.sex)
        .map((listNameSex) => listNameSex.name);
      return { [nameSpecie]: list };
    });
  });
};

const sortedIncludeNames = (objectMap, options) => {
  const animalMap = objectMap;

  // Uso a chave de animalMap pra acessa a lista das species.
  Object.keys(animalMap).forEach((location) => {
    //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
    animalMap[location] = animalMap[location].map((nameSpecie) => {
      const list = species.find((specie) => specie.name === nameSpecie)
        .residents.map((names) => names.name).sort();
      return { [nameSpecie]: list };
    });
  });
};

const includeNames = (objetMap) => {
  const animalMap = objetMap;

  // Uso a chave de animalMap pra acessa a lista das species.
  Object.keys(animalMap).forEach((location) => {
    //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
    animalMap[location] = animalMap[location].map((nameSpecie) => ({
      [nameSpecie]: species.find((specie) => specie.name === nameSpecie)
        .residents.map((names) => names.name),
    }));
  });
  return animalMap;
};

// Todos os Is do getAnimalMap
const isMF = (options) => ['female', 'male'].includes(options.sex);

const isSexNamesSorted = (options) => isMF(options) && (options.includeNames && options.sorted);

const isSexNames = (options) => isMF(options) && options.includeNames;

const isNameSorted = (options) => options.sorted && options.includeNames;

const isOptionsName = (options) => !options || !options.includeNames;

function getAnimalMap(options) {
  const animalMap = species.reduce(localizacaoSpecis, {});
  if (isOptionsName(options)) { return animalMap; }

  if (isSexNamesSorted(options)) {
    sexNameSortes(animalMap, options);
    return animalMap;
  }
  if (isSexNames(options)) {
    sexIncludeNames(animalMap, options);
    return animalMap;
  }
  if (isNameSorted(options)) {
    sortedIncludeNames(animalMap, options);
    return animalMap;
  }
  return includeNames(animalMap);
}

function getSchedule(dayName) {
  const hourWeek = Object.keys(hours).reduce((acc, week) => {
    const { open, close } = hours[week]; const pmHours = close - 12;
    if (!open && !close) {
      acc[week] = 'CLOSED';
    } else {
      acc[week] = `Open from ${open}am until ${pmHours}pm`;
    }
    return acc;
  }, {});

  if (!dayName) {
    return hourWeek;
  }

  return { [dayName]: hourWeek[dayName] };
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
