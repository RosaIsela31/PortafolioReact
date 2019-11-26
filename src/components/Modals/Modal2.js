import React from 'react';
import './css/Modal2.css';
import './css/Modal1.css';

import exit from '../../img/exit.png';

import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

  

const Modal2 = ({ handleClose, show }) => {
  

  const showHideClassName = show ? "modal display-block" : "modal display-none";

 
    return(
      <div className={showHideClassName}>
      <div className='modal-project2'>
        <button className='btn-exit' onClick={handleClose} >
          <img src={exit} alt='exit' className='exit' />
        </button>
        <div className='content-text-modal'>
          <h3>Labcar</h3> 
          
          <div className='container-description-project-mobile'>
            <p>
              Web App que te ayuda a pedir un taxi en cualquier lugar que te encuentres.
              <br/>
               Con la API Geolocation de Google, permite saber tu ubicación en tiempo real.
               <br/>
              Proyecto realizado con HTML, CSS y JS
            </p>
            <div>
              < FaHtml5 className='icon-skill-mobile'/>
              < FaCss3Alt className='icon-skill-mobile'/>
              < FaJsSquare className='icon-skill-mobile'/>
            </div>
          </div>
          <a className='tag-a' target="_blank" rel="noopener noreferrer" href='https://labcar-react-googlemap.herokuapp.com/'><b>Ir al proyecto</b></a>

        </div>
      </div>
      </div>
    )
  
}


export default Modal2;