// Dependencies
import React, { Component } from 'react';
import marca from '../../img/marcaR.png';


// Assets
// import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
 
  render() {

    return (
      <div className="Header">
        <img src={marca} alt='marca-R' className='marca-R' />
        <div className='container-a-navbar-desktop'>
          <a href='#description-me' className='a-navbar-desktop'>Sobre Mí</a>
          <a href='#soft-skills-id' className='a-navbar-desktop'>Soft Skills</a>
          <a href='#hard-skills-id' className='a-navbar-desktop'>Hard Skills</a>
          <a href='#projects' className='a-navbar-desktop'>Proyectos</a>
          <a href='#cv' className='a-navbar-desktop'>CV</a>
          <a href='#networks' className='a-navbar-desktop'>Contáctame</a>
          <a href='https://www.linkedin.com/in/rosa-isela-lopez-palma/' target="_blank" rel="noopener noreferrer" className='a-navbar-desktop'>Linkedin</a>
        </div>

      </div>
    );
  }
}

export default Header;