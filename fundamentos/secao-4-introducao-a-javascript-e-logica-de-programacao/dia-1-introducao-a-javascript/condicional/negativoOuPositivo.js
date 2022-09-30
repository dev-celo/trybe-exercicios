const number = Math.floor(Math.random() * 10 - 5);


function negativeOrPositive (number) {
  if(number > 0) {
    return ("positive");
  }else if(number < 0) {
    return ("negative");
  }else {
    return ("Zero");
  }
}

negativeOrPositive(number);