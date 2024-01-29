// LightDarkModeToggle.js

import React, { useEffect, useState } from 'react';
import './LightDarkModeToggle.css';

const LightDarkModeToggle = () => {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light-mode');

  useEffect(() => {
    document.body.classList.add(mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  return (
    <div className="container">
      {/* <h1>Welcome to My React Website</h1>
      <p>This is some sample text.</p> */}
      <button onClick={toggleMode}>(*)</button>
    </div>
  );
};

export default LightDarkModeToggle;
