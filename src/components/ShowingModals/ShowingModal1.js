import React, { Component } from 'react';
import Modal1 from '../Modals/Modal1';
import photo from '../../img/burgerqueen-project1.png';
import './css/ShowingModal.css';

class ShowingModal1 extends Component {
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
      <div className='container-project1'>
        <div className='btn-img-project'>
          <img src={photo} alt='poject' className='project' />
          <button onClick={this.showModal} className='btn-show-modal'> Ver más
          </button>
        </div>
          <Modal1 id='modalid' show={this.state.show} handleClose={this.hideModal} />
      </div>
    )
  }
}

export default ShowingModal1;