import React from 'react';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'


import './App.css';

function App(props) {
  console.log(props.cocktails.ingredients)
  return (
    <>
      <div className="App">
        <h1>The Cocktail DB</h1>
        <p>Made courtesy of <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a></p>
      </div>

      <div>
        <p></p>
      </div>
    </>
  );
}

export default connect(st => st, actions)(App);