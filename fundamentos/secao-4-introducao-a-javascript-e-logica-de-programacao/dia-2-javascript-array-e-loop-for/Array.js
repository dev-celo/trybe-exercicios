let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] % 2 !== 0) {
    odd++;
  }
}

odd > 0 ? console.log(`Quantidade de impares: ${odd}`) : console.log('nenhum valor ímpar encontrado');;
