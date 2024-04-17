import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/shared/desktop/logo-light.png";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";
import { Link } from "react-router-dom";
import ContactCTA from "../contactCTA/ContactCTA";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <nav className={styles["footer-content__nav"]}>
          <div className={styles["footer-content__logo-container"]}>
            <img
              src={logo}
              alt="Logo"
              className={styles["footer-content__logo"]}
            />
          </div>
          <ul className={styles["footer-content__menu"]}>
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
              <Link to="/contact" aria-label="Visit contact page">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["footer-content__additional-info"]}>
          <div className={styles["footer-content__addresses"]}>
            <address className={styles["footer-content__address"]}>
              <span>Designo Central Office</span>
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </address>
            <address className={styles["footer-content__address"]}>
              <span>Contact Us (Central Office)</span>
              <br />
              P : +1253-863-8967
              <br />M : contact@designo.co
            </address>
          </div>
          <div className={styles["footer-content__social-links"]}>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={pinterest} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <ContactCTA></ContactCTA>
    </footer>
  );
};

export default Footer;
