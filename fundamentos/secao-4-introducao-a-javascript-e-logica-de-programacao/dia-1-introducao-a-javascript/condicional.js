const numero = Math.floor(Math.random() * 10 - 3);
// const b = Math.floor(Math.random() * 10);
// const c = Math.floor(Math.random() * 10);

// let maior = 0;
// let medio = 0;
// let menor = 0;

// 1)
// if(a > b) {
//   console.log(`Maior entre ${a} e ${b} é ${a}`);
// }else {
//   console.log(`Maior entre ${a} e ${b} é ${b}`);
// }

// 2)
// if(a > b && a > c) {
//   if(b > c) {
//     maior = a;
//     medio = b;
//     menor = c;
//   }else{
//     maior = a;
//     medio = c;
//     menor = b;
//   }
// }else if(b > a && b > c) {
//   if(a > c) {
//     maior = b;
//     medio = a;
//     menor = c;
//   }else {
//     maior = b;
//     medio = c;
//     menor = a;
//   }
// }else if(c > a && c > b) {
//   if(a > b) {
//     maior = c;
//     medio = a;
//     menor = b;
//   }else {
//     maior = c;
//     medio = b;
//     menor = a;
//   }
// }

// 3)
if(numero > 0) {
  console.log("positive");
}else if(numero < 0) {
  console.log("negative");
}else {
  console.log("Zero");
}

// console.log(`Maior: ${maior} Menor: ${menor} Medio: ${medio}`);