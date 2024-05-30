import React from "react";

const Partener = () => {
  return (
    <section id="features" className="features section">
      <div class="container section-title">
        <h2>Partenaires</h2>
        <p class="">Nos Partenaires</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-4 " data-aos-delay="100">
            <div className="features-item shadow-sm rounded-3">
              {/* <i className="bi bi-eye" style={{ color: "#ffbb2c" }}></i> */}
              <img
                src="https://docs.imperium.plus/files/media-GRGQG-GFRXSGFP-QWSPX-GPSSWQ-GFRXSPQMPX-MGXRQ-GFRXSPSWMSWQ-X-LLWSLXRWWG"
                alt=""
                width={50}
              />
              <h3>
                <a href="" className="stretched-link">
                  Ministere de l'éducation nationale
                </a>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos-delay="200">
            <div className="features-item shadow-sm rounded-3">
              {/* <i className="bi bi-infinity" style={{ color: "#5578ff" }}></i> */}
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_lXsRuYi95VD-cA2Y52CPvmz6v03GVkhfCayO8pkpwYa04=s900-c-k-c0x00ffffff-no-rj"
                alt="logo smartafrica"
                width={50}
              />
              <h3>
                <a href="" className="stretched-link">
                  Smart Africa
                </a>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos-delay="300">
            <div className="features-item shadow-sm rounded-3">
              {/* <i className="bi bi-mortarboard" style={{ color: "#e80368" }}></i> */}
              <img
                src="data:image/png;base64,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"
                alt=""
                width={50}
              />
              <h3>
                <a href="" className="stretched-link">
                  Ecole supérieure IT & Management
                </a>
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4" data-aos-delay="400">
            <div className="features-item shadow-sm rounded-3">
              {/* <i className="bi bi-nut" style={{ color: "#e361ff" }}></i> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvDjS7q07FL7lFdcFjtWeRdUhWRDmPOpMQg&s"
                alt=""
                width={50}
              />
              <h3>
                <a href="" className="stretched-link">
                  ynov campus
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partener;
