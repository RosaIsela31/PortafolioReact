// Dependencies
import React, { Component } from 'react';
//assets
import './css/Projects.css';
import photoBurger from '../../img/burgerqueen-project1.png';
import photoLabcar from '../../img/labcar-project.png';
import redsocial from '../../img/redsocial-project.png';
import circle from '../../img/circle.png';

import ShowingModal1 from '../ShowingModals/ShowingModal1';
import ShowingModal2 from '../ShowingModals/showingModal2';
import ShowingModal3 from '../ShowingModals/ShowingModal3';

// Skill icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";










class Projects extends Component{
  state = { 
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  showModal2 = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render (){
    return (
      <div className='portafolio-div' id='projects'>
      <div className='portafolioh3'>
        <img src={circle} alt='circle' className='circle' />
        <h2 className='proyectosh3'>PROYECTOS</h2> <br/><br/><br/>
      </div>

      <div className="projects portafolio-container">
        <section className='portafolio-item1'>
          <img src={photoBurger} alt='alt' className='phooto'/>
          <br /><br /><br />
          <h1>Burger Queen</h1>
          <section className='portafolio-text'>
            <h2>Burger Queen</h2> <br />
            <h4>Producto realizado para el
             restaurante vegano Pand'monium. 
             Se trata de una web app responsive que facilita la toma de comandas.
             Es una PWA realizada con JavaScript,
             React, HTML, CSS y Sass. <br/><br/>
             <div>
              < FaJsSquare className='icon-skill'/>
              < FaReact className='icon-skill'/>
              < FaHtml5 className='icon-skill'/>
              < FaCss3Alt className='icon-skill'/>
              < FaSass className='icon-skill'/>
             </div>
             </h4> <br />
             <a className='tag-a-desktop' target="_blank" rel="noopener noreferrer" href='https://oyukicv.github.io/MEX008-FE-Burger-Queen/'><h5>Ir al proyecto</h5></a>
          </section>
        </section>

        <section className='portafolio-item2'>
          <img src={photoLabcar} alt='alt' className='phooto'/>
          <br /><br /><br />
          <h1>Labcar</h1>
          <section className='portafolio-text'>
            <h2>Labcar</h2> <br/>
            <h4>Web App que te ayuda a pedir un taxi en cualquier lugar que te encuentres. Con la API Geolocation de Google, permite saber tu ubicación en tiempo real. Proyecto realizado con HTML, CSS y JS<br/> <br/>
            <div>
             < FaHtml5 className='icon-skill'/>
             < FaCss3Alt className='icon-skill'/>
             < FaJsSquare className='icon-skill'/>
            </div>
      
            </h4> <br />
             <a className='tag-a-desktop' target="_blank" rel="noopener noreferrer" href='https://rosaisela31.github.io/MEX008-labcar/index'><h5>Ir al proyecto</h5></a>
          </section>
        </section>

        <section className='portafolio-item3'>
          <img src={redsocial} alt='alt' className='phooto'/>
          <br /><br /><br />
          <h1>Red Social</h1>
          <section className='portafolio-text'>
            <h2>Red Social</h2> <br/>
            <h4>Es una red social para 
            novias, novios y proveedores.
            Reunimos todo lo que necesitas para tu boda en un solo lugar.<br/>
            Es una PWA realizada con JavaScript, React,
            HTML, CSS, Nodejs y Mongodb.</h4> <br/>
            <div>
             < FaJsSquare className='icon-skill'/>
             < FaReact className='icon-skill'/>
             < FaHtml5 className='icon-skill'/>
             < FaCss3Alt className='icon-skill'/>             
             < FaNode className='icon-skill'/>
             < DiMongodb className='icon-skill'/>
            </div>
            <br/>
             <a className='tag-a-desktop' target="_blank" rel="noopener noreferrer" href='https://isislazaro.github.io/MEX008-social-network/src/'><h5>Ir al proyecto</h5></a>
          </section>
        </section>
        
      </div>

    
      <div className='portafolio-container-mobile' >
        <ShowingModal1 /> 
      </div>

      <div className='portafolio-container-mobile '>
        <ShowingModal2 />
      </div>

      <div className='portafolio-container-mobile div-project3'>
        <ShowingModal3 />
      </div>

      </div>
    );
  }

}

export default Projects; 
