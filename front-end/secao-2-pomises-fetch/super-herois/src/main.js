import Swal from 'sweetalert2';
import './style.css';

const maxNum = 732;
const url = `https://akabab.github.io/superhero-api/api/id/`;

const buttonSubmit = document.querySelector('#submit');
const imageHeroe = document.querySelector('#image');
const nameHeroe = document.querySelector('#nameHeroes');

let fullName;
let image;

const randomId = (maxNum) => Math.floor(Math.random() * maxNum)

buttonSubmit.addEventListener('click', () => {
  fetch(`${url}${randomId(maxNum)}.json`)
    .then((response) => response.json())
    .then((data) => {
      
      if(data) {
        fullName = data.name;
        image = data.images.md;

        imageHeroe.src = image;
        imageHeroe.alt = `Foto do(a) personagem ${fullName}`;

        nameHeroe.innerHTML = `Personagem: ${fullName}`;
      }
      
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não conseguimos encontrar esse herói!',
        footer: 'Tente gerar um novo herói clicando em sortear novamente!',
    });
  });
});
