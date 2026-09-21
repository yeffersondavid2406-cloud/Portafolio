import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <nav>

        {/* Logo */}
        <a
          href="#inicio"
          className="logo"
          onClick={closeMenu}
        >
          YD
        </a>

        {/* Botón menú móvil */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          <li>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#sobre-mi" onClick={closeMenu}>
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#habilidades" onClick={closeMenu}>
              Habilidades
            </a>
          </li>

          <li>
            <a href="#proyectos" onClick={closeMenu}>
              Proyectos
            </a>
          </li>

          <li>
            <a href="#certificados" onClick={closeMenu}>
              Certificados
            </a>
          </li>

          <li>
            <a href="#formacion" onClick={closeMenu}>
              Formación
            </a>
          </li>

          <li>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;