import React from 'react'

class Pokemon extends React.Component {
  render() { 
    const { name, type, image, averageWeight: {value}} = this.props.pokemon;
    return (
      <li>
        <h3>Nome: {name}</h3>
        <p>Tipo: {type}</p>
        <span>Peso: {value}kg</span>
        <img src={image} alt={name} />
      </li>
    );
  }
}
 
export default Pokemon;