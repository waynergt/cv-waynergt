import React from 'react';
import './Profile.css';

const Profile = () => (
  <section className="profile-section">
    <div className="profile-card">
      <div className="profile-icon">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
          <circle cx="31" cy="31" r="30" fill="#FFD600" stroke="#FFC107" strokeWidth="2"/>
          <path d="M25 38v-4a6 6 0 0 1 12 0v4" stroke="#22304f" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="31" cy="28" r="6" stroke="#22304f" strokeWidth="3"/>
        </svg>
      </div>
      <h2 className="profile-title">
        Perfil Profesional
      </h2>
      <p className="profile-desc">
        Actualmente curso el octavo ciclo de Ingeniería en Sistemas, con experiencia en el desarrollo de aplicaciones web y móviles.<br />
        Me apasiona la tecnología, el aprendizaje constante y la búsqueda de soluciones innovadoras. Destaco por mi capacidad de trabajo en equipo, creatividad y adaptabilidad ante los desafíos.
      </p>
    </div>
  </section>
);

export default Profile;