import React from 'react';
import profilePic from '../assets/tsarevets.jpeg';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='header'>
          <h1>Julian So</h1>
          <span className='subtitle'>&gt; Software Developer</span>
        </div>
        <div className='profilepic-container'>
          <img src={profilePic} alt='profile_pic' className='profile-pic' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
