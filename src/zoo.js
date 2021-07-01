const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if(ids.length === 0){
    return [];
  }
  else if(ids.length === 1){
    const speciesId = species.filter(name =>
    name.id === ids[0]);
    return speciesId;
  }
  else{
    let animal = [];
    const speciesId = species.filter(name => {
      ids.some(id => name === id)
    });
      animal.push(speciesId);

  }
  
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function getAnimalsOlderThan(animal, age) {
  const animalElement = species.find(specie => specie.name === animal);
  const result = animalElement.residents
  .every(animalResident => animalResident.age >= age);

  return result;
}
getAnimalsOlderThan('otters', 7);
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
