
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="nav-logo" onClick={closeMenu}>
        HS<span>.</span>
      </a>

      {/* Hamburger Button */}
      <button
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>

        <div className="nav-links">
          <a href="#home" className="active" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        {/* Availability Status */}
        <div className="availability">
          <span className="status-dot"></span>
          Available for Internship
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
