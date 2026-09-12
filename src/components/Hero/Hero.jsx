import React from 'react';
import heroStack from '../../assets/hero-stack.png';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Build Your Ideal<br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="hero-text">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-actions">
            <a href="#technologies" className="primary-btn">Explore Technologies</a>
            <a href="#about" className="secondary-btn">Learn More</a>
          </div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-glow" aria-hidden="true"></div>
          <img src={heroStack} alt="Development technology stack illustration" className="hero-art" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
