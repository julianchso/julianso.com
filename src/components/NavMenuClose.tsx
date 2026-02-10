import MenuCloseIcon from '/src/assets/navbar_menu_close.svg?react';

import '../App.css';

type NavMenuCloseProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMenuClose({ navOpen, setNavOpen }: NavMenuCloseProps) {
  return (
    <>
      <button
        id='button__navbar_close'
        className={`navbar__open-close ${navOpen ? '' : 'is-hidden'}`}
        onClick={() => setNavOpen(false)}
        aria-controls='nav__primary'
        aria-expanded={navOpen}
      >
        <MenuCloseIcon className='menu-icon' />
      </button>
    </>
  );
}

export default NavMenuClose;
