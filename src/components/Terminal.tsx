function Terminal() {
  return (
    <>
      <div className='terminal-container'>
        <div className='terminal-header'>
          <div className='terminal-circle terminal-circle_close'></div>
          <div className='terminal-circle terminal-circle_minimize'></div>
          <div className='terminal-circle terminal-circle_maximize'></div>
        </div>
        <div className='terminal-body'></div>
      </div>
    </>
  );
}

export default Terminal;
