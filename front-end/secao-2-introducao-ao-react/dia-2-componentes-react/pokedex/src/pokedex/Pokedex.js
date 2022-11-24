import React from 'react'
import Pokemon from '../pokemon/Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {
  render() { 
    const  { pokemonList }  = this.props;

    return (
      <>
        <header>
          <h1>Pokédex</h1>
        </header>
        <ul>
          {pokemonList.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </ul>
      </>
    );
  }
}
 
export default Pokedex;