// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

let frase = 'arara';

function palindromo(string) {
  let stringReverse =string.split('').reverse().join('');
  
  if(stringReverse == string) {
    return true;
  } 

  return false;
}

palindromo(frase);