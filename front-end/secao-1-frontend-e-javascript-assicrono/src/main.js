import validator from 'validator';

const inputValue = document.getElementById('getValue');
const seletor = document.getElementById('option');
const button = document.getElementById('button');
const resposta = document.getElementById('answer');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const validacao = {
    cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
    hexColor: validator.isHexadecimal(inputValue.value),
    email: validator.isEmail(inputValue.value),
    uuid: validator.isUUID(inputValue.value),
    url: validator.isURL(inputValue.value),
  }

  resposta.innerHTML = `O campo validado é ${validacao[seletor.value]}`
});