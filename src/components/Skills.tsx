import React from 'react';
import './Skills.css';

const skills = [
  {
    name: 'C#',
    color: '#00c6ff',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#00c6ff" />
        <text x="19" y="24" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#fff">C#</text>
      </svg>
    ),
  },
  {
    name: '.NET',
    color: '#FFD600',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#FFD600" />
        <text x="19" y="24" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#22304f">.NET</text>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#1ce1d7',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#1ce1d7" />
        <text x="19" y="24" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#22304f">JS</text>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#00d8ff',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#20232a" />
        <g>
          <ellipse cx="19" cy="19" rx="11" ry="4.5" stroke="#00d8ff" strokeWidth="2"/>
          <ellipse cx="19" cy="19" rx="4.5" ry="11" stroke="#00d8ff" strokeWidth="2"/>
          <ellipse cx="19" cy="19" rx="11" ry="4.5" transform="rotate(60 19 19)" stroke="#00d8ff" strokeWidth="2"/>
          <ellipse cx="19" cy="19" rx="11" ry="4.5" transform="rotate(120 19 19)" stroke="#00d8ff" strokeWidth="2"/>
        </g>
        <circle cx="19" cy="19" r="2.3" fill="#00d8ff" />
      </svg>
    ),
  },
  {
    name: 'SQL Server',
    color: '#e8ecfa',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#22304f" />
        <ellipse cx="19" cy="24" rx="9" ry="4" fill="#FFD600" opacity="0.6"/>
        <ellipse cx="19" cy="14" rx="9" ry="4" fill="#00c6ff" />
        <rect x="10" y="14" width="18" height="10" fill="#fff" opacity="0.1"/>
        <rect x="10" y="24" width="18" height="2" fill="#FFD600" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: 'HTML & CSS',
    color: '#ff7f50',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#ff7f50" />
        <text x="19" y="22" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#fff">HTML</text>
        <text x="19" y="30" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#22304f">CSS</text>
      </svg>
    ),
  },
];

const Skills = () => (
  <section className="skills-section flash-bg">
    <div className="skills-card">
      <div className="skills-photo">
        <div className="skills-icon-glow">
          {/* Icono de rayo en forma de engranaje */}
          <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
            <circle cx="42" cy="42" r="42" fill="#FFD600"/>
            <g>
              <polygon points="42,22 38,39 45,39 40,58 60,34 47,34 52,22" fill="#FFC107" />
              <polygon points="44,25 40,39 47,39 42,55 56,37 47,37 50,25" fill="#FFA000"/>
            </g>
            <g>
              <circle cx="42" cy="42" r="23" stroke="#22304f" strokeWidth="4"/>
              <circle cx="42" cy="42" r="10" fill="#1ce1d7"/>
            </g>
          </svg>
        </div>
      </div>
      <div className="skills-main">
        <span className="skills-pill">
          <svg width="24" height="24" style={{marginRight: 8, verticalAlign:"middle"}} fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#FFD600"/>
            <path d="M9 14l1-4h4l1 4" stroke="#22304f" strokeWidth="2"/>
            <path d="M12 9V6M12 18a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" stroke="#22304f" strokeWidth="2"/>
          </svg>
          Habilidades
        </span>
        <h2 className="skills-title">Tecnologías y Herramientas</h2>
        <ul className="skills-list">
          {skills.map(skill => (
            <li key={skill.name} style={{borderColor: skill.color}}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;