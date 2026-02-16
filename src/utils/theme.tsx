type Theme = 'theme-dark' | 'theme-light';

function setTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.className = theme;
}

function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light');
    }
  } else {
    setTheme('theme-dark');
  }
}

export { setTheme, keepTheme };
