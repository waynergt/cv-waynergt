import React from 'react';
import './Portafolio.css';

const projects = [
  {
    name: 'Gestor de Inventario',
    desc: 'Aplicación web para control de inventarios y ventas, desarrollada con React y .NET. Permite la gestión de productos, categorías y reportes dinámicos.',
    tech: ['React', '.NET', 'SQL Server'],
    url: '#',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=220&q=80'
  },
  {
    name: 'App de Notas Personales',
    desc: 'Aplicación móvil híbrida para tomar notas, guardar tareas y recordatorios, creada con React Native y almacenamiento seguro.',
    tech: ['React Native', 'Expo', 'SQLite'],
    url: '#',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&h=220&q=80'
  },
  {
    name: 'Portafolio Web',
    desc: 'Sitio web personal responsive para mostrar proyectos, experiencia y habilidades. Animaciones modernas y contacto directo.',
    tech: ['React', 'CSS', 'EmailJS'],
    url: '#',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=220&q=80'
  }
];

const Portafolio = () => (
  <section className="portafolio-section flash-bg">
    <div className="portafolio-card">
      <div className="portafolio-photo">
        <div className="portafolio-icon-glow">
          {/* Icono de portafolio/carpeta con rayo */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#FFD600"/>
            <rect x="16" y="32" width="48" height="30" rx="7" fill="#22304f"/>
            <rect x="24" y="40" width="32" height="6" rx="2" fill="#1ce1d7"/>
            <polygon points="40,64 44,56 36,56" fill="#FFC107" stroke="#FFD600" strokeWidth="1.3"/>
            {/* Rayo flash encima */}
            <polygon points="40,27 38.5,33 42,33 39,41 48,32.2 43,32.2 44.5,27" fill="#FFD600" />
          </svg>
        </div>
      </div>
      <div className="portafolio-main">
        <span className="portafolio-pill">
          <svg width="24" height="24" style={{marginRight: 8, verticalAlign:"middle"}} fill="none" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="12" ry="12" fill="#FFD600"/>
            <path d="M7 17V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8" stroke="#22304f" strokeWidth="2" strokeLinejoin="round"/>
            <rect x="9" y="13" width="6" height="4" rx="1.8" fill="#1ce1d7" />
          </svg>
          Portafolio
        </span>
        <h2 className="portafolio-title">Mis Proyectos</h2>
        <div className="portafolio-list">
          {projects.map(p => (
            <a className="portafolio-project" href={p.url} key={p.name} target="_blank" rel="noopener noreferrer">
              <div className="project-img" style={{backgroundImage: `url(${p.img})`}} />
              <div className="project-info">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Portafolio;