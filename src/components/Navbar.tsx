import { NavLink } from 'react-router';

function Navbar() {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About Me</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
    </>
  );
}

export default Navbar;
