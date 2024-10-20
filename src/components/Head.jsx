import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dropdown from "bootstrap/js/dist/dropdown";
import { NavLink } from "react-router-dom"; // Import NavLink

const Header = () => {
  useEffect(() => {
    // Manually initialize all dropdowns
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach((dropdownElement) => {
      new Dropdown(dropdownElement);
    });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar sub-navbar navbar-expand-lg navbar-light">
          <NavLink
            title="Expert App Devs"
            className="navbar-brand"
            to="/"
          >
            <img
              src="https://www.expertappdevs.com/front/images/expert-app-devs.svg"
              alt="best mobile app development company"
              title="top mobile app development companies"
              width="300"
              height="62"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  title="Solutions"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/solutions"
                >
                  Solutions
                </NavLink>
              </li>

              <li className="nav-item dropdown position-static">
                <NavLink
                  title="Services"
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </NavLink>
                <div className="dropdown-menu w-100 top-auto">
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-lg-4 info">
                        <span className="mega-menu-title">Services</span>
                      </div>
                      <div className="col-lg-8 col-xl-8">
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <NavLink
                                  title="Mobile App Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/mobileappdevelopmentservice"
                                >
                                  <i className="bi bi-phone"></i>
                                  Mobile App Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="Android App Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/androidappdevelopmentservice"
                                >
                                  <i className="bi bi-android2"></i> Android App
                                  Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="Mobile Game Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/mobilegameappdevelopmentservice"
                                >
                                  <i className="bi bi-controller"></i> Mobile
                                  Game Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="AI/ML Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/ai-mldevelopmentservice"
                                >
                                  <i className="bi bi-brain"></i> AI/ML
                                  Development Services
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <NavLink
                                  title="iPhone App Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/iphoneappdevelopmentservice"
                                >
                                  <i className="bi bi-apple"></i> iPhone App
                                  Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="Cross Platform Mobile App Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/crossmobileappdevelopmentservice"
                                >
                                  <i className="bi bi-phone-landscape"></i>{" "}
                                  Cross Platform Mobile App Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="IoT App Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/iotappmobiledevelopmentservice"
                                >
                                  <i className="bi bi-cloud-arrow-up"></i> IoT
                                  App Development Services
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  title="Metaverse Development Services"
                                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                  to="/service/metavarsedevelopmentservice"
                                >
                                  <i className="bi bi-boxes"></i> Metaverse
                                  Development Services
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown position-static">
                <NavLink
                  title="Technology"
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Technology
                </NavLink>
                <div className="dropdown-menu w-100 top-auto">
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="all-technology d-flex flex-wrap">
                        <div className="icon">
                          <NavLink
                            title="iOS App Development"
                            className="platforms-logo"
                            to="/technology/ios-app-development"
                          >
                            <i className="bi bi-apple"></i>
                            <span>iOS</span>
                          </NavLink>
                        </div>
                        {/* Other icons can be added similarly */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  title="Portfolio"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  title="Blog"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  title="About"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item btn">
                <NavLink
                  title="Contact Us"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
