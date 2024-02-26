// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ user }) => {
  const { role, name } = user;


  return (
   
      <div className="navbar">
        <div className="navbar-left">
          <p className="navbar-brand">Welcome, {name}</p>
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            {role === 'ACC' && (
              <>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Logout</Link></li>
              </>
            )}
            {role === 'admin' && (
              <>
                <li className="nav-item"><Link to="/list-of-users" className="nav-link">List of Users</Link></li>
                <li className="nav-item"><Link to="/create-user" className="nav-link">Create User</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
};

export default Nav;
