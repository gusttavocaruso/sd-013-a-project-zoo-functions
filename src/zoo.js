const { species,} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids){ 
 
}


function getAnimalsOlderThan(animal, age) {
  return species.find((specie)=> specie.name === animal).residents.every(resident=>resident.age >= age)
}

function getEmployeeByName(employeeName) {
    if (employeeName === undefined) return {};
    return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
    ));
    } 


function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith}
}  


function isManager(id) {
    return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {

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
  
  }
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
