import { HashRouter, Link } from 'react-router';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';
import LightDarkToggle from './LightDarkToggle';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='nav'>
      <div className='nav__toggle'>
        <LightDarkToggle />
      </div>

      <div className='nav__controls'>
        <NavMenuOpen navOpen={navOpen} setNavOpen={setNavOpen} />
        <NavMenuClose navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>

      <ul className={`nav__primary ${navOpen ? 'nav__primary--open' : ''}`}>
        <li className='nav__link'>
          <a href='#home'>Home</a>
        </li>
        <li className='nav__link'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='nav__link'>
          <div>Resume</div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
