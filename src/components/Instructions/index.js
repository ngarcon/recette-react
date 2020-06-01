import React, { Component } from 'react'; 

import Instruction from '../Instruction';

import './style.css'; 

export class Instructions extends Component {
  render() {

    const {instructions} = this.props; 
    
    return (
      <div className="instructionContainer">
        
        <ul>
          {instructions.map((instruction, index)=> <Instruction key={index}instruction={instruction}/>)}
        </ul>
      </div>
    )
  }
};

export default Instructions;
