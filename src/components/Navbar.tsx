import { useEffect, useState } from 'react';

import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';
import ProgressBar from './ProgressBar';
import LightDarkToggle from './LightDarkToggle';
import scrollTo from '../utils/scrollTo';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <ProgressBar />
      <div className={`nav ${scrolled ? 'nav--shrink' : ''}`}>
        <div className='nav__toggle'>
          <LightDarkToggle />
        </div>

        <div className='nav__controls'>
          <NavMenuOpen navOpen={navOpen} setNavOpen={setNavOpen} />
          <NavMenuClose navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>

        <ul className={`nav__primary ${navOpen ? 'nav__primary--open' : ''}`}>
          <li className='nav__link'>
            <a onClick={() => scrollTo('home')}>Home</a>
          </li>
          <li className='nav__link'>
            <a onClick={() => scrollTo('projects')}>Projects</a>
          </li>
          <li className='nav__link '>
            <a
              href='../assets/Julian_So_Software_Resume.pdf'
              className='nav__link__Resume'
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
