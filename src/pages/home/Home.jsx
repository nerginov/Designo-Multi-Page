import React from "react";
import styles from "./Home.module.scss";
import Hero from "./Hero";
import Projects from "./Projects";
const Home = () => {
  return (
    <div className={styles.home}>
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
};

export default Home;
