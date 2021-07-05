const data = require('./data');

function getSpeciesByIds(...ids) {
  const def = [];
  if (ids === undefined) return def;

  const AnimalId = [];

  ids.forEach((id) => {
    const fnd = data.species.find((SpecieDentroDeSpecies) => SpecieDentroDeSpecies.id === id);
    AnimalId.push(fnd);
  });
  // console.log(AnimalId);
  return AnimalId;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const fnd = data.species.find((SpecieDentroDeSpecies) => SpecieDentroDeSpecies.name === animal);
  // console.log(fnd);
  return fnd.residents.every((ResidentesDentroDeSpeciesFnd) => ResidentesDentroDeSpeciesFnd.age >= age);
}

// console.log(getAnimalsOlderThan('penguins', 10));

function getEmployeeByName(employeeName) {
  const def = {};
  if (employeeName === undefined) return def;

  return data.employees.find((EmpregadoDentroDeEmployees) =>
    EmpregadoDentroDeEmployees.firstName === employeeName
    || EmpregadoDentroDeEmployees.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

// const personalInfo = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const associatedWith = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  let boleano = false;

  data.employees.forEach((EmpregadoDentroDeEmployees) => {
    // console.log(EmpregadoDentroDeEmployees);
    EmpregadoDentroDeEmployees.managers.forEach((GerenteDentroDeEmployeesManagers) => {
      // console.log(GerenteDentroDeEmployeesManagers);
      // console.log(id);
      // console.log('comparado com');
      if (GerenteDentroDeEmployeesManagers === id) boleano = true;
    });
  });
  return boleano;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
  // return employee;
}

// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));

function countAnimals(animal) {
  if (animal === undefined) {
    const def = {};

    data.species.forEach((SpecieDentroDeSpecies) => {
      def[SpecieDentroDeSpecies.name] = SpecieDentroDeSpecies.residents.length;
    });

    // console.log(def);
    return def;
  }

  const fnd = data.species.find((SpecieDentroDeSpecies) => SpecieDentroDeSpecies.name === animal);
  // console.log(fnd);
  // console.log(fnd.residents.length);
  return fnd.residents.length;
}

// countAnimals('lions');

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  const entrada = data.prices;
  //   console.log(`${adultP} adultos por ${entrada.Adult} são ${(entrada.Adult * adultP)}
  // ${seniorP} idosos por ${entrada.Senior} são ${(entrada.Senior * seniorP)}
  // ${childP} crianças por ${entrada.Child} são ${(entrada.Child * childP)}`);
  const total = (entrada.Adult * Adult) + (entrada.Senior * Senior) + (entrada.Child * Child);
  // console.log(`O total é ${total}`);
  return total;
}

// calculateEntry({Child: '10'});

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const Horarios = data.hours;
  const def = {};

  if (dayName === undefined) {
    Object.keys(Horarios).forEach((horaEmHours) => {
      def[horaEmHours] = horaEmHours === 'Monday' ? 'CLOSED'
        : `Open from ${Horarios[horaEmHours].open}am until ${Horarios[horaEmHours].close - 12}pm`;
    });
    // console.log(def);
    return def;
  }
  def[dayName] = dayName === 'Monday' ? 'CLOSED'
    : `Open from ${Horarios[dayName].open}am until ${Horarios[dayName].close - 12}pm`;
  // console.log(def);
  return def;
}

// getSchedule('Thursday');

function getOldestFromFirstSpecies(id) {
  const cuidador = data.employees.find((EmpregadoDentroDeEmployees) => EmpregadoDentroDeEmployees.id === id);
  // console.log(cuidador);
  // console.log('');

  const animal = data.species.find((specieDentrodeSpecies) => specieDentrodeSpecies.id === cuidador.responsibleFor[0]);
  // console.log(animal);
  // console.log('');

  const velho = animal.residents.sort((a, b) => b.age - a.age)[0];
  // console.log(velho);
  // console.log('');

  // console.log(Object.values(velho));
  return Object.values(velho);
}

// getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

function increasePrices(percentage) {
  const mult = (percentage / 100) + 1;
  // console.log(mult);

  const precos = data.prices;
  // console.log(precos);

  Object.keys(precos).forEach((precoDentrodePrices) => {
    precos[precoDentrodePrices] = Math.round((precos[precoDentrodePrices] * mult * 100)) / 100;
  });
  // console.log(precos);
}

// increasePrices(1);

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
