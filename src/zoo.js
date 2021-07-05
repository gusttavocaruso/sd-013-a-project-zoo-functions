const data = require('./data');

function getSpeciesByIds(...ids) {
  // Retorna um array vazio caso não haja id algum
  if (!ids) return [];
  const animalArray = [];
  ids.forEach((id) => {
    // Procura o primeiro animal que corresponda ao id da vez
    const currentAnimal = data.species.find((specie) => specie.id === id);
    // Coloca o animal encontrado no array de animais
    animalArray.push(currentAnimal);
  });
  return animalArray;
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    // Procura a primeira espécie que tem o nome igual ao informado como parâmetro
    .find((specie) => specie.name === animal)
    // Verifica se todos os animais daquela espécie possuem o atributo age maior do que o informado como parâmetro
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // Se não for informado nenhum empregado, retorna um objeto vazio
  if (!employeeName) return {};
  return data.employees
    // Procura o primeiro empregado que o primeiro ou último nome correspondam ao informado como parâmetro
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
  // Verifica se algum dos empregados possue o id informado como manager,
  // caso possua isso indica que o id informado era de um manager e a função retorna true
  return data.employees.some((employee) => employee.managers.includes((id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Começa com os valores de managers e responsibleFor como arrays vazios pois
  // são necessários para caracterizar um employee, todavia não são informados como parâmetro
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // Se não é informada espécie alguma, precisa listar todos os habitantes
  if (!species) {
    // Cria um objeto para retornar com todos os animais
    const everyAnimalPopulation = {};
    // Para cada animal, coloca uma chave no objeto com o nome da espécie e valor de número de habitantes
    data.species.forEach((specie) => {
      everyAnimalPopulation[specie.name] = specie.residents.length;
    });
    return everyAnimalPopulation;
  }
  // Procura a primeira ocorrencia da espécie informada como parâmetro
  const specieChosen = data.species.find((specie) => specie.name === species);
  // Verifica quantos habitantes tal espécie possui
  return specieChosen.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // Começa com o valor total como 0, caso não seja informado nenhum pagante
  // Busca os valores de cada entrada individualmente
  const adultPrice = data.prices.Adult;
  const childPrice = data.prices.Child;
  const seniorPrice = data.prices.Senior;
  // Multiplica o número de pagantes de cada setor pelo valor do ingresso
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
  // Busca o funcionário informado
  const animalID = data.employees.find((employee) => employee.id === id)
    // Pega o primeiro animal que o funcionário é responsável
    .responsibleFor[0];
  // Busca todos os animais com o id encontrado acima
  const wholeSpecie = data.species.find((specie) => specie.id === animalID).residents
    // Coloca os animais em ordem por idade
    .sort((a, b) => b.age - a.age);
  // Retorna o valor das chaves do animal mais velho
  return Object.values(wholeSpecie[0]);
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
