import React, { Component } from 'react';
import Modal2 from '../Modals/Modal2';
import photo from '../../img/labcar-project.png';
import './css/ShowingModal.css';

class ShowingModal2 extends Component {
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
      <div className='container-project2'>
        <div className='btn-img-project'>
          <img src={photo} alt='poject' className='project' />
          <button onClick={this.showModal} className='btn-show-modal'> Ver más
          </button>
        </div>
          <Modal2 id='modalid' show={this.state.show} handleClose={this.hideModal} />
      </div>
    )
  }
}

export default ShowingModal2;