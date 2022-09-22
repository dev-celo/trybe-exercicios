// Iremos utilizar esse array para realizar os próximos exercícios:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = Array();

for (let index = 0; index < 25; index++) {
  numbers[index] = index + 1;
  console.log(`array[${index}]: ${numbers[index]}`);
}