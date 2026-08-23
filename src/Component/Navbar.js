import { useEffect, useState } from "react";
import { ArrowRight, Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav
        className={`navbar navbar-expand-lg px-3 ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            Prakash.<span>dev</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

              <a className="nav-link" href="#about">
                About
              </a>

              <a className="nav-link" href="#skill">
                Skills
              </a>

              <a className="nav-link" href="#projects">
                Projects
              </a>

              <a className="nav-link" href="#certificates">
                Certificates
              </a>

              <a className="nav-link" href="#contact">
                Contact
              </a>

              {/* Theme */}
              <button
                className="theme-toggle btn rounded-circle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Hire Me */}
              <a
                href="#contact"
                className="btn btn-primary rounded-pill px-4 hire-btn"
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