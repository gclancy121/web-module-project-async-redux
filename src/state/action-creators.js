import * as types from './action-types';
import axios from 'axios';

export function searchLiquor(liquor) {
  return function(dispatch) {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquor}`)
    .then(res => {
      const searchedLiquor = res.data.ingredients
      dispatch({type: types.FIND_LIQUOR, payload: searchedLiquor})
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function changeInput(value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {value}
  }
}