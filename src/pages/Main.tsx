import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMain from '../components/Hero';
import Terminal from '../components/Terminal';

function Main() {
  return (
    <>
      <div className='layout'>
        <Sidebar />
        <Navbar />
        <HomeMain />
      </div>
      <div className='layout'>
        <Terminal />
      </div>
    </>
  );
}

export default Main;
