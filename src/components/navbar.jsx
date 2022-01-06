import React, { Component } from "react";
import logo from "../images/new-logo.svg";
import "./styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="sticky-top">
        <nav
          className="navbar"
          style={{ backgroundColor: "#262626", padding: 0 }}
        >
          <div className="container-fluid" style={{ padding: 0 }}>
            <div>
              <button className="top-button" href="#">
                Home
              </button>
              <button className="top-button" href="#">
                Verify Certificate
              </button>
              <button className="top-button" href="#">
                Share Vaccination Status
              </button>
            </div>
          </div>
        </nav>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#0b0f22" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                className="my-2"
                src={logo}
                alt="Cowin: Winning over Covid-19"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav nav-text">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    VACCINATION SERVICES
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    PLATFORMS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    RESOURCES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    SUPPORT
                  </a>
                </li>
                <li className="nav-item">
                  <button className="register-button">
                    Register / Sign In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
