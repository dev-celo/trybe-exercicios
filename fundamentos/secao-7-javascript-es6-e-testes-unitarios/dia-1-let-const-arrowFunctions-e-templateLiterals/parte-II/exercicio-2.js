const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => {
// Seu código aqui.
  for(let index = 0; index < array.length; index += 1){
    for(let indexCompara = 0; indexCompara < array.length; indexCompara += 1){
      if(array[indexCompara] > array[index]) {
        let aux = array[index];
        array[index] = array[indexCompara];
        array[indexCompara] = aux;
      }
    }
  }
  return array;
}

console.log(sortOddsAndEvens(oddsAndEvens));
