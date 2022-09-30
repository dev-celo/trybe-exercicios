// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.
const numbers = [2, 3, 6, 7, 10, 1];

function indexMaiorValor(array) {
  let maior = 0;

  for(number in array) {
    if(array[number] > maior) {
      maior = number;
    }
  }
  console.log(maior);
}

indexMaiorValor(numbers);