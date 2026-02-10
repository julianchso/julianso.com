import MenuOpenIcon from '/src/assets/navbar_menu_open.svg?react';

import '../App.css';

type NavMenuOpenProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavMenuOpen({ navOpen, setNavOpen }: NavMenuOpenProps) {
  return (
    <>
      <button
        id='button__navbar_open'
        className={`navbar__open-close ${navOpen && 'is-hidden'}`}
        onClick={() => setNavOpen(true)}
        aria-controls='nav__primary'
        aria-expanded={navOpen}
      >
        <MenuOpenIcon className='menu-icon' />
      </button>
    </>
  );
}

export default NavMenuOpen;
