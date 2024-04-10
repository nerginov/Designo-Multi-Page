import React from "react";
import styles from "./Hero.module.scss";
import heroImg from "../../assets/home/desktop/image-hero-phone.png";
import Button from "../../components/buttons/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__content-container"]}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button className="light">LEARN MORE</Button>
      </div>
      <div className={styles["hero__image-container"]}>
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
