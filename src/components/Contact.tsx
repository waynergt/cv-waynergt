import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section flash-bg">
    <div className="contact-card">
      <div className="contact-photo">
        <div className="contact-icon-glow">
          {/* Icono de carta/mail con rayo Flash */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#FFD600"/>
            <rect x="20" y="30" width="40" height="26" rx="6" fill="#22304f"/>
            <polyline points="20,32 40,50 60,32" fill="none" stroke="#1ce1d7" strokeWidth="2.5"/>
            <polygon points="40,40 42,36 38,36" fill="#FFD600" opacity="0.95"/>
            <polygon points="40,24 38,35 42,35 39,44 49,32.2 44,32.2 46,24" fill="#FFD600" opacity="0.87" />
          </svg>
        </div>
      </div>
      <div className="contact-main">
        <span className="contact-pill">
          <svg width="24" height="24" style={{marginRight: 8, verticalAlign:"middle"}} fill="none" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="12" ry="12" fill="#FFD600"/>
            <path d="M5 7l7 6 7-6" stroke="#22304f" strokeWidth="2" />
            <rect x="5" y="7" width="14" height="10" rx="2" fill="#1ce1d7" opacity="0.5"/>
          </svg>
          Contacto
        </span>
        <h2 className="contact-title">¡Contáctame!</h2>
        <p className="contact-desc">
          ¿Quieres trabajar conmigo, tienes alguna pregunta o propuesta?<br />
          Puedes escribirme al correo, WhatsApp o por redes sociales.
        </p>
        <div className="contact-list">
          <a
            href="mailto:waynerlopezgt@gmail.com"
            className="contact-link contact-email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="26" height="26" fill="#1ce1d7" viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-9 6-9-6h18zm0 12H3V8l9 6 9-6v10z"/></svg>
            waynerlopezgt@gmail.com
          </a>
          <a
            href="https://wa.me/50244949966"
            className="contact-link contact-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path fill="#fff" d="M22.7 9.3A8.17 8.17 0 0 0 9.3 22.7l-1 3.7 3.7-1A8.17 8.17 0 1 0 22.7 9.3zm-6.7 12.2a6.48 6.48 0 0 1-3.3-.9l-.2-.1-2 .5.5-2-.1-.2A6.54 6.54 0 1 1 16 21.5zm3.6-4.9c-.1-.1-.9-.4-1-.5s-.2 0-.4.1-.5.6-.6.7-.2.1-.4 0a5.17 5.17 0 0 1-1.3-.8 5 5 0 0 1-1-1.1c-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4s0-.3-.1-.4c0-.1-.4-1-.6-1.5s-.3-.3-.4-.3h-.3c-.2 0-.4 0-.6.2-.2.2-.8.8-.8 1.8s.8 2.1.9 2.3a7.32 7.32 0 0 0 2.7 1.7c.3.1.6.1.8.1.3-.1.8-.3 1-.7s.4-.6.6-.7c.2-.1.3-.1.4-.1.1 0 .3-.1.4.1s.6.5.7.7.1.3 0 .4a3.12 3.12 0 0 1-.6.6z"/></svg>
            WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/wayner-alberto-lopez-y-lopez-099632353/"
            className="contact-link contact-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#0A66C2"/><path d="M11 24h-3V14h3zm-1.5-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm14.5 11h-3v-4.5c0-1.2-.5-2-1.5-2-1 0-1.5.8-1.5 2V24h-3V14h3v1.3c.4-.7 1.3-1.3 2.5-1.3 2 0 3 1.3 3 4V24z" fill="#fff"/></svg>
            LinkedIn
          </a>
          <a
            href="https://facebook.com/albertolopezgt"
            className="contact-link contact-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#1877F3"/><path d="M19 24v-7h2.3l.3-3h-2.6v-1.6c0-.7.2-1 1-1h1.6V8.6A19 19 0 0 0 18.7 8c-1.9 0-3.1 1.1-3.1 3.2V14h-2v3h2v7h4z" fill="#fff"/></svg>
            Facebook
          </a>
          <a
            href="https://github.com/waynergt"
            className="contact-link contact-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#23272F"/><path d="M16 6a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-3 .7-3.7-1.5-3.7-1.5-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.8.1-.6.4-1 .7-1.3-2.4-.3-5-1.2-5-5.2 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.2 2.7 1a9.8 9.8 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 4-2.6 4.9-5 5.2.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 16 6z" fill="#fff"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;