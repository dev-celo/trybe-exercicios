// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let number = 5;

function sumOfNumber(number) {
  let sum = 0;

  for(count = 1; count <= number; count += 1) {
    sum += count;
  }

  console.log(sum);
}

sumOfNumber(number);