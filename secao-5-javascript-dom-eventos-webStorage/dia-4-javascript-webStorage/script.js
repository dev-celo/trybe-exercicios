let headerColor = document.getElementById('headerColor');
// console.log(headerColor.value);
headerColor.addEventListener('change', function() {
  let header = document.querySelector('header');
  let headerColorValue = headerColor.value;
  header.style.cssText = `background-color: ${headerColorValue}`;

})

let bodyColor = document.getElementById('bodyColor');
// console.log(bodyColor.value);
bodyColor.addEventListener('change', function() {
  let body = document.querySelector('body');
  let bodyColorValue = bodyColor.value;
  body.style.cssText = `background-color: ${bodyColorValue}`;

})

let fontColor = document.getElementById('fontColor');
// console.log(fontColor.value);
fontColor.addEventListener('change', function() {
  let font = document.getElementsByClassName('tipografia');
  let fontColorValue = fontColor.value;
  
  for (let element of font) {
    element.style.cssText = `color: ${fontColorValue}`;
  }
})