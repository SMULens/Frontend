import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} SMU Lens</p>
    </footer>
  );
}

export default Footer;
