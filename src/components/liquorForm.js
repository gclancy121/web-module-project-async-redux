import React from "react";
import {connect} from 'react-redux';
import * as actions from "../state/action-creators"

class LiquorForm extends React.Component {
  onChange = evt => {
  this.props.changeInput(evt.target.value)
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.searchLiquor(this.props.input.liquorName);
  }
  render() {
    return (
        <div className="liquorSearcher">
          <h3>Search Your Liquor:</h3>
          <form onSubmit={this.onSubmit}>
            <input 
            name='liquorSearch'
            value={this.props.input.liquorName} 
            placeholder='Type Liquor' 
            type="text"
            onChange={this.onChange}
            ></input>
            <button>Search</button>
          </form>
        </div>
    )
  }
}

export default connect(st => st, actions)(LiquorForm)