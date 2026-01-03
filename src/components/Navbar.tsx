import { NavLink } from 'react-router';
import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';
import { useState } from 'react';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='nav flex'>
      <NavMenuOpen navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavMenuClose navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* DEBUG: show state */}
      <p>navOpen: {navOpen ? 'true' : 'false'}</p>

      <ul id='nav__primary' className={`flex ${navOpen ? 'nav__primary_translateX' : ''}`}>
        <li>
          <NavLink to='/' className='nav__link nav__link-active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/About' className='nav__link'>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' className='nav__link'>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
