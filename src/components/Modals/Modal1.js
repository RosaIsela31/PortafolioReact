import React from 'react';
import './css/Modal1.css';

import exit from '../../img/exit.png';

// Skill icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";


  

const Modal1 = ({ handleClose, show }) => {
  

  const showHideClassName = show ? "modal display-block" : "modal display-none";

 
    return(
      <div className={showHideClassName}>
      <div className='modal-project1'>
        <button className='btn-exit' onClick={handleClose} >
          <img src={exit} alt='exit' className='exit' />
        </button>
        <div className='content-text-modal'>
          <h2>Burger Queen</h2> 
          
          <div className='container-description-project-mobile'>
            <p>
              Producto realizado para el <br/> 
              restaurante vegado Pand'monium. <br/> 
              Se trata de una web app que facilita la toma de comandas. <br/> 
              Es una PWA realizada con JavaScript, React, HTML, CSS y Sass. 
            </p>
            <br/>
            <div>
              < FaJsSquare className='icon-skill-mobile'/>
              < FaReact className='icon-skill-mobile'/>
              < FaHtml5 className='icon-skill-mobile'/>
              < FaCss3Alt className='icon-skill-mobile'/>
              < FaSass className='icon-skill-mobile'/>
            </div>
          </div>
          <a className='tag-a' target="_blank" rel="noopener noreferrer" href='https://oyukicv.github.io/MEX008-FE-Burger-Queen/'><b>Ir al proyecto</b></a>
        </div>
      </div>
      </div>
    )
  
}


export default Modal1;