import * as types from './action-types';
import axios from 'axios';

const URL = `www.thecocktaildb.com/api/json/v1/1/search.php?i=`;

export function searchLiquor(liquor) {
  return function(dispatch) {
    axios.get(`${URL}${liquor}`)
    .then(res => {
      debugger
    })
    .catch(err => {
      debugger
    })
  }
}

export function changeInput({name, value}) {
  return {
    type: types.INPUT_CHANGE,
    payload: {name, value}
  }
}