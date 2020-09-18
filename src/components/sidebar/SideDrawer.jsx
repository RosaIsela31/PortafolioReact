import React, { Component } from 'react';
import './Style.css';
// import Backdrop from './Backdrop.jsx';


class SideDrawer extends Component {
  // state = {
  //   sideDrawerOpen: false
  // };

  // drawerToggleClickHandler = () => {
  //    this.setState((prevState) => {
  //      return{sideDrawerOpen: !prevState.sideDrawerOpen}
  //    });
  // };

  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen: false});
  // };
  constructor(props){
    super(props);
    this.state={
      menuOpen:true,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }


  
  render(){
    let drawerClasses = ['side-drawer'];
    if(this.props.show){
      drawerClasses = ['side-drawer open'];
    }

    // let backdrop;
    //   if(this.state.sideDrawerOpen){
    //     backdrop = <Backdrop click={this.backdropClickHandler}/>;
    //   }

    return(
      <div>
        <nav className={drawerClasses.join('')} id='sidebar-mobile'>
          <a href='#description-me' onClick={()=>{this.handleLinkClick();}}>Sobre Mí</a> <br/>
          <a href='#soft-skills-id'>Soft Skills</a> <br/>
          <a href='#hard-skills-id'>Hard Skills</a><br/>
          <a href='#projects'>Proyectos</a><br/>
          <a href='#networks-mobile'>Contáctame</a> <br/>
          <a href='#cv'>CV</a><br/>
          <a href='https://www.linkedin.com/in/rosa-isela-lopez-palma/' target="_blank" rel="noopener noreferrer">Linkedin</a><br/>
          <a href='https://github.com/RosaIsela31' target="_blank" rel="noopener noreferrer">Github</a><br/>
          {/* <Sidebar show={this.state.show} handleClose={this.hideModal}/> */}
        </nav>
      </div>
      
    )
  }
}

 




export default SideDrawer;