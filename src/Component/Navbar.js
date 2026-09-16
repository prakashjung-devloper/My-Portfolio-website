"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav
        className={`navbar navbar-expand-lg px-3 ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">

          {/* Logo */}
          <a
            className="navbar-brand fw-bold"
            href="#"
            onClick={closeMenu}
          >
            Prakash.<span>dev</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
            id="mainNavbar"
          >
            <div className="navbar-nav ms-auto align-items-lg-center gap-3">

              <a
                className="nav-link"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>

              <a
                className="nav-link"
                href="#skill"
                onClick={closeMenu}
              >
                Skills
              </a>

              <a
                className="nav-link"
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>

              <a
                className="nav-link"
                href="#certificates"
                onClick={closeMenu}
              >
                Certificates
              </a>

              <a
                className="nav-link"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="btn btn-primary rounded-pill px-4 hire-btn"
                onClick={closeMenu}
              >
                Hire Me <ArrowRight size={17} />
              </a>

            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}