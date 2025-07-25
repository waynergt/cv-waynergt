import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education-section flash-bg">
    <div className="education-card">
      <div className="education-photo">
        <div className="education-icon-glow">
          {/* Icono de diploma con colores Flash */}
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            <circle cx="44" cy="44" r="44" fill="#FFD600"/>
            <rect x="20" y="32" width="48" height="24" rx="4" fill="#22304f"/>
            <rect x="28" y="40" width="32" height="8" rx="2" fill="#1ce1d7"/>
            <polygon points="44,64 48,58 40,58" fill="#FFC107" stroke="#FFD600" strokeWidth="1.5"/>
            <circle cx="44" cy="56" r="3" fill="#FFD600" stroke="#FFC107" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      <div className="education-main">
        <span className="education-pill">
          <svg width="24" height="24" style={{marginRight: 8, verticalAlign:"middle"}} fill="none" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="12" ry="12" fill="#1ce1d7"/>
            <path d="M7 14.5V10l5-3 5 3v4.5" stroke="#FFD600" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M7 14.5l5 3 5-3" stroke="#FFD600" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          Educación
        </span>
        <h2 className="education-title">Formación Académica</h2>
        <ul className="education-list">
          <li>
            <span className="edu-degree">Ingeniería en Sistemas</span>
            <span className="edu-school">Universidad Mariano Gálvez de Guatemala</span>
            <span className="edu-year">2025 - Actualidad</span>
          </li>
          <li>
            <span className="edu-degree">Bachillerato en Ciencias y Letras con orientación en Computación</span>
            <span className="edu-school">COLEGIO CTS</span>
            <span className="edu-year">2012 - 2013</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;