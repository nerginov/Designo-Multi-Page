import { useState } from "react";
import styles from "./App.module.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
