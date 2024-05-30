import React from "react";

const Ours = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 " data-aos-delay="100">
            <div className="why-box rounded-3">
              <h3>Pourquoi Nous Choisir ?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn shadow-sm rounded-3 shadow-sm">
                  <span>Lire Plus</span> <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4" data-aos-delay="200">
              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center rounded-3 shadow-sm">
                  <i className="bi bi-clipboard-data"></i>
                  <h4>Expertise</h4>
                  <p>
                    Notre équipe est composée de professionnels expérimentés
                    dans l'accompagnement des étudiants internationaux.
                  </p>
                </div>
              </div>

              <div className="col-xl-4" data-aos-delay="300">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center rounded-3 shadow-sm">
                  <i className="bi bi-gem"></i>
                  <h4>Soutien Personnalisé</h4>
                  <p>
                    Chaque étudiant est unique. Nous offrons un service
                    personnalisé pour répondre à vos besoins spécifiques.
                  </p>
                </div>
              </div>

              <div className="col-xl-4" data-aos-delay="400">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center rounded-3 shadow-sm">
                  <i className="bi bi-inboxes"></i>
                  <h4>Réactivité</h4>
                  <p>
                    Nous sommes disponibles pour répondre à vos questions et
                    vous aider à résoudre vos problèmes rapidement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ours;
