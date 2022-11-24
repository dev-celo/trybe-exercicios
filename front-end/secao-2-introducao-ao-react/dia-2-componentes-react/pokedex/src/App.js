import './App.css';
import Pokedex from './pokedex/Pokedex';
import pokemonList from './data'

function App() {
  return (
    <Pokedex pokemonList={pokemonList}/>
  );
}

export default App;
