import React from "react";
import ImgAbout from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2" data-aos-delay="100">
            <img
              src={ImgAbout}
              className="img-fluid rounded-4 shadow-sm"
              alt="about etando"
            />
          </div>

          <div
            className="col-lg-6 order-2 order-lg-1 content"
            data-aos-delay="200"
          >
            <h3>Support Logistique</h3>
            <p className="fst-italic">
              Nos services de support logistique sont conçus pour garantir que
              votre transition vers la vie au Maroc soit aussi fluide et sans
              stress que possible. Nous comprenons que déménager dans un nouveau
              pays implique de nombreux défis logistiques, et nous sommes là
              pour vous assister à chaque étape.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle fw-bold"></i>
                <span>
                  <strong>Logement</strong> : Nous vous aidons à trouver un
                  logement sûr et confortable, proche de votre établissement
                  d'enseignement.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  <strong>Démarches Administratives</strong> : Pour séjourner au
                  Maroc au-delà de votre visa étudiant, un permis de résidence
                  est nécessaire. Nous vous aidons à préparer les documents
                  requis et à suivre votre demande auprès des autorités locales.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  <strong>Transports</strong> : Nous vous fournissons des
                  informations sur les moyens de transport pour vous déplacer
                  facilement dans votre nouvelle ville.
                </span>
              </li>
            </ul>
            <a href="#" className="read-more shadow-sm rounded-3">
              <span>Lire Plus</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
