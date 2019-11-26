// Dependencies
import React, { Component } from 'react';
//assets
import './css/AboutMe.css';
import photo from '../../img/photo.jpg';
import Sidebar from '../../components/sidebar/Sidebar';


class AboutMe extends Component{

  render (){
    return (
      <div className='about-me'>
      <Sidebar /> 
      <p className='name'>ROSA ISELA LÓPEZ PALMA</p> <br/> <br/> <br/> 
      <img className='photo' alt='initial-img'  src= {photo}/> <br/><br/><br/>
      </div>
    );
  }

}

export default AboutMe; 
