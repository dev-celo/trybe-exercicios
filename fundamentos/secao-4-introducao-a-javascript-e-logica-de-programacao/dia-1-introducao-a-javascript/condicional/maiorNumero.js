const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

function bigger(numA, numB) {
  if(a > b) {
    console.log (`Maior entre ${a} e ${b} é ${a}`);
  }else {
    console.log (`Maior entre ${a} e ${b} é ${b}`);
  }
}

bigger(a, b);