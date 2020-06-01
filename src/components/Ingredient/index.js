import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import './style.css'; 

export class Ingredient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false, 
    };

    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event) {
    this.setState({checked: event.target.checked}); 
  }

  render() {
    const {quantity, unit, name} = this.props.ingredient;

    let liClasses ="ingredient "; 
    liClasses+= (this.state.checked) ? 'checked' : ''; 

    return (
        <li className={liClasses}>
          <input type="checkbox" onChange={this.handleChange}/>
          <label>
          <span className="quantity">{quantity} {unit}</span> {name}
          </label>
        </li>
    )
  }
}

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default Ingredient
