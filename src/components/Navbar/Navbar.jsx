import React from 'react';
import Brand from '../Brand/Brand';
import hamburgerIcon from '../../assets/hamburger.png';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        <Brand />
        <div className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          {navLinks.map((label) => (
            <a
              key={label}
              className={label === 'Home' ? 'active' : ''}
              href={`#${label.toLowerCase()}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="auth-actions">
          <a href="#signin" className="signin">Sign In</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;