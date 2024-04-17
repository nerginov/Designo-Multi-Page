import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
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
