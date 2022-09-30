// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';

let word = 'tryber';

function invertePalavra(word) {
  let newWord = ''
  
  for(let string = word.length - 1; string >=0; string -= 1) {
    newWord += word[string]
  }
  return newWord;
}

invertePalavra(word)