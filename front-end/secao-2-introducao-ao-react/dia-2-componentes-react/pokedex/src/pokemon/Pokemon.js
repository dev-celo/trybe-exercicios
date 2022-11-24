import React from 'react'
import Card from '../card/Card';

class Pokemon extends React.Component {
  render() { 
    const { pokemon } = this.props;
    return (
      <li>
        <Card pokemon = {pokemon}/>
      </li>
    );
  }
}
 
export default Pokemon;