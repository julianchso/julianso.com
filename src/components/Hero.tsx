import profilePic from '../assets/tsarevets.jpeg';
import ContactLinks from './ContactLinks';
import Terminal from './Terminal';
import Subtitle from './Subtitle';

import { Github, Linkedin } from 'lucide-react';

function Hero() {
  return (
    <div className='hero__content'>
      <div className='hero__layout'>
        <div className='hero__header'>
          <h1>Julian So</h1>
          <div>
            <Subtitle />
          </div>
          <div className='hero__contact'>
            <ContactLinks icon={Github} link='https://github.com/julianchso' />
            <ContactLinks icon={Linkedin} link='https://www.linkedin.com/in/chjulianso/' />
          </div>
        </div>
        <div className='hero__image'>
          <img src={profilePic} alt='profile_pic' className='profile-pic' />
        </div>
      </div>
      <Terminal />
    </div>
  );
}

export default Hero;
