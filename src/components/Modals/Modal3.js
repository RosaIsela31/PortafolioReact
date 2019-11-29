import React from 'react';
import './css/Modal3.css';
import './css/Modal1.css';

import exit from '../../img/exit.png';

// Skill icons
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


  

const Modal3 = ({ handleClose, show }) => {
  

  const showHideClassName = show ? "modal display-block" : "modal display-none";

 
    return(
      <div className={showHideClassName}>
      <div className='modal-project3'>
        <button className='btn-exit' onClick={handleClose} >
          <img src={exit} alt='exit' className='exit' />
        </button>
        <div className='content-text-modal'>
          <h2>Beginning Poke</h2> 
          <div className='container-description-project-mobile'>
            <p>
               Web App que consume la data de Pokemon,
               con la finalidad de que el usuario adquiera los conocimientos básicos para adentrarse en el mundo pokémon.
              <br/>
              Realizada con JavaScript, 
              HTML y CSS. 
            </p>
            <br/>
            <div>
              < FaJsSquare className='icon-skill-mobile'/>
              < FaHtml5 className='icon-skill-mobile'/>
              < FaCss3Alt className='icon-skill-mobile'/>
            </div>
          </div>

          
          <a className='tag-a' target="_blank" rel="noopener noreferrer" href='https://rosaisela31.github.io/MEX-Data-Lovers-008/src'><b>Ir al proyecto</b></a>
        </div>
      </div>
      </div>
    )
  
}


export default Modal3;