const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const allAnimals = data.species.find((actualAnimal) => actualAnimal.name === animal);
  return allAnimals.residents.every((currentAnimal) => currentAnimal.age > age);
}

function getEmployeeByName(employee) {
  if (typeof employee === 'undefined') {
    return {};
  }
  const elements = data.employees;
  return elements.find((actual) => actual.firstName === employee || actual.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof species === 'undefined') {
    return data.species.reduce((accumulator, animalSpecie) => {
      accumulator[animalSpecie.name] = animalSpecie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;

  return (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

const msgReturn = (acc, day) => {
  const { open, close } = data.hours[day];
  const msg = `Open from ${open}am until ${close - 12}pm`;
  acc[day] = (open > 0 && close > 0) ? msg : 'CLOSED';
  return acc;
};

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  if (typeof dayName === 'undefined') {
    return days.reduce((accumulator, day) => msgReturn(accumulator, day), {});
  }

  const obj = {};
  return msgReturn(obj, dayName);
}

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((people) => people.id === id).responsibleFor[0];
  const individuals = data.species.find((current) => current.id === animal).residents;
  let oldest = individuals[0].age;
  individuals.map((currentAnimal) => {
    if (currentAnimal.age > oldest) {
      oldest = currentAnimal;
    }
    return oldest;
  });
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const arrayKeys = Object.keys(data.prices);

  return arrayKeys.forEach((element) => {
    const base100 = data.prices[element] * 100;
    const newValue = Math.round(base100 + (base100 * (percentage / 100))) / 100;
    data.prices[element] = parseFloat(newValue.toFixed(2));
  });
}

/* Source: https://github.com/tryber/sd-013-a-project-zoo-functions/
@autor: [Marlon Lacerda] Project Zoo Functions #116 */

function getEmployeeCoverage(idOrName) {
  const fullName = (person) => `${person.firstName} ${person.lastName}`; // Une dois atributos do meu objeto uma variavel nome completo
  const compareIdOrName = (person) => (person.firstName === idOrName) // Compara no meu objeto pelo Id ou pelo Nome dentro objeto
  || (person.lastName === idOrName) || (person.id === idOrName);
  const findName = (arrayOfIds) => { // Procurar nome dentro de um
    const species = [];
    arrayOfIds.forEach((id) => species // usando o forEach para percorrer todo array species
      .push(data.species.find(((specie) => specie.id === id)).name)); // usando o push para adicionar os dados encontrados em um novo array
    return species;
  };
  // Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  // com reduce consigo percorrer os dados da lista de funcionários e retorna os animais pelos quais o funcionário é responsável
  const employeesList = data.employees
    .reduce((acc, person) => ({ ...acc, [fullName(person)]: findName(person.responsibleFor) }), {});
  if (!idOrName) return employeesList;
  const res = data.employees
    .find((employee) => compareIdOrName(employee));
  return { [fullName(res)]: findName(res.responsibleFor) };
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
