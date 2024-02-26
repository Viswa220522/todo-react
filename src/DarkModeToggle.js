// DarkModeToggle.js
import React, { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import './styles.css'; // Import CSS file with theme styles

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle theme class based on darkMode state
    if (!darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div className="dark-mode-toggle text-center mt-3">
      <label className="form-check-label" htmlFor="toggleDarkMode">
        {darkMode ? <BsSun onClick={toggleDarkMode} /> : <BsMoon onClick={toggleDarkMode} />}
      </label>
    </div>
  );
};

export default DarkModeToggle;
