import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HomeMain from '../components/Hero';

function Main() {
  return (
    <>
      <div className='layout'>
        <Sidebar />
        <Navbar />
        <HomeMain />
      </div>
    </>
  );
}

export default Main;
