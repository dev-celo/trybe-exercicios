const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);
const c = Math.floor(Math.random() * 10);

function highestOfThreeNumber(numA, numB, numC) {
  let maior = 0;
  let medio = 0;
  let menor = 0;

  if(a > b && a > c) {
    if(b > c) {
      maior = a;
      medio = b;
      menor = c;
    }else{
      maior = a;
      medio = c;
      menor = b;
    }
  }else if(b > a && b > c) {
    if(a > c) {
      maior = b;
      medio = a;
      menor = c;
    }else {
      maior = b;
      medio = c;
      menor = a;
    }
  }else if(c > a && c > b) {
    if(a > b) {
      maior = c;
      medio = a;
      menor = b;
    }else {
      maior = c;
      medio = b;
      menor = a;
    }
  }
  console.log(`Maior: ${maior} Menor: ${menor} Medio: ${medio}`);
  return (`Maior: ${maior} Medio: ${medio} Menor: ${menor}`);
}

highestOfThreeNumber(a, b, c);