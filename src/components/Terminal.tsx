function Terminal() {
  return (
    <>
      <div className='terminal-container'>
        <div className='terminal shadow-macOS'>
          <div className='terminal-header'>
            <div className='terminal-circle terminal-circle_close'></div>
            <div className='terminal-circle terminal-circle_minimize'></div>
            <div className='terminal-circle terminal-circle_maximize'></div>
          </div>
          <div className='terminal-body'>
            <div className='property'>
              <span className='property-key'>"name": </span>
              <span className='property-value'>"Julian So"</span>
            </div>
            <div className='property'>
              <span className='property-key'>"Languages": </span>
              <span className='property-value'>["JavaScript", "TypeScript", "Python"]</span>
            </div>
            <div className='property'>
              <span className='property-key'>"Hobbies and Interests": </span>
              <span className='property-value'>["Soccer", "Sci-fi", "Dancing", "Video Games"]</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terminal;
