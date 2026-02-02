import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

function Main() {
  return (
    <>
      <div className='layout'>
        <div className='section'>
          <Sidebar />
          <Navbar />
          <Hero />
        </div>
        <div className='section'>
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Main;
