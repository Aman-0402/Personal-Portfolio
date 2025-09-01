import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { ThemeContext } from "../../ThemeContext";

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
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#technologies">My Tech</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
