import { NavLink } from 'react-router';
import NavMenuClose from './NavMenuClose';
import NavMenuOpen from './NavMenuOpen';

function Navbar() {
  return (
    <div className='nav flex'>
      <NavMenuOpen />

      <ul id='nav__primary' className='flex'>
        <li>
          <NavMenuClose />
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
