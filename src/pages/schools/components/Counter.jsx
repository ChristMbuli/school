import React from "react";

const Counter = () => {
  return (
    <section id="counts" className="section counts">
      <div className="container" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p className="">Students</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="64"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p className="">Courses</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="42"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p className="">Events</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="24"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p className="">Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
