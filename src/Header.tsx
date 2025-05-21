import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="header-content">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#acerca">Acerca</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Header;