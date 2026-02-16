import { useEffect, useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / pageHeight) * 100);
    };

    window.addEventListener('scroll', handleProgress);
    console.log(progress);
    return () => {
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  return (
    <>
      <div className='progress-container'>
        <div className='progress-bar' style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
}

export default ProgressBar;
