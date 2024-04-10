import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, className }) => {
  return (
    <button
      className={`${styles["main-button"]} ${
        className === "light"
          ? styles["main-button--light"]
          : styles["main-button--dark"]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
