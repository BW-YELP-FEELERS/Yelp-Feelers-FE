import React, { useState } from 'react';
import {useDarkMode} from './modeHooks/useDarkMode';
import '../stylesheets/scss/togglemode.css'
//darkMode and setDarkMode come from useDarkMode
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <nav className="navbar">
      <h1>Feelers Mode</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;