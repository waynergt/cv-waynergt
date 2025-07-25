import React from 'react';
import './PersonalInfo.css';
import profilePic from '../assets/profile.jpg';

const PersonalInfo = () => (
  <section className="personal-info-section">
    <div className="info-card info-card-large info-card-centered">
      <div className="info-photo info-photo-centered">
        <div className="info-photo-glow">
          <img src={profilePic} alt="Foto de perfil" />
        </div>
      </div>
      <div className="info-main info-main-centered">
        <span className="welcome-pill flash-welcome">
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28" style={{marginRight: 8, verticalAlign:"middle"}}>
            <circle cx="14" cy="14" r="14" fill="#FFD600"/>
            <g>
              <polygon points="14,6 12.2,13 15,13 13.2,20 19,12.5 15.8,12.5 17.8,6" fill="#FFC107" />
              <polygon points="15.3,7.5 13.7,13.5 16.2,13.5 14.7,19 18.3,13.15 15.8,13.15 17.1,7.5" fill="#FFA000"/>
            </g>
          </svg>
          ¡Bienvenido(a)!
        </span>
        <h1 className="info-title large">Wayner Alberto<br />López López</h1>
        <h2 className="info-role">
          <svg width="28" height="28" fill="#1ce1d7" style={{ verticalAlign: 'middle', marginRight: 10 }} viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm10 7.25l-10 5-10-5V17l10 5 10-5V9.25z"/></svg>
          Desarrollador Junior
        </h2>
        <p className="info-desc">
          Estudiante de Ingeniería en Sistemas con experiencia en desarrollo web y gestión empresarial.<br />
          Especializado en <span className="tech csharp">C#</span>, <span className="tech dotnet">.NET</span> y <span className="tech js">JavaScript</span>.
        </p>
        <div className="info-contact">
          <span>
            <svg width="24" height="24" fill="#00c6ff" viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-9 6-9-6h18zm0 12H3V8l9 6 9-6v10z"/></svg>
            waynerlopezgt@gmail.com
          </span>
          <span>
            <svg width="24" height="24" fill="#1ce1d7" viewBox="0 0 24 24"><path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5z"/></svg>
            Taxisco, Santa Rosa, Guatemala
          </span>
        </div>
        <div className="info-social">
          <a href="https://linkedin.com/in/marvin708" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="36" height="36" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#0A66C2"/><path d="M15.625 19.375h5V35H15.625V19.375zM18.125 15.625a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM21.25 24.375H25v2.188c.625-1.25 2.187-2.5 4.063-2.5 3.437 0 4.062 2.188 4.062 5V35h-5v-7.5c0-1.25 0-2.5-1.25-2.5s-1.25 1.25-1.25 2.5V35h-5V24.375z" fill="#fff"/></svg>
          </a>
          <a href="https://facebook.com/albertolopezgt" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="36" height="36" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#1877F3"/><path d="M28.5 35V25h3.125l.469-3.625H28.5v-2.438c0-1.063.188-1.562 1.219-1.562h2.031V14.25A25.9 25.9 0 0 0 28.75 14c-2.563 0-4.25 1.562-4.25 4.438V21.5h-2.75V25h2.75v10h4z" fill="#fff"/></svg>
          </a>
          <a href="https://github.com/waynergt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="36" height="36" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#23272F"/><path d="M25 13.125a11.875 11.875 0 0 0-3.75 23.125c.594.125.813-.25.813-.563v-2.219c-3.313.719-4.031-1.406-4.031-1.406-.531-1.344-1.313-1.719-1.313-1.719-1.063-.719.094-.719.094-.719 1.188.094 1.813 1.219 1.813 1.219 1.062 1.813 2.781 1.281 3.469.969.094-.781.438-1.281.781-1.594-2.656-.313-5.469-1.344-5.469-5.969 0-1.313.469-2.406 1.219-3.281-.125-.312-.531-1.594.125-3.312 0 0 1-.313 3.281 1.219A11.56 11.56 0 0 1 25 19.406a11.45 11.45 0 0 1 2.969.406c2.281-1.531 3.281-1.219 3.281-1.219.656 1.719.25 3 .125 3.312.75.875 1.219 1.968 1.219 3.281 0 4.625-2.813 5.656-5.469 5.969.438.375.844 1.125.844 2.281v3.375c0 .313.219.688.813.563A11.875 11.875 0 0 0 25 13.125z" fill="#fff"/></svg>
          </a>
          <a href="https://wa.me/50244949966" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="36" height="36" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#25D366"/><path d="M25 16.25a8.75 8.75 0 1 1 0 17.5 8.687 8.687 0 0 1-4.5-1.25l-3.5 1 .938-3.438A8.75 8.75 0 0 1 25 16.25zm0-3.125a11.875 11.875 0 0 0-10.281 17.969L13 40.188l8.125-2.281A11.875 11.875 0 1 0 25 13.125zm4.594 12.5c-.156-.094-.906-.438-1.063-.5-.156-.062-.281-.094-.406.094-.125.156-.469.5-.563.594-.094.094-.188.125-.344.031a6.187 6.187 0 0 1-1.406-.938 6.012 6.012 0 0 1-1.031-1.344c-.094-.156-.031-.25.062-.344.094-.094.188-.219.281-.344.093-.156.062-.281 0-.375-.062-.094-.531-1.313-.719-1.781-.188-.469-.375-.406-.531-.406-.125 0-.25 0-.406.031-.156.031-.406.125-.625.344-.219.219-.844.813-.844 2.031 0 1.219.844 2.406.969 2.594.125.188 1.656 2.594 4.031 3.344.469.125.844.188 1.125.094.344-.125 1.063-.438 1.219-.875.156-.438.156-.813.125-.875-.031-.062-.125-.094-.25-.156z" fill="#fff"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PersonalInfo;