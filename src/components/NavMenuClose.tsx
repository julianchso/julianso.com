import MenuCloseIcon from '/src/assets/navbar_menu_close.svg?react';

import '../App.css';

function NavMenuClose() {
  return (
    <button id='button__navbar_close' aria-controls='nav__primary'>
      <span className='sr-only'>Close Menu</span>
      <MenuCloseIcon className='menu-icon' />
    </button>
  );
}

export default NavMenuClose;
