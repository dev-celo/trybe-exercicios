// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let maiorNome = 0;
  let nomeFinal = '';

  for(nome of array) {
    if(nome.length > maiorNome) {
      maiorNome = nome.length;
      nomeFinal = nome;
    }
  }

  console.log(nomeFinal);
}

maiorNome(nomes);