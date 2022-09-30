//Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const grades = Math.floor(Math.random() * 105);

function porcentInGrades(grade) {
  if(grade < 0 || grade > 100) {
    return 'error'
  }
  if(grade < 50) {
    console.log(grade + 'F');
  }else if(grade < 60) {
    console.log(grade + 'E');
  } else if(grade < 70) {
    console.log(grade + 'D');
  }  else if(grade < 80) {
    console.log(grade + 'C');
  }  else if(grade < 90) {
    console.log(grade + 'B');
  }else {
    console.log(grade + 'A');
  }
}

porcentInGrades(grades);