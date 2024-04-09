import React from "react";
import styles from "./MobileMenuModal.module.scss";
import { Link } from "react-router-dom";

const MobileMenuModal = () => {
  return (
    <div className={styles["mobile-menu-modal"]}>
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
    </div>
  );
};

export default MobileMenuModal;
