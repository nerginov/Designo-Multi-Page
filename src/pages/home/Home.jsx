import React from "react";
import styles from "./Home.module.scss";
import Hero from "./Hero";
import Projects from "./Projects";
import Approach from "./Approach";
const Home = () => {
  return (
    <div className={styles.home}>
      <Hero></Hero>
      <Projects></Projects>
      <Approach></Approach>
    </div>
  );
};

export default Home;
