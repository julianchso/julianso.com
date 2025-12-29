import './App.css';
import Navbar from './components/Navbar';
import HomeMain from './components/HomeMain';
// import NavMenuOpen from './components/NavMenuOpen';

import '../styles/index.css';

function App() {
  return (
    <div className='main'>
      {/* <button id='button__navbar_open'>
        <NavMenuOpen />
      </button> */}
      <Navbar />
      <HomeMain />
    </div>
  );
}

export default App;
