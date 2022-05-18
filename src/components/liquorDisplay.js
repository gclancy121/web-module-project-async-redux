import React from "react";
import {connect} from 'react-redux';
import * as actions from "../state/action-creators"

class Liquor extends React.Component {
  onChange = evt => {
  console.log(this.props)
  const {name, value} = evt.target;
  this.props.changeInput({name, value})
  }
  render() {
    return (
      <>
        <div>
          <h3>Search Your Liquor:</h3>
          <input 
          name='liquorSearch'
          value={this.props.input.value} 
          placeholder='Type Liquor' 
          type="text"
          onChange={this.onChange}
          ></input>
          <button>Search</button>
        </div>
        <div>
        {this.props.liquors.ingredients.map(item => {
          return (
            <div> 
              <h4>Liquor ABV: {item.strABV}</h4>
              <h5>Liquor Description:</h5>
              <p>{item.strDescription}</p>
            </div>
          )
        })}
        </div>
      </>
    )
  }
}

export default connect(st => st, actions)(Liquor)