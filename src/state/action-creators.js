import * as types from './action-types';
import axios from 'axios';

export function searchLiquor(liquor) {
  return function(dispatch) {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquor}`)
    .then(res => {
      const searchedLiquor = res.data.ingredients
      if (searchedLiquor !== null) {
        dispatch({type: types.FIND_LIQUOR, payload: searchedLiquor})
      }
      else {
        const onFail = [{idIngredient: Date.now(), strDescription: 'Error: invalid input.', strIngredient: 'Nothing!'}]
        dispatch({type: types.FIND_LIQUOR, payload: onFail})
      }      
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