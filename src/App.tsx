import { useEffect } from 'react';

import Main from './pages/Main';
import './App.css';

import '../styles/index.css';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
