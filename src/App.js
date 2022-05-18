import React from 'react';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'

import Liquor from './components/liquorDisplay';


import './App.css';

function App(props) {
  return (
    <>
      <div className="App">
        <h1>Liquor Data Fetcher</h1>
        <p>Made courtesy of <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a></p>
      </div>

      <div>
        <h3>Search Your Liquor:</h3>
        <input type="text"></input>
        <button>Search</button>
      </div>
      <Liquor />
    </>
  );
}

export default connect(st => st, actions)(App);