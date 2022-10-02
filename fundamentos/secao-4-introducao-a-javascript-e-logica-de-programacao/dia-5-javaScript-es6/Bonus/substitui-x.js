let nome = 'dev-celo';

let substituaX = (string) => {
  const frase = 'Tryber x aqui!';
  let resultado;

  resultado = frase.replace('x', nome);

  return resultado;
}

let minhasSkills = (substituaX) => {
  const skills = ['git/GitHub','HTML semântico', 'CSS'];

  return `${substituaX } 
  Minhas 3 competências são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  `
}

console.log(minhasSkills(substituaX(nome)));