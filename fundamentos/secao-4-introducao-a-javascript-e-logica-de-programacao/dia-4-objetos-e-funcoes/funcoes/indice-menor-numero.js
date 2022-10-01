// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

const numbers = [2, 4, 6, 7, 10, 0, -3];

function indexMaiorValor(array) {
  let menor = 1000;
  let position = 0;

  for(number in array) {
    if(array[number] < menor) {
      menor = array[number];
      position = number;
    }
  }
  console.log(position);
}

indexMaiorValor(numbers);