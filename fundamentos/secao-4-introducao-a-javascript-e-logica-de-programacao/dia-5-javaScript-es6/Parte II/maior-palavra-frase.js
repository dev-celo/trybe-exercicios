let frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

let longestWord = (string) => {
  let arrayOfWords = string.split(' ');
  let maior = 0;
  let = wordFinish = '';

  for (let word of arrayOfWords) {
    if (word.length > maior) {
      maior = word.length;
      wordFinish = word
    }
  }
  console.log(wordFinish);
}

longestWord(frase)