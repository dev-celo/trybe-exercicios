// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false

let palavra = 'trybe';
let fimPalavra = 'be';
let tamanhoFimPalavra = 0;


function verificaFimPalavra(palavra, fimPalavra) {

  
  
  tamanhoFimPalavra = fimPalavra.length

  if(palavra.substr(-(tamanhoFimPalavra)) == fimPalavra) {
    return true;
  } else {
    return false;
  }
}

verificaFimPalavra(palavra, fimPalavra);