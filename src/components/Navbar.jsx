import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navdiv">
          <label className="logo">TedlaCode</label>
          <span className="menu-icon" onClick={toggleMenu}>
            ☰
          </span>
          <ul className={menuOpen ? "show" : ""}>
            <span className="close-icon" onClick={toggleMenu}>
              ×
            </span>
            <li onClick={() => scrollToSection("section1")}>Home</li>
            <li onClick={() => scrollToSection("section2")}>About</li>
            <li onClick={() => scrollToSection("section3")}>Projects</li>
            <li onClick={() => scrollToSection("section3")}>Skills</li>
            <li>
              <a
                href="https://docs.google.com/document/d/1G-3X4e3qOFdn5NcgzgEyteyULNG6b6aA1m6pS1focvE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
