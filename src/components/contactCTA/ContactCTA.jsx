import React from "react";
import styles from "./ContactCTA.module.scss";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const contactCTA = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles["contact-cta"]}>
      <div className={styles["contact-cta__text-container"]}>
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button className="light" onClick={handleButtonClick}>
        GET IN TOUCH
      </Button>
    </div>
  );
};

export default contactCTA;
