let nome = 'dev-celo';

let substituaX = (string) => {
  const frase = 'Tryber x aqui!';
  let resultado;

  resultado = frase.replace('x', nome);

  return resultado;
}

console.log(substituaX(nome));