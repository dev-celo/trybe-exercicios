// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

let numeros = [2, 3, 2, 5, 8, 2, 3, 8, 8, 8]; 

function maisRepetido(array) {
  let objMap = Object.create(null);
  let maior = 0;
  let elementoFinal = '';


  for (const element of array) {
    objMap[element] = (objMap[element] || 0) + 1;
    
    if(objMap[element] > maior) {
      maior = objMap[element];
      elementoFinal = element
    }
  }
  console.log(elementoFinal);

  // for (let index = 0; index < array.length; index += 1) {
  //   console.log(objMap[index]);
  // }
}

maisRepetido(numeros);