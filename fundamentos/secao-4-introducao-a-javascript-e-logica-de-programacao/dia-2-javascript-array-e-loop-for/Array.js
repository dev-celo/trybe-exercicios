let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = 10000000;

for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] < smaller) {
    smaller = numbers[index]
  }
}

console.log(`Menor número: ${smaller}`);