import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Navbar />

      <div className='layout'>
        <section className='section' id='home'>
          <Hero />
        </section>

        <section className='section' id='projects'>
          <Projects />
        </section>

        <section className='section'>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Main;
