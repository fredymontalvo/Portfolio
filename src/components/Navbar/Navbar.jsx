import { useState } from "react";
import styles from "./Navbar.module.css";
import Img from "../../assets/navbar/hamburger-button.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cerrar el menú cuando se hace clic en un enlace
    document.body.style.overflow = "auto"; // Restablecer el desplazamiento del cuerpo
  };

  return (
    <nav className={styles.navbar} id="NavBar">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Portfolio</h2>
      </div>

      <div className={styles.hamburger} onClick={handleToggleMenu}>
        <img src={Img} alt="Menu" className={styles.img} />
      </div>

      <div
        className={`${styles.menuContainer} ${isMenuOpen ? styles.show : ""}`}
      >
        <ul className={styles.navbarList}>
          <li>
            <a href="#hero" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
