const firstAngle = 90;
const secondAngle = 0;
const thirdAngle = 70;

function anglesOfTriangle(firstAngle, secondAngle, thirdAngle) {
  let sumOfAngles = firstAngle + secondAngle + thirdAngle;

  if((firstAngle > 0 && secondAngle > 0 && thirdAngle > 0)) {
    if(sumOfAngles === 180) {
      // console.log(true);
      return true;
    }
    // console.log(false);
    return false;
  }
  // console.log('Angulo não positivo');
  return false;
}

anglesOfTriangle(firstAngle, secondAngle, thirdAngle);