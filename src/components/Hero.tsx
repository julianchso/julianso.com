import React from 'react';
import profilePic from '../assets/tsarevets.jpeg';
import ContactLinks from './ContactLinks';

import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='header'>
          <h1>Julian So</h1>
          <span className='subtitle'>&gt; Software Developer</span>
          <div className='contact'>
            <ContactLinks icon={faGithub} link='https://github.com/julianchso' />
            <ContactLinks icon={faSquareLinkedin} link='https://www.linkedin.com/in/chjulianso/' />
          </div>
        </div>
        <div className='profilepic-container'>
          <img src={profilePic} alt='profile_pic' className='profile-pic' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
