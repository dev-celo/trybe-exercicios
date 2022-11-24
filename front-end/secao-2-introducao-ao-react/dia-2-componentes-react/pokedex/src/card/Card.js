import React from 'react'

class Card extends React.Component {
  render() { 
    const { name, type, image, averageWeight: {value}} = this.props.pokemon;
    return (
      <section id='card'>
        <h3>Nome: {name}</h3>
        <p>Tipo: {type}</p>
        <span>Peso: {value}kg</span>
        <img src={image} alt={name} />
      </section>
    );
  }
}
 
export default Card;