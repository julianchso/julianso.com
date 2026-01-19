import React from 'react';
import profilePic from '../assets/tsarevets.jpeg';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1>Julian So</h1>
        <span>&gt; Software Developer</span>
        <div className='crop-container'>
          <img src={profilePic} alt='profile_pic' className='profile-pic' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
