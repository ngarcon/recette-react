import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

import Ingredient from '../Ingredient'; 



export class Ingredients extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      empty: !props.ingredients.length,
    };
  }

  render() {

    const {ingredients} = this.props; 

    if (!this.state.empty) {
      return (
          <ul>
            {ingredients.map((ingredient, index)=> <Ingredient key={ingredient.id} ingredient={ingredient}/>)}
          </ul>
      )
    }

    return (
      <ul>
        <li>Rien à afficher</li>
      </ul>
  )

  }
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  )
}

export default Ingredients
