import { useState, useEffect } from 'react';

const subtitles = ['> Software Developer', '> Story Teller', '> Curiosity-Driven'];

function Subtitle() {
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = subtitles[index];

    let timeout: number;

    if (phase === 'typing') {
      if (charCount < current.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), 80);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 3000);
      }
    }

    if (phase === 'deleting') {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), 50);
      } else {
        setPhase('pausingStart');
        setIndex((i) => (i + 1) % subtitles.length);
      }
    }

    if (phase === 'pausingStart') {
      timeout = setTimeout(() => setPhase('typing'), 500);
    }

    return () => clearTimeout(timeout);
  }, [charCount, phase, index]);

  return <span className='subtitle'>{subtitles[index].slice(0, charCount)}</span>;
}

export default Subtitle;
