// Dependencies
import React, { Component } from 'react';
//assets
import './css/SoftSkills.css';
import circle from '../../img/circle.png';

// Library

import { FaHandPointUp } from 'react-icons/fa';
import { FaHourglassStart } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';
import { MdBuild } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { GiCherish } from "react-icons/gi";
import { MdWatchLater } from "react-icons/md";







class SoftSkills extends Component{

  render (){
    return (
     
       <div className="soft-skills" id='soft-skills-id'>
       <div className='softskills-h2'>
       <img src={circle} alt='circle' className='circle'/>
       <h2>SOFT SKILLS </h2>
       </div>
       <br/><br/><br/>
       <div className='circle-soft-white'>
         <p className='paragraph-soft'>Determinación</p>
         <p className='paragraph-soft'>Proactividad </p>
         <p className='paragraph-soft'>Resolución de problemas </p>
         <p className='paragraph-soft'>Gestión de tiempo </p>
         <p className='paragraph-soft'>Trabajo en equipo</p>
         <p className='paragraph-soft'>Comunicación efectiva </p>
         <p className='paragraph-soft'>Creatividad </p>
         <p className='paragraph-soft'>Responsabilidad</p>
        </div> 

        <div className='soft-skills-web'>
         <div className='container-icons-rigth'>
          <div className='container-icon'>
            < AiFillFire className='icon'/>
            <p className='paragraph-soft'>Determinación</p>
          </div>
          <div className='container-icon'>
            < FaHandPointUp className='icon'/>
            <p className='paragraph-soft'>Proactividad </p>
          </div>
          <div className='container-icon'>
            < MdBuild className='icon'/>
            <p className='paragraph-soft'>Resolución de problemas </p>
          </div>
          <div className='container-icon'>
            < FaHourglassStart className='icon'/>
            <p className='paragraph-soft'>Gestión de tiempo </p>
          </div>
         </div>

         <div className='container-icons-left'>
          <div className='container-icon'>
            < GiCherish className='icon'/>
            <p className='paragraph-soft'>Trabajo en equipo</p>
          </div>
          <div className='container-icon'>
            < FaVolumeUp className='icon'/>
            <p className='paragraph-soft'>Comunicación efectiva </p>
          </div>
          <div className='container-icon'>
            < AiFillBulb className='icon'/>
            <p className='paragraph-soft'>Creatividad </p>
          </div>
          <div className='container-icon'>
            < MdWatchLater className='icon'/>
            <p className='paragraph-soft'>Responsabilidad</p>
          </div>
         </div>

        </div> 
     
       </div>
     
    );
  }

}

export default SoftSkills; 