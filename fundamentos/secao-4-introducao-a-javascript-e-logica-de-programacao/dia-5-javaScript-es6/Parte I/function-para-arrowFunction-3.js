// Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

let nome = 'Ivan';
let sobrenome = 'Pires';

let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

console.log(nomeCompleto(nome, sobrenome));