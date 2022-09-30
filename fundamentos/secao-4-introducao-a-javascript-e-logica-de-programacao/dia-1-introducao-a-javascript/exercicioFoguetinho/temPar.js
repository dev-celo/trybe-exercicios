// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const number1 = Math.floor(Math.random() * 10);
const number2 = Math.floor(Math.random() * 10);
const number3 = Math.floor(Math.random() * 10);

function haveEven(numA, numB, numC) {
  if((numA % 2 === 0) || (numB % 2 === 0) || (numC % 2 === 0)) {
    // console.log(true);
    return true;
  }
  // console.log(false);
  return false;
}

haveEven(number1, number2, number3)