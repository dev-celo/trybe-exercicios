// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    const { count, dispatch, clicks } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(actionCreator())} id='incrementOne'>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}  id='incrementTwo'>Incrementa 5</button>

        <h3>Numero de clicks: {clicks} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { count: state.count, clicks: state.clicks }
);

export default connect(mapStateToProps)(App); 
