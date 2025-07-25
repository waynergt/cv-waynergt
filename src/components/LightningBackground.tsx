import React from 'react';

const LightningBackground: React.FC = () => (
  <div className="lightning-bg">
    {/* SVG Lightning bolt (icono de flash) */}
    <svg className="flash-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
      <g filter="url(#glow)">
        <path
          d="M52 10 L98 50 L70 50 L100 110 L48 70 L78 70 L52 10 Z"
          fill="yellow"
          stroke="orange"
          strokeWidth="6"
        />
      </g>
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
    {/* Rayos animados */}
    <div className="lightning-animated"></div>
  </div>
);

export default LightningBackground;