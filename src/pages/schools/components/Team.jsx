import React from "react";

const Team = () => {
  return (
    <section id="trainers-index" class="section trainers-index">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 d-flex " data-aos-delay="100">
            <div class="member shadow-sm rounded-3">
              <img
                src="assets/img/trainers/trainer-1.jpg "
                class="img-fluid rounded-top"
                alt=""
              />
              <div class="member-content">
                <h4>Christ Mbuli</h4>
                <span>Web Development</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 d-flex " data-aos-delay="200">
            <div class="member shadow-sm rounded-3">
              <img
                src="assets/img/trainers/trainer-3.jpg"
                class="img-fluid rounded-top"
                alt=""
              />
              <div class="member-content">
                <h4>Michel Inapogui Zeze</h4>
                <span>Marketing</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 d-flex " data-aos-delay="300">
            <div class="member shadow-sm rounded-3">
              <img
                src="assets/img/trainers/trainer-2.jpg"
                class="img-fluid rounded-top"
                alt="photo membre"
              />
              <div class="member-content">
                <h4>Daphenée Bouyendi</h4>
                <span>Content</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 d-flex " data-aos-delay="300">
            <div class="member shadow-sm rounded-3">
              <img
                src="assets/img/trainers/trainer-3.jpg"
                class="img-fluid rounded-top"
                alt="photo membre"
              />
              <div class="member-content">
                <h4>Daphenée Bouyendi</h4>
                <span>Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
