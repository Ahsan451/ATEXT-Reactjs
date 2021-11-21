import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

Navbar.propTypes = {
  title: propTypes.string,
};

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.modeC} bg-${props.modeC}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            
            {/* we use (text-light) in bootstrap to change text color to white */}

            <div
              className={`form-check form-switch text-${
                props.modeC === "light" ? "dark" : "light"
              }`}
            >
              {" "}
              {/* here I used ternary operator in javascript to toggle the color of label text */}
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                class="form-check-label me-4" // (me) margin right and (ms) for margin left
                htmlFor="flexSwitchCheckDefault"
              >
                dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "please set title",
};
