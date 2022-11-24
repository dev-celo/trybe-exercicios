import React from 'react'
import Pokemon from '../pokemon/Pokemon';

class Pokedex extends React.Component {
  render() { 
    const  { pokemonList }  = this.props;

    return (
      <header>
        <h1>Pokédex</h1>
        <ul>
          {pokemonList.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </ul>
      </header>
    );
  }
}
 
export default Pokedex;