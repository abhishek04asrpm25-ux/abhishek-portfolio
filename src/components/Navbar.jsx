import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Journey", path: "/journey" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>ABHISHEK</span>
          <span className="logo-star">✦</span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        <div className="navbar-actions">

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;