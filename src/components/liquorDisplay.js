import React from "react";
import {connect} from 'react-redux';
import * as actions from "../state/action-creators"

class Liquor extends React.Component {
  render() {
    console.log(this.props.liquors)
    return (
      <div>
       {this.props.liquors.ingredients.map(item => {
         console.log(item)
         return (
           <div> 
             <h4>Liquor ABV: {item.strABV}</h4>
             <h5>Liquor Description:</h5>
             <p>{item.strDescription}</p>
           </div>
         )
       })}
      </div>
    )
  }
}

export default connect(st => st, actions)(Liquor)