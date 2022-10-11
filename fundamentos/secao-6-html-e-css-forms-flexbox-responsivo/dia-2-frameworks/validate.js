const validate = new window.JustValidate('#form');

validate.addField('#name', [
  {
    rule: 'minLength',
    value: 5,
    errorMessage: 'Tamanho do nome inválido',
  },
  {
    rule: 'maxLength',
    value: 40,
    errorMessage: 'Nome muito grande, entre em contato conosco!',
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'É preciso informar o email',
  },
  {
    rule: 'email',
    errorMessage: 'Email inválido!',
  },
])
.addField('#resposta', [
  {
    rule: 'maxLength',
    value: 500,
  },
])
.addField('#ofertas', [
  {
    rule: 'required',
    errorMessage: 'É preciso concordar com os termos',
  },
]);