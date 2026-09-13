import React from 'react';
import TechCard from '../TechCard/TechCard';
import StackPanel from '../StackPanel/StackPanel';

function Technologies({ technologies, loading, stack, onAdd, onRemove, onRemoveAll }) {
  const selectedIds = stack.map((item) => item.id);

  return (
    <section className="technology-section" id="technologies">
      <div className="container">
        <div className="section-heading">
          <h2>Explore the <span className="gradient-text">Technologies</span></h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        {loading ? (
          <div className="loading-state" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true"></span>
            <span>Loading technologies...</span>
          </div>
        ) : technologies.length === 0 ? (
          <div className="loading-state" role="status">No technologies found.</div>
        ) : (
          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  selected={selectedIds.includes(tech.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
            <StackPanel stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Technologies;