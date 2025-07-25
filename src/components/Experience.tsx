import React from 'react';
import './Experience.css';

const Experience = () => (
  <section className="experience-section flash-bg">
    <div className="experience-card">
      <div className="experience-photo">
        <div className="experience-icon-glow">
          {/* Icono de maletín/portafolio con rayos Flash */}
          <svg width="82" height="82" viewBox="0 0 82 82" fill="none">
            <circle cx="41" cy="41" r="41" fill="#FFD600"/>
            <rect x="21" y="34" width="40" height="24" rx="5" fill="#22304f"/>
            <rect x="34" y="32" width="14" height="8" rx="2" fill="#1ce1d7"/>
            <rect x="32" y="42" width="18" height="6" rx="1.8" fill="#FFD600"/>
            <polyline points="32,42 32,38 50,38 50,42" fill="none" stroke="#00c6ff" strokeWidth="2"/>
            <polygon points="41,59 45,53 37,53" fill="#FFC107" stroke="#FFD600" strokeWidth="1.3"/>
          </svg>
        </div>
      </div>
      <div className="experience-main">
        <span className="experience-pill">
          <svg width="24" height="24" style={{marginRight: 8, verticalAlign:"middle"}} fill="none" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="12" ry="12" fill="#FFD600"/>
            <path d="M7 18V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9" stroke="#22304f" strokeWidth="2" strokeLinejoin="round"/>
            <rect x="9" y="14" width="6" height="5" rx="1.8" fill="#1ce1d7" />
          </svg>
          Experiencia
        </span>
        <h2 className="experience-title">Experiencia Laboral</h2>
        <ul className="experience-list">
          <li>
            <span className="exp-role">Desarrollador Web Junior</span>
            <span className="exp-company">Proyecto Universitario UMG</span>
            <span className="exp-time">2025 - Actualidad</span>
            <span className="exp-desc">
              Desarrollo de aplicaciones web con React, .NET y SQL Server. Participación en equipos ágiles, implementación de interfaces modernas y soporte a usuarios finales.
            </span>
          </li>
          <li>
            <span className="exp-role">Asistente Informático</span>
            <span className="exp-company">MUNICPALIDAD</span>
            <span className="exp-time">2024 - 2025</span>
            <span className="exp-desc">
              Mantenimiento y reparación de equipos, asesoría en software básico y creación de sistemas sencillos para la gestión de inventario.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;