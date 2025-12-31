import MenuOpenIcon from '/src/assets/navbar_menu_open.svg?react';

import '../App.css';

function NavMenuOpen() {
  return (
    <>
      {/* <button id='button__navbar_close' className='sr-only'>
        <MenuOpenIcon />
        Open Menu
      </button> */}
      <button id='button__navbar_close'>
        <span className='sr-only'>Open Menu</span>
        <MenuOpenIcon className='menu-icon' />
      </button>
    </>
  );
}

export default NavMenuOpen;
