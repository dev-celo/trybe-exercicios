// Iremos utilizar esse array para realizar os próximos exercícios:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let division = 1
let count = 1;

for(let number of numbers) {
  division = number / 2;
  console.log(`Resultado da divisão de ${number} / 2: ${division}`);
  count++;
}