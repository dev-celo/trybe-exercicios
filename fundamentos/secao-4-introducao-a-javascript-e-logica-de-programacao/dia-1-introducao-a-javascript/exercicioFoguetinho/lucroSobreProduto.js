// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.


const custoProducao = 250;
const valorVenda = 500;

if(custoProducao <= 0 || valorVenda <= 0) {
  log('Error')
  return 'error';
}


// console.log(custoTotal);
// console.log(lucro);

function profit(custoProducao, valorVenda) {
  const taxaSobreOCusto = (20/100);
  const quantidadeVendida = 1000;
  let custoTotal = 0;
  let lucro = 0;
  
  custoTotal = custoProducao + (custoProducao * taxaSobreOCusto);
  lucro = (valorVenda - custoTotal) * quantidadeVendida;

  // console.log(lucro);
  return lucro;
}

profit(custoProducao, valorVenda);