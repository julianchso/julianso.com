import { NavLink } from 'react-router';
import NavMenuClose from './NavMenuClose';

function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <button id='button__navbar_close'>
            <NavMenuClose />
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
