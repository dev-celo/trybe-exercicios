const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();

const picker = new Pikaday({
  field: document.getElementById('data'),
  firstDay: 1,
  minDate: new Date(ano, (mes - 1), dia),
  maxDate: new Date(2022, (mes - 1), 31),
  yearRange: [2020, 2023],
  format: 'DD/MM/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});
