import React from "react";
import styles from "./Approach.module.scss";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";

const Approach = () => {
  return (
    <section className={styles.approach}>
      <div className={styles["approach__item"]}>
        <div className={styles["approach__img-container"]}>
          <img src={passionate} alt="Illustration of a passionate person" />
        </div>
        <div className={styles["approach__text-container"]}>
          <h3>PASSIONATE</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className={styles["approach__item"]}>
        <div className={styles["approach__img-container"]}>
          <img
            src={resourceful}
            alt="Illustration of a person being resourceful"
          />{" "}
        </div>
        <div className={styles["approach__text-container"]}>
          <h3>RESOURCEFUL</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className={styles["approach__item"]}>
        <div className={styles["approach__img-container"]}>
          <img src={friendly} alt="Illustration of a friendly person" />{" "}
        </div>
        <div className={styles["approach__text-container"]}>
          <h3>FRIENDLY</h3>
          <p>
            {" "}
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
