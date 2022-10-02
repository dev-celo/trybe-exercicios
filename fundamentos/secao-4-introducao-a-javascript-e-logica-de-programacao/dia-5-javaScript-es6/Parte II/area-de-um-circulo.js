let raio = 5;

let circleArea = (raio) => {
  const pi = 3.14;
  let area = 0;

  area = pi * raio ** 2;

  return area;
}

console.log(`Essa é a área do círculo: ${circleArea(raio)}`);