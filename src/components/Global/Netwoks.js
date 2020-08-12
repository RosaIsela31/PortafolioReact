import React, { Component } from 'react';
import './css/Networks.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github1.png';
import twitter from '../../img/twitter.png';
import email from '../../img/email.png';



class Networks extends Component {
  render(){
    return(
      <div className='Networks' id='networks'>
         < div> 
               <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/rosa-isela-lopez-palma/' className='network'>
                  <img src={linkedin} alt='linkedin' className='linkedin' />
               </a>

               <a target="_blank" rel="noopener noreferrer" href='https://github.com/RosaIsela31' className='network'>
                  <img src={github} alt='github' className='github'/>
               </a>

               <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/RosaIselaLpezP1' className='network'>
                  <img src={twitter} alt='twitter' className='twitter'/>
               </a>

               <a href="mailto:rosaislp@gmail.com?Subject=Hola%20" target="_top"     className='network'>
                  <img src={email} alt='email' className='email'/>
               </a>
         </div>

         <div className='icons-mobile' id='networks-mobile'>
             <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/rosa-isela-lopez-palma/'>
               <img src={linkedin} alt='linkedin' className='linkedin-mobile' />
             </a>
          
             <a target="_blank" rel="noopener noreferrer" href='https://github.com/RosaIsela31'>
               <img src={github} alt='github' className='github-mobile'/>
             </a>
         
              <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/RosaIselaLpezP1'>
                <img src={twitter} alt='twitter' className='twitter-mobile'/>
              </a>
         
               <a href="mailto:rosaislp@gmail.com?Subject=Hola%20" target="_top">
                 <img src={email} alt='email' className='email-mobile'/>
               </a>
         </div>
      </div>
    )
  }

}

export default Networks;