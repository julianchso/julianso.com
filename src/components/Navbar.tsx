import { NavLink } from 'react-router';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='nav flex'>
      <NavMenuOpen navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavMenuClose navOpen={navOpen} setNavOpen={setNavOpen} />

      <ul id='nav__primary' className={`${navOpen ? 'nav__primary_translateX' : ''}`}>
        <li>
          <NavLink to='/' className='nav__link nav__link-active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' className='nav__link'>
            Projects
          </NavLink>
          <li>
            <NavLink to='/About' className='nav__link'>
              Resume
            </NavLink>
          </li>
          <li>
            <button>
              <Moon />
              <Sun />
            </button>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
