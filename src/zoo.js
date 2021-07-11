const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // Se o array de ids estiver vazio, retorna um array vazio.
  if (!ids.length) return [];
  // Array que ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id.
  const arrayOfAnimals = [];
  // Laço forEach que procura o primeiro animal que corresponda ao id da vez.
  ids.forEach((id) => {
    const currentAnimal = data.species.find((specie) => specie.id === id);
    // Faz-se um push que é responsável por colocar o animal encontrado na varredura feita pelo laço forEach no arrayOfAnimals.
    arrayOfAnimals.push(currentAnimal);
  });
  return arrayOfAnimals;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

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
