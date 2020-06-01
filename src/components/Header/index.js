import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

// Styles import
import './styles.css'; 



export class Header extends Component {
  render() {
    const {title, author, difficulty, img} = this.props; 
    return (
        <header className="header">
          <div className="imgContainer">
            <img src={img}/>
          </div>
          <div className="infoContainer">
            <h1>{title}</h1>
            <h2>{author} - {difficulty}</h2>
          </div>
        </header>
    )
  }
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Header;
