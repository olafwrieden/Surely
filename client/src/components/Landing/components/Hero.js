import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="hero" className="hero is-medium">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <h3 className="logo is-size-4">Surely</h3>
              </Link>
            </div>

            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                <Link to="/" className="a-menu is-size-7 navbar-item">
                  Home
                </Link>
                <Link to="/" className="a-menu is-size-7 navbar-item">
                  About
                </Link>
                <Link to="/" className="a-menu is-size-7 navbar-item">
                  Features
                </Link>
                <Link to="/" className="a-menu is-size-7 navbar-item">
                  Contact
                </Link>
              </div>
            </div>
            <span
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 is-size-3-mobile">Revamped insurance</h1>
          <p className="has-text-dark">
            Surely is a super awesome peer-to-peer insurance platform crediting
            you for positive driving habits. Surely its worth a try.
          </p>
          <Link
            className="button cta is-primary is-size-7 a-menu mt-5"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
