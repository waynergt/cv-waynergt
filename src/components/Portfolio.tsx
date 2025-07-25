import React from 'react';

const Portfolio: React.FC = () => (
  <div className="card mb-4">
    <div className="card-body">
      <h3>Portafolio</h3>
      <ul>
        <li>
          <strong>Mi página web personal</strong> – <a href="https://tuweb.com" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </li>
        <li>
          <strong>App de tareas</strong> – <a href="https://github.com/waynergt/todo-app" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Portfolio;