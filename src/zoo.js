const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids
    .map((id) => data.species
      .find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((element) => element.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((funcionario) =>
    funcionario.firstName === employeeName || funcionario.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const countAnim = data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
    return countAnim;
  }
  const countSpecie = data.species.find((specie) => specie.name === species)
    .residents.length;
  return countSpecie;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;
  const { Adult, Senior, Child } = entrants;
  const multp = (num1 = 0, num2) => num1 * num2;
  const soma = multp(Adult, data.prices.Adult)
    + multp(Senior, data.prices.Senior) + multp(Child, data.prices.Child);
  return soma;
}

const locationNoParame = () => {
  const names = data.species.reduce((acc, current) => {
    acc[current.location] = data.species
      .filter((element) => element.location === current.location)
      .map((nome) => nome.name);
    return acc;
  }, {});
  return names;
};

const localitionName = (localizacao, sex) => {
  const animalnames = [];
  const nomes = data.species.filter((element) => element.location === localizacao);
  nomes.reduce((acc, current, index) => {
    const objAnimal = {};
    if (sex !== '') {
      const arraySex = nomes[index].residents.filter((element) => element.sex === sex);
      const array = arraySex.map((element) => element.name);
      objAnimal[current.name] = array;
      animalnames.push(objAnimal);
      return acc;
    }
    const array = nomes[index].residents.map((element) => element.name);
    objAnimal[current.name] = array;
    animalnames.push(objAnimal);
    return acc;
  }, {});
  return animalnames;
};

const ordenarObj = (obj) => {
  const objeto = obj;
  const chaves = Object.keys(objeto);
  chaves.forEach((chave) => {
    objeto[chave].forEach((specie, index) => {
      const animalNome = Object.keys(specie);
      const ordenado = specie[animalNome[0]].sort();
      objeto[chave][index][animalNome] = ordenado;
    });
  });
};

function getAnimalMap(options) {
  if (!options) {
    return locationNoParame();
  }
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames === true) {
    const animalNames = data.species.reduce((acc, current) => {
      acc[current.location] = localitionName(current.location, sex);
      return acc;
    }, {});
    if (sorted === true) {
      ordenarObj(animalNames);
      return animalNames;
    }
    return animalNames;
  }
  return locationNoParame();
}

const hoursPrint = (manha, tarde) => `Open from ${manha}am until ${tarde - 12}pm`;

const createObjHorarios = () => {
  const dias = Object.keys(data.hours);
  const horas = Object.values(data.hours);
  return dias.reduce((acc, current, index) => {
    if (current === 'Monday') acc[current] = 'CLOSED';
    else { acc[current] = hoursPrint(horas[index].open, horas[index].close); }
    return acc;
  }, {});
};

function getSchedule(dayName) {
  const objHorarios = createObjHorarios();
  const objDia = {};
  if (!dayName) {
    return objHorarios;
  }
  objDia[dayName] = objHorarios[dayName];
  return objDia;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const result = [];
  const employee = data.employees.find((element) => element.id === id);
  const specie = data.species.find((element) => element.id === employee.responsibleFor[0]);
  const oldAnimal = specie.residents.reduce((acc, current) => {
    if (current.age >= acc.age) return current;
    return acc;
  });
  result.push(oldAnimal.name);
  result.push(oldAnimal.sex);
  result.push(oldAnimal.age);
  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((element) => {
    let resultado = data.prices[element] + ((data.prices[element] * percentage) / 100);
    resultado = Math.round(resultado * 100) / 100;
    data.prices[element] = resultado;
  });
}

const buscaAnimalName = (animalId) => {
  const objAnimal = data.species.find((element) => element.id === animalId);
  return objAnimal.name;
};

const buscaFuncionario = (idOuNome) => data.employees.find((element) => element.id === idOuNome
    || element.firstName === idOuNome
      || element.lastName === idOuNome);

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    return data.employees.reduce((acc, valorAtual) => {
      acc[`${valorAtual.firstName} ${valorAtual.lastName}`] = valorAtual.responsibleFor
        .map((element) => buscaAnimalName(element));
      return acc;
    }, {});
  }
  const objResult = {};
  const objFuncionario = buscaFuncionario(idOrName);
  objResult[`${objFuncionario.firstName} ${objFuncionario.lastName}`] = objFuncionario
    .responsibleFor.map((element) => buscaAnimalName(element));
  return objResult;
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
