const newEmployees = (person) => { //callback
  const employees = {
    id1: person('Pedro Guerra'),
    id2: person('Luiza Drumond'),
    id3: person('Carla Paiva'),
  }
  return employees;
};

const person = (fullName) => {
  let objPerson = {
    'nome': '',
    'email': '',
  };
  
  if(fullName) {
    objPerson.nome.add
    objPerson = {
      'nome': fullName,
      'email': ` ${fullName.toLowerCase().replace(/ /g, '_')}@gmail.com`,
    }
    return objPerson;
  }
  return objPerson;
}

console.log(newEmployees(person));

module.exports = {newEmployees, person};