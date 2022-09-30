// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


let salarioBruto = 3000;

function descontoInss(salarioBruto) {
  let aliquotaInss = 0;
  let salarioDescontadoInss = 0;
  
  if(salarioBruto <= 1556.94) {
    aliquotaInss = (salarioBruto * (8/100));
  }else if(salarioBruto < 2594.92) {
    aliquotaInss = (salarioBruto * (9/100));
  }else if(salarioBruto < 5189.82) {
    aliquotaInss = (salarioBruto * (11/100));
  } else {
    aliquotaInss = 570,88;
  }
  
  salarioDescontadoInss = salarioBruto - aliquotaInss;
  
  // console.log(salarioDescontadoInss);
  return salarioDescontadoInss;
}


function descontoIr(salarioDescontadoInss) {
  let ir = 0;
  let parcelaImposto = 0;
  let impostoIrFinal = 0;
  
  if(salarioDescontadoInss <= 1903.98) {
    ir = 0;
  }else if(salarioDescontadoInss < 2826.65) {
    ir = (7.5/100);
    parcelaImposto = 142.80;
  }else if(salarioDescontadoInss < 3751.05) {
    ir = (15/100);
    parcelaImposto = 354.80;
  } else if(salarioDescontadoInss < 4664.68) {
    ir = (22.5/100);
    parcelaImposto = 636,13;
  } else {
    ir = (27.5/100);
    parcelaImposto = 869,36;
  }
  impostoIrFinal = (ir * salarioDescontadoInss) - parcelaImposto;

  return (impostoIrFinal);
}

function salarioFinal(salarioDescontadoInss, impostoIrFinal) {
  let salarioFinal = 0;
  
  salarioFinal = salarioDescontadoInss - impostoIrFinal;

  console.log(salarioFinal);
}

salarioFinal(descontoInss(salarioBruto), descontoIr(descontoInss(salarioBruto)));

