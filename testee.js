const { species, employees } = require('./data');
const data = require('./data');

function getIdorName(funcionario) {
  const obj = {};
  return employees
    .filter((employe) => employe
      .id === funcionario || employe
      .firstName === funcionario || employe
      .lastName === funcionario).map((test) => {
      const initialName = test.firstName;
      const finalName = test.lastName;
      const fullName = `${initialName} ${finalName}`;
      const animals = test.responsibleFor;
      const listAnimals = species
        .filter((specie) => animals.includes(specie.id)).map((elemento) => elemento.name);
      obj[fullName] = listAnimals;
      console.log(obj);
    });
}

console.log(getIdorName('Nelson'));
