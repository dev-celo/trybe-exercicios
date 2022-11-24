import React from 'react'
import './card.css'

class Card extends React.Component {
  render() { 
    const { name, type, image, averageWeight: {value}} = this.props.pokemon;
    return (
      <section id='card'>
        <h3>Nome: {name}</h3>
        <p>Tipo: <span>{type}</span></p>
        <p>Peso: <span>{value}kg</span></p>
        <img src={image} alt={name} />
      </section>
    );
  }
}
 
export default Card;