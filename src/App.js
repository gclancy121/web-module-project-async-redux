import React from 'react';
import { connect } from 'react-redux';
import * as actions from './state/action-creators'

import LiquorForm from './components/liquorForm';
import LiquorDisplay from './components/liquorDisplay';


import './App.css';

function App(props) {
  return (
    <>
      <div className="App">
        <h1>Liquor Data Fetcher</h1>
        <p>Made courtesy of <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a></p>
      </div>
      
      <LiquorForm />
      <LiquorDisplay />
    </>
  );
}

export default connect(st => st, actions)(App);