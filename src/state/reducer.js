import { combineReducers } from 'redux'
import * as types from './action-types'

const initialLiquors = {ingredients: []}

function liquors(liquorState=initialLiquors, action) {
  switch(action.type) {
    case types.FIND_LIQUOR: {
      return {
        ...liquorState, ingredients: action.payload
      }
    }
    default:
      return liquorState;
  }
}



const initialInput = {liquorName: ''};
function input(inputState=initialInput, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      return {
        ...inputState, liquorName: action.payload.value
     }
    }
    default:
      return inputState;
  }
}

export default combineReducers({
  liquors,
  input,
  
})