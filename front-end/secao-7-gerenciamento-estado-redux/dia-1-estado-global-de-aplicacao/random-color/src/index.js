const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case RANDOM_COLOR:
      console.log({colors: [...state.colors, criarCor()],});
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
  }
}

const store = Redux.createStore(reducer);

const buttonPrevious = document.querySelector('#previous');
const buttonNext = document.querySelector('#next');
const randomColor = document.querySelector('#random');

buttonPrevious.addEventListener('click', () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});
buttonNext.addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR });
});
randomColor.addEventListener('click', () => {
  store.dispatch({ type: RANDOM_COLOR });
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});