const { species, employees, prices } = require('./data');

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

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  return employees.some((emp) => emp.id === id && emp.managers.includes(stephanieId));
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

function getAnimalMap(options) {
  // criar o objeto { NE: [], NW: [], SE: [], SW: [] }
  const animalMap = species.reduce(localizacaoSpecis, {});

  // Requisito 1
  if (!options) {
    return animalMap;
  }
 // Requisto 2.
 if (options.includeNames) {
  // Uso a chave de animalMap pra acessa a lista das species.
  Object.keys(animalMap).forEach((location) => {
    //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
    animalMap[location] = animalMap[location].map((nameSpecie) => ({
      [nameSpecie]: species.find((specie) => specie.name === nameSpecie)
        .residents.map((names) => names.name),
    }));
  });
  console.log('2');
  return animalMap;
}

  // Requisito 5.
  if(['female', 'male'].includes(options.sex) && (options.includeNames && options.sorted)){
    // Uso a chave de animalMap pra acessa a lista das species.
    Object.keys(animalMap).forEach((location) => {
      //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
      animalMap[location] = animalMap[location].map((nameSpecie) => {

        const list = species.find((specie) => specie.name === nameSpecie)
          .residents.filter((sex) => sex.sex === options.sex).map((listNameSex) => listNameSex.name).sort();
          console.log(list);
          return { [nameSpecie]: list };
        });
      });
      console.log('5');
    return animalMap;

  }
  
  // Requisito 4.
  if(['female', 'male'].includes(options.sex) && options.includeNames){
    // Uso a chave de animalMap pra acessa a lista das species.
    Object.keys(animalMap).forEach((location) => {
      //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
      animalMap[location] = animalMap[location].map((nameSpecie) => {
        
        const list = species.find((specie) => specie.name === nameSpecie)
        .residents.filter((sex) => sex.sex === options.sex).map((listNameSex) => listNameSex.name);
        return { [nameSpecie]: list };
      });
    });
    console.log('4');
    return animalMap;
  }
  

  
  // Requisito 3.
  if (options.sorted && options.includeNames) {
    // Uso a chave de animalMap pra acessa a lista das species.
    Object.keys(animalMap).forEach((location) => {
      //  refazendo a lista orignal de animalMap pra [{anime: [lista de nomes]}]
      animalMap[location] = animalMap[location].map((nameSpecie) => {
        const list = species.find((specie) => specie.name === nameSpecie)
          .residents.map((names) => names.name).sort();
        return { [nameSpecie]: list };
      });
    });
    console.log('3');
    return animalMap;
  }


 

}

console.log(getAnimalMap({  includeNames: true, sex: 'female', sorted: true }));

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
