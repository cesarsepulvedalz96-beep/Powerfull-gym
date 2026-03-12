import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav
      className="navbar is-black gym-navbar"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-warning has-text-weight-bold gym-logo"
          to="/"
        >
          POWERFULL
        </Link>

        <a
          role="button"
          className={`navbar-burger ${active ? "is-active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className={`navbar-menu ${active ? "is-active" : ""}`}>
        {/* CENTRADO */}
        <div className="navbar-start gym-navbar-center">
          <Link className="navbar-item gym-link" to="/">
            Inicio
          </Link>
          <Link className="navbar-item gym-link" to="/plans">
            Planes
          </Link>
          <Link className="navbar-item gym-link" to="/about">
            Nosotros
          </Link>
          <Link className="navbar-item gym-link" to="/contact">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
