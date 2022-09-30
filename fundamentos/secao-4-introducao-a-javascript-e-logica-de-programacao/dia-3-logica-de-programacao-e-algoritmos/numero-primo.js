function primo(numeroFinal) {
  let count = 0;
  let primos =[];
  
  for (let numero = 2; numero < numeroFinal; numero+=1) {
    count = 0;
    for (let divisor = 0; divisor <= numero; divisor+=1) {
      if (numero % divisor == 0) {
        count += 1;
      }    
    }
    if (count == 2) {
      primos.push(numero);
    }  
  }
  return ('Maior numero até', numeroFinal, ':', primos[primos.length - 1] );
}

console.log(primo(50));