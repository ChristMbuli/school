import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Counter from "../components/Counter.jsx";
import Ours from "../components/Ours.jsx";
import Partener from "../components/Partener.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
        <About />
        <Ours />
        <Partener />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
