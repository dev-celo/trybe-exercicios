const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const examCorrector = (arrayCorrectGrades, arrayGradesOfStudent, evaluator) => evaluator(arrayCorrectGrades, arrayGradesOfStudent);

const autoCorrector = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let totalPontos = 0;

  for(let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
      totalPontos += 1;
    } else if (RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index] && STUDENT_ANSWERS[index] !== 'N.A') {
      totalPontos -= 0.5;
    }
  }
  return totalPontos;
};

console.log(examCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, autoCorrector));

module.exports = {examCorrector, autoCorrector};