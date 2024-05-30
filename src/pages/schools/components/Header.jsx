import React from "react";

const Header = () => {
  const isHomePage = window.location.pathname === "/";

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img
            src="https://res.cloudinary.com/do2qwucmp/image/upload/v1714004658/klop0gdikqtdbziqrdtc.png"
            alt=""
          />
          {/* <h1 className="sitename">ETANDO</h1> */}
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className={isHomePage ? "active" : ""}>
                Accueil
                <br />
              </a>
            </li>
            <li>
              <a href="/">A propos</a>
            </li>
            <li>
              <a href="/">Orientations</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Evenement</a>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          {/* Button petit ecrant pour afficher les liens */}
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted shadow-sm rounded" href="#">
          Touvez un logement
        </a>
      </div>
    </header>
  );
};

export default Header;
