import React, { useState } from 'react';
import {useDarkMode} from './modeHooks/useDarkMode';
import '../stylesheets/scss/togglemode.css'

//darkMode and setDarkMode come from useDarkMode
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    //below turns div on and off
    var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        } 
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