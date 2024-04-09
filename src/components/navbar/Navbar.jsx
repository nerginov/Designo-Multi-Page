import React from "react";
import styles from "./Navbar.module.scss";
import burgerMenu from "../../assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "../../assets/shared/mobile/icon-close.svg";
import MobileMenuModal from "./MobileMenuModal";
import logo from "../../assets/shared/desktop/logo-dark.png";
import useWindowResize from "../../hooks/useWindowResize";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const windowWidth = useWindowResize();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/home");
  const menuModalToggle = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
  };

  return (
    <nav className={styles["navigation-bar"]}>
      <div className={styles["navigation-bar__logo"]}>
        <img src={logo} alt="logo" onClick={() => handleLogoClick()} />
      </div>
      <div className={styles["navigation-bar__menu"]}>
        {windowWidth < 768 ? (
          <button
            className={styles["navigation-bar__menu-toggle-btn"]}
            onClick={() => {
              menuModalToggle();
            }}
          >
            {isMenuModalOpen ? (
              <img src={closeMenu} alt="close-menu" />
            ) : (
              <img src={burgerMenu} alt="burger-menu" />
            )}
          </button>
        ) : (
          <ul>
            <li>
              <Link to="/company" aria-label="Visit our company page">
                OUR COMPANY
              </Link>
            </li>
            <li>
              <Link to="/location" aria-label="Visit location page">
                LOCATION
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Visit location page">
                CONTACT
              </Link>
            </li>
          </ul>
        )}
      </div>
      {isMenuModalOpen && windowWidth < 768 && (
        <MobileMenuModal></MobileMenuModal>
      )}
    </nav>
  );
};

export default Navbar;
