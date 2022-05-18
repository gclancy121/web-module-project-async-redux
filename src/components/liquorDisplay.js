import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'

class LiquorDisplay extends React.Component {
  render () {
    return (
    <div>
      {this.props.liquors.ingredients.map(item => {
        return (
          <div key={item.idIngredient}> 
          <h5>Liquor Description:</h5>
          <p>{item.strDescription}</p>
          </div>
          ) 
          })}
      </div>
    )
  }
}

export default connect(st => st, actions)(LiquorDisplay)