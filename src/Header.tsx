import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [active, setActive] = useState('inicio');

  return (
    <nav className="header-content">
      <ul>
        <li>
          <a
            href="#inicio"
            className={active === 'inicio' ? 'active main-menu' : ''}
            onClick={() => setActive('inicio')}
          >
            Main Menu
          </a>
        </li>
        <li>
          <a
            href="#acerca"
            className={active === 'acerca' ? 'active characters' : ''}
            onClick={() => setActive('acerca')}
          >
            Characters
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className={active === 'contacto' ? 'active about' : ''}
            onClick={() => setActive('contacto')}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;