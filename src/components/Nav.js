import React from 'react';
import "./Nav.css"
function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Hello, ACC</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Profile</button>
        <button className="navbar-button">Logout</button>
      </div>
    </nav>
  );
}

export default Nav;
