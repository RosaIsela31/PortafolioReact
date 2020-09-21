// Dependencies
import React, { Component } from 'react';
//assets
import './css/ContactMe.css';

class ContactMe extends Component{

  render (){
    return (
      <div className="contact-me" id='cv'>

       <div className='form-container'>
       <h2 className='know-me'>¡Conóceme más!</h2> 
       <h4>Aquí puedes descargar mi CV</h4> <br/>
        <form>
          <button className='send' >
          <a className='download-cv' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1Wdm3Cu5w11OKFFhDMHoqZMoutIXjyja-/view?usp=sharing'> Descargar </a>
          </button>
        </form>
       </div>
      
      </div>
    );
  }

}

export default ContactMe; 
