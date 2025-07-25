import React from 'react';

const Skills: React.FC = () => (
  <div className="card mb-4">
    <div className="card-body">
      <h3>Habilidades Técnicas</h3>
      <ul className="list-inline">
        <li className="list-inline-item"><span className="badge bg-primary">React</span></li>
        <li className="list-inline-item"><span className="badge bg-success">TypeScript</span></li>
        <li className="list-inline-item"><span className="badge bg-warning text-dark">Bootstrap</span></li>
        <li className="list-inline-item"><span className="badge bg-info text-dark">Node.js</span></li>
        <li className="list-inline-item"><span className="badge bg-secondary">Git</span></li>
      </ul>
    </div>
  </div>
);

export default Skills;