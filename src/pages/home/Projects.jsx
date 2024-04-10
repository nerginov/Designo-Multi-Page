import React from "react";
import styles from "./Projects.module.scss";
import Project from "./Project";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Project
        title="WEB DESIGN"
        image="web"
        href="/web-design"
        className={styles["projects__web"]}
        large={true}
      ></Project>
      <Project
        title="APP DESIGN"
        image="app"
        href="/app-design"
        className={styles["projects__app"]}
      ></Project>
      <Project
        title="GRAPHIC DESIGN"
        image="graphic"
        href="/graphic-design"
        className={styles["projects__graphic"]}
      ></Project>
    </section>
  );
};

export default Projects;
