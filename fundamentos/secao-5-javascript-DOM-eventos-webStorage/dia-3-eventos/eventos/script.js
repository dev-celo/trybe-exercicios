function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const daysOfCalendar = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index++) {
    const element = decemberDaysList[index];
    
    const li = document.createElement('li');
    li.classList = 'day';
    li.innerText = element;

    if (element === 24 || element === 25 || element === 31) li.classList.add('holiday');
    
    if (element === 4 || element === 11 || element === 18 || element === 25) li.classList.add('friday');

    days.appendChild(li)
  }


};






daysOfCalendar();