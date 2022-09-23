// Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 0;
let menorPalavra = 1000;
let novaMaiorPalavra;
let novaMenorPalavra

for(let index = 0; index < array.length; index++) {
  if(array[index].length > maiorPalavra){
    maiorPalavra = array[index].length;
    novaMaiorPalavra = array[index];
  };
  if(array[index].length < menorPalavra){
    menorPalavra = array[index].length;
    novaMenorPalavra = array[index]
  }
}

console.log("Maior palavra:", novaMaiorPalavra)
console.log("Menor palavra:", novaMenorPalavra)