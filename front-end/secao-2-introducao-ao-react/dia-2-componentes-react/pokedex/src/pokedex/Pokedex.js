import React from 'react'
import Pokemon from '../pokemon/Pokemon';

class Pokedex extends React.Component {
  render() { 
    const pokemon = {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: 6.0,
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    }

    return (
      <header>
        <h1>Pokédex</h1>
        <ul><Pokemon pokemon={pokemon}/></ul>
      </header>
    );
  }
}
 
export default Pokedex;