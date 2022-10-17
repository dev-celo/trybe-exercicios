const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => {
  let numbersAsc = array.sort((a, b) => a - b);
  return `Os números ${numbersAsc} se encontram ordenados de forma crescente!`;
}

console.log(sortOddsAndEvens(oddsAndEvens));
