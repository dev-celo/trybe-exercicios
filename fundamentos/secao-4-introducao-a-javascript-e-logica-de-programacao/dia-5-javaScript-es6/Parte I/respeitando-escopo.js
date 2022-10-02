// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

let escopoPrincipal = () => {
  let variavelEscopoPrincipal = 'Escopo principal!';

  return variavelEscopoPrincipal;
}

// console.log(variavelEscopoPrincipal); retorno: variavelEscopoPrincipal is not defined

console.log(escopoPrincipal());