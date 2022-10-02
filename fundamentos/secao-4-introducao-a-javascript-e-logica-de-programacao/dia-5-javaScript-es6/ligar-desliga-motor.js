// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

// exemplo: 
// console.log(`O motor está ${ligarDesligar()}`); O motor está ligado
// console.log(`O motor está ${ligarDesligar()}`); O motor está desligado
// console.log(`O motor está ${ligarDesligar()}`); O motor está ligado

let motorFuncionando = false;

let ligarDesligar = () => motorFuncionando === false ? motorFuncionando = true : motorFuncionando = false;

  console.log(`O motor está ${ligarDesligar()}`);
  console.log(`O motor está ${ligarDesligar()}`);
  console.log(`O motor está ${ligarDesligar()}`);