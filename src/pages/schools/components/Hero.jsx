import React from "react";
import Img from "../assets/img/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <img
        src="https://www.the74million.org/wp-content/uploads/2023/05/black-community-college-enrollment.jpg"
        alt=""
      />

      <div className="container">
        <h2 data-aos-delay="100">
          Apprendre aujourd'hui,
          <br />
          diriger demain
        </h2>
        <p data-aos="" data-aos-delay="200">
          Nous sommes là pour vous aider à chaque étape du processus.
        </p>
        <div className="d-flex mt-4 shadow" data-aos-delay="300">
          <a href="/" className="btn-get-started rounded shadow">
            Commencer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
