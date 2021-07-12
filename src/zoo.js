// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // Se o array de ids estiver vazio, retorna um array vazio.
  if (!ids.length) return [];
  // Array que ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id.
  const arrayOfAnimals = [];
  // Laço forEach que procura o primeiro animal que corresponda ao id da vez, por meio do método .find().
  ids.forEach((id) => {
    const currentAnimal = data.species.find((specie) => specie.id === id);
    // Faz-se um push que é responsável por colocar o animal encontrado na varredura feita pelo laço forEach no arrayOfAnimals.
    arrayOfAnimals.push(currentAnimal);
  });
  return arrayOfAnimals;
}

function getAnimalsOlderThan(animal, age) {
  // Por meio do método .find(), a função procura a primeira espécie que tem o nome igual ao informado como parâmetro.
  const searchAnimals = data.species.find((specie) => specie.name === animal);
  // Então, verifica se todos os animais daquela espécie possuem o atributo age maior do que o informado como parâmetro e retorna a função searchAnimals.
  return searchAnimals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // Se não for informado nenhum empregado, retorna um objeto vazio.
  if (!employeeName) return {};
    // Procura o primeiro empregado que o primeiro OU(||) o último nome correspondam ao informado como parâmetro.
   return data.employees.find((employee) => (employee.firstName === employeeName) || employee.lastName === employeeName);
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
