// Dependencies
import React, { Component } from 'react';

// Components
import Header from './Global/Header';
import AboutMe from './Global/AboutMe';
import Phrase from './Global/Phrase';
import HardSkills from './Global/HardSkills';
import SoftSkills from './Global/SoftSkills';
import Projects from './Global/Projects';
import ContactMe from './Global/ContactMe';
import Description from './Global/Description';
import Networks from './Global/Netwoks';

import '../components/Global/css/HardSkills.css';

class TotalView extends Component {
 
  render() {
      return (
          <div className="App">
              <Header />
              <AboutMe />
              <Description />
              <div className='skills'>
              <SoftSkills />
              <HardSkills />
              </div>
              <Phrase />
              <Projects />
              <ContactMe />
              <Networks id='networks'/>
          </div>
      );
  }
}

export default TotalView;