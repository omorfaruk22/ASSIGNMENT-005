import React from 'react';

function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <img className="tech-icon" src={tech.icon} alt={`${tech.name} icon`} loading="lazy" />
        <span className="badge">{tech.badge}</span>
      </div>
      <h3>{tech.name}</h3>
      <p className="tech-description">{tech.description}</p>
      <div className="tech-meta">
        <span className="chip">{tech.category}</span>
        <span className="difficulty">{tech.difficulty}</span>
        <span className="rating">★ {tech.rating}</span>
      </div>
      <button
        className={`stack-btn ${selected ? 'added' : ''}`}
        type="button"
        disabled={selected}
        onClick={() => onAdd(tech)}
      >
        {selected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}

export default TechCard;
