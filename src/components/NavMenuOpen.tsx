import MenuOpenIcon from '/src/assets/navbar_menu_open.svg?react';

import '../App.css';

type NavMenuOpenProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMenuOpen({ navOpen, setNavOpen }: NavMenuOpenProps) {
  console.log('NavMenuOpen navOpen:', navOpen);
  return (
    <>
      <button
        id='button__navbar_open'
        className={navOpen ? 'is-hidden' : ''}
        onClick={() => setNavOpen(true)}
        aria-controls='nav__primary'
        aria-expanded={navOpen}
      >
        <span className='sr-only'>Open Menu</span>
        <MenuOpenIcon className='menu-icon' />
      </button>
    </>
  );
}

export default NavMenuOpen;
