import { useEffect, useState } from 'react';
import { setTheme } from '../utils/theme';

import { Sun, Moon } from 'lucide-react';

function LightDarkToggle() {
  const [toggle, setToggle] = useState('light');
  let theme = localStorage.getItem('theme');

  const handleClickTheme = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setToggle('light');
    } else {
      setTheme('theme-dark');
      setToggle('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setToggle('dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setToggle('light');
    }
  }, [theme]);

  return (
    <div
      className='light-dark-toggle'
      aria-label={`Switch to ${toggle === 'light' ? 'dark' : 'light'} theme`}
    >
      <button onClick={handleClickTheme}>{toggle === 'light' ? <Moon /> : <Sun />}</button>
    </div>
  );
}

export default LightDarkToggle;
