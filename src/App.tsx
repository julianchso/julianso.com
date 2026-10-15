import { useEffect } from 'react';

import { keepTheme } from './utils/theme';
import Main from './pages/Main';
import './App.css';

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <>
      <Main />
    </>
  );
}

export default App;
