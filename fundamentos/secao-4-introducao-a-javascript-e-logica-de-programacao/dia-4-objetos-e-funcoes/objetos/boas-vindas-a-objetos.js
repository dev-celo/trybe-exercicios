// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:


let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//notação de ponto
console.log(`Boas vindas com notação de ponto ${info.personagem}`)

//notação de colchete
console.log(`Boas vindas com notação de colchete ${info['personagem']}`);