import React, {Component} from 'react';
import './Style.css';
import HeaderToolbar from './HeaderToolbar.jsx'
import SideDrawer from './SideDrawer.jsx'
import Backdrop from './Backdrop.jsx';





class toolbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return{sideDrawerOpen: !prevState.sideDrawerOpen}
     });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
    render() {
      let backdrop;
      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <div style={{height: '100%'}}>
        <HeaderToolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        </div>  
      )
    }
  }


export default toolbar;




