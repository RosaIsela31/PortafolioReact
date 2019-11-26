import React, { Component } from 'react';
import './css/Description.css';




class Description extends Component {
  render(){
    return(
      <div className='description' id='description-me'>
        <div className='container-description'>
          <p> 
            <b>
                Desarrolladora web Front End | Lic. Ciencias Biológicas
            </b>
            <br/>
            <br/>
                Soy una mujer enfocada, autodidacta y apasionada por el código.
              <br/>
                Me encantan los retos, trabajar arduamente para superarlos y   crecer como persona en el proceso.
              <br/>
                Busco formar parte de una empresa con una gran cultura de trabajo.
              
           
          </p>
        </div>

      </div>
    )
  }
}

export default Description;