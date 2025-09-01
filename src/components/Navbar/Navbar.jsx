import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeContext } from "../../ThemeContext";

// ✅ import react-scroll
import { Link } from "react-scroll";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {/* Theme Toggle Button */}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {/* Animated Menu Button (mobile) */}
        <img
          className={`${styles.menuBtn} ${menuOpen ? styles.rotate : ""}`}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Navbar Items */}
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-60}
              spy={true}
              activeClass={styles.activeLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-60}
              spy={true}
              activeClass={styles.activeLink}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              offset={-60}
              spy={true}
              activeClass={styles.activeLink}
            >
              My Tech
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-60}
              spy={true}
              activeClass={styles.activeLink}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-60}
              spy={true}
              activeClass={styles.activeLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
