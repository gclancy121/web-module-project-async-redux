import { combineReducers } from 'redux'
import * as types from './action-types'

const initialLiquors = {
  ingredients: []
}

function liquors(liquorState=initialLiquors, action) {
  switch(action.type) {
    default:
      return liquorState;
  }
}
const initialInput = {name: ''};
function input(inputState=initialInput, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return { ...inputState, [name]: value }
    }
    default:
      return inputState;
  }
}

export default combineReducers({
  liquors,
  input,
  
})