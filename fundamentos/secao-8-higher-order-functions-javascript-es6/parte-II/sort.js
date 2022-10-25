const sortNumber = (number, funcCheck) => {
  let sortNumber = parseInt(Math.random() * 5 + 1);

  return checkNumber(number, sortNumber);
}

const checkNumber = (chosenNumber, sortNumber) => chosenNumber === sortNumber ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(sortNumber(4, checkNumber));


module.exports = {sortNumber, checkNumber};