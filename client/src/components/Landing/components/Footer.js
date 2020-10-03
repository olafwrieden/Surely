import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-4 has-text-centered is-hidden-tablet">
            <Link to="/" className="title is-4" href="#">
              P2P Insurance
            </Link>
          </div>
          <div className="column is-4">
            <div className="level">
              <a
                className="level-item"
                href="https://github.com/olafwrieden/p2p"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                className="level-item"
                href="https://www.facebook.com/SWAKL/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Startup Weekend
              </a>
            </div>
          </div>
          <div className="column is-4 has-text-centered is-hidden-mobile">
            <Link className="title is-4" to="/">
              Surely
            </Link>
          </div>
          <div className="column is-4 has-text-right">
            <div className="level">
              <a className="level-item" href="a">
                Support
              </a>
              <a className="level-item" href="/">
                ICO
              </a>
            </div>
          </div>
        </div>
        <p className="subtitle has-text-centered is-6">
          © 2020 Surely. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
