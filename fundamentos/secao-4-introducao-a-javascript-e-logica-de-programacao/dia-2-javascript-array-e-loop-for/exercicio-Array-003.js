// Iremos utilizar esse array para realizar os próximos exercícios:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for(let number of numbers) {
  sum += number;
  media = sum/numbers.length
}

console.log(media);