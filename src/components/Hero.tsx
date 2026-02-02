import React from 'react';
import profilePic from '../assets/tsarevets.jpeg';
import ContactLinks from './ContactLinks';
import Terminal from './Terminal';

import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Github, Linkedin } from 'lucide-react';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='main'>
          <div className='header'>
            <h1>Julian So</h1>
            <span className='subtitle'>&gt; Software Developer</span>
            <div className='contact'>
              <ContactLinks icon={Github} link='https://github.com/julianchso' />
              <ContactLinks icon={Linkedin} link='https://www.linkedin.com/in/chjulianso/' />
            </div>
          </div>
          <div className='profilepic-container'>
            <img src={profilePic} alt='profile_pic' className='profile-pic' />
          </div>
        </div>
        <Terminal />
      </div>
    </div>
  );
}

export default Hero;
