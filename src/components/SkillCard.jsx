// src/components/SkillCard.jsx
import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ title, overview, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <h4>{overview}</h4>
      <p>{skills}</p>
    </div>
  );
};

export default SkillCard;
