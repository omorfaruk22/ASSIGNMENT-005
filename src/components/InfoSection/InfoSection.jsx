import React from 'react';

function InfoSection({ id, title, text }) {
  return (
    <section className="info-section" id={id}>
      <div className="container info-card">
        <p className="eyebrow">DEV STACK BUILDER</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default InfoSection;
