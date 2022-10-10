const submit = document.getElementById('submit');
const names = document.getElementById('name');
const email = document.getElementById('email');
const resposta = document.getElementById('resposta');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (names.value.length < 5 || names.value.length > 40) {
    alert('Tamanho de nome inválido');
  }
  if (email.value.length < 10 || email.value.length > 50) {
    alert('Tamanho de email inválido');
  }
  if (resposta.value.length > 500) {
    alert('Tamanho de resposta inválido');
  }
});