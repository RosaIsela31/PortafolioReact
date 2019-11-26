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

// import { Shake } from 'reshake'

class App extends Component {
 

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
        {/* <Shake 
          h={0}
          v={2}
          r={20}
          dur={300}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <h1>&lt;Shake /&gt;</h1>
        </Shake> */}

      </div>
    );
  }
}

export default App;