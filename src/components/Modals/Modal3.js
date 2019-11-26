import React from 'react';
import './css/Modal3.css';
import './css/Modal1.css';

import exit from '../../img/exit.png';

// Skill icons
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";


  

const Modal3 = ({ handleClose, show }) => {
  

  const showHideClassName = show ? "modal display-block" : "modal display-none";

 
    return(
      <div className={showHideClassName}>
      <div className='modal-project3'>
        <button className='btn-exit' onClick={handleClose} >
          <img src={exit} alt='exit' className='exit' />
        </button>
        <div className='content-text-modal'>
          <h2>Together-Click</h2> 
          <div className='container-description-project-mobile'>
            <p>
              Es una red social para 
              novias, novios y proveedores.
              <br/>
              Reunimos todo que necesitas para tu boda en un solo lugar.
              <br/>
              Es una PWA realizada con JavaScript, React, 
              HTML, CSS, Nodejs y Mongodb. 
            </p>
            <br/>
            <div>
              < FaJsSquare className='icon-skill-mobile'/>
              < FaReact className='icon-skill-mobile'/>
              < FaHtml5 className='icon-skill-mobile'/>
              < FaCss3Alt className='icon-skill-mobile'/>
              < FaNode className='icon-skill-mobile'/>
              < DiMongodb className='icon-skill-mobile'/>
            </div>
          </div>

          
          <a className='tag-a' target="_blank" rel="noopener noreferrer" href='https://isislazaro.github.io/MEX008-social-network/src/'><b>Ir al proyecto</b></a>
        </div>
      </div>
      </div>
    )
  
}


export default Modal3;