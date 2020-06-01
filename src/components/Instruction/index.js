import React, { Component } from 'react';

import './style.css';

export class Instruction extends Component {
  render() {
    return (
      <div>
        <li><span className="orange">&mdash;</span>{this.props.instruction}</li>
      </div>
    )
  }
}

export default Instruction; 
