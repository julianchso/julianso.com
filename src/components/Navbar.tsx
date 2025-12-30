import { NavLink } from 'react-router';
import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';

function Navbar() {
  return (
    <div className='nav'>
      <button aria-controls='nav__primary' aria-expanded='false' className='nav__mobile-toggle'>
        <NavMenuOpen />
      </button>

      <ul id='nav__primary'>
        <li className='nav__menu-button'>
          <button id='button__navbar_close'>
            <NavMenuClose />
            <span className='sr-only'>Close menu</span>
          </button>
        </li>
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
