import React, { Component } from 'react';
import Modal3 from '../Modals/Modal3';
import photo from '../../img/redsocial-project.png';
import './css/ShowingModal.css';


class ShowingModal3 extends Component {
  state = { 
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render(){
    return(
      <div className='container-project3'> 
        <div className='btn-img-project3'> 
          <img src={photo} alt='poject3' className='project3' /> <br/>
          <button onClick={this.showModal} className='btn-show-modal'> Ver más
          </button>
        </div>

          <Modal3  show={this.state.show} handleClose={this.hideModal} />
      </div>
    )
  }
}

export default ShowingModal3;