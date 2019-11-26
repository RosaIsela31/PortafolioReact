// Dependencies
import React, { Component } from 'react';
//assets
import './css/HardSkills.css';
import javascript from '../../img/javascript.png';
import react from '../../img/react2.png';
import github from '../../img/github-skill.gif';
import node from '../../img/node1.png';
import html from '../../img/html.png';
import css from '../../img/css.png';
import git from '../../img/git.png';
import firebase from '../../img/firebase.png';
import circle from '../../img/circle.png';

class HardSkills extends Component{

  render (){
    return (
      <div className="hard-skills" id='hard-skills-id'>
       
        <div className='hardskills-h2'>
          <img src={circle} alt='circle' className='circle'/>
          <h2>HARD SKILLS</h2> <br/><br/><br/>
        </div>

        <div className='hardSkills-desktop'>
          <img src={javascript} alt='javascript' className='javascript-desktop' />
          <img src={html} alt='html' className='html-desktop' />
          <img src={react} alt='react' className='react-desktop' />
          <img src={css} alt='css' className='css-desktop' />              
          <img src={git} alt='git' className='git-desktop' />
          <img src={github} alt='github' className='github-skill-desktop' />
          <img src={node} alt='node' className='node-desktop' />
          <img src={firebase} alt='firebase' className='firebase-desktop' />
        </div>

        <div className='hardSkills-mobile'>
            <div>
              <img src={javascript} alt='javascript' className='javascript' />
              <img src={html} alt='html' className='html' />
            </div>
            <div>
              <img src={react} alt='react' className='react' />
              <img src={css} alt='css' className='css' />
            </div>
            <div>
              <img src={git} alt='git' className='git' />
              <img src={github} alt='github' className='github-skill' />
            </div>
            <div>
              <img src={node} alt='node' className='node' />
              <img src={firebase} alt='firebase' className='firebase' />
            </div>
        </div>
      </div>
    );
  }
}

export default HardSkills; 