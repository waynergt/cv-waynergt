import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelector('.modern-navbar')?.classList.add('navbar-fade-in');
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <nav className="modern-navbar">
      <div className="navbar-content">
        {/* Logo central tipo Flash */}
        <a className="navbar-logo" href="/">
          <svg width="40" height="40" viewBox="0 0 120 120" fill="none">
            <g filter="url(#glow)">
              <path
                d="M52 10 L98 50 L70 50 L100 110 L48 70 L78 70 L52 10 Z"
                fill="#FFD700"
                stroke="#FF7A00"
                strokeWidth="6"
              />
            </g>
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
          <span className="logo-text">Wayner GT</span>
        </a>
        {/* Botón hamburguesa solo en móvil */}
        <button
          className={`navbar-burger${menuOpen ? " open" : ""}`}
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${menuOpen ? " show" : ""}`}>
          <li><a href="#personal">Personal</a></li>
          <li><a href="#profile">Perfil</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;