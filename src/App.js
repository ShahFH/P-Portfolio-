import React from 'react';
import './style.css';

import React, { useState } from 'react';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <nav className={isNavOpen ? 'navbar open' : 'navbar'}>
        <div className="nav-brand">C⭕Bloge</div>
        <button className="nav-toggle" onClick={handleNavToggle}>
          Menu
        </button>
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
