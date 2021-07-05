const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const toReturn = [];
  ids.forEach((id) => {
    const currentAnimal = data.species.find((specie) => specie.id === id);
    toReturn.push(currentAnimal);
  });
  return toReturn;
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => (
      (employee.firstName === employeeName)
      || (employee.lastName === employeeName)
    ));
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes((id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (!species) {
    const everyAnimalPopulation = {};
    data.species.forEach((specie) => {
      everyAnimalPopulation[specie.name] = specie.residents.length;
    });
    return everyAnimalPopulation;
  }
  const specieChosen = data.species.find((specie) => specie.name === species);
  return specieChosen.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  const adultPrice = data.prices.Adult;
  const childPrice = data.prices.Child;
  const seniorPrice = data.prices.Senior;
  const entries = (adultPrice * Adult) + (seniorPrice * Senior) + (childPrice * Child);
  return entries;
}

function animalsByLocation() {
  return {
    NE: data.species
      .filter((specie) => specie.location === 'NE')
      .map((habitant) => habitant.name),
    NW: data.species
      .filter((specie) => specie.location === 'NW')
      .map((habitant) => habitant.name),
    SE: data.species
      .filter((specie) => specie.location === 'SE')
      .map((habitant) => habitant.name),
    SW: data.species
      .filter((specie) => specie.location === 'SW')
      .map((habitant) => habitant.name),
  };
}

function getAnimalMap(options) {
  if (!options) {
    return animalsByLocation();
  }
}

function getSchedule(dayName) {
  const schedule = data.hours;
  const toReturn = {};
  if (!dayName) {
    // Pega todos os dias da semana, que são as chaves do "hours"
    Object.keys(schedule)
    // Para cada dia da semana...
      .forEach((weekday) => {
        // Coloca o dia da semana como chave, depois verifica se é segunda feira. Se for segunda-feira, o valor da chave 'Monday' é CLOSED
        toReturn[weekday] = weekday === 'Monday' ? 'CLOSED'
        // Caso não seja segunda-feira, o valor da chave do dia semana, será o texto com os respectivos horários do dia
          : `Open from ${schedule[weekday].open}am until ${(schedule[weekday].close) - 12}pm`;
      });
    return toReturn;
  }
  // Verifica se o dia informado como parâmetro é 'Monday', se for coloca nessa chave o valor CLOSED, caso contrário, coloca os respectivos horários na chave do dia da semana.
  toReturn[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${schedule[dayName].open}am until ${(schedule[dayName].close) - 12}pm`;
  return toReturn;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
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
