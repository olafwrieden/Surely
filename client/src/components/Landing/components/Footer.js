import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-4 has-text-centered is-hidden-tablet">
            <a className="title is-4" href="#">
              P2P Insurance
            </a>
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
            <a className="title is-4" href="#">
              P2P Insurance
            </a>
          </div>
          <div className="column is-4 has-text-right">
            <div className="level">
              <a className="level-item" href="#">
                Support
              </a>
              <a className="level-item" href="#">
                ICO
              </a>
            </div>
          </div>
        </div>
        <p className="subtitle has-text-centered is-6">
          © 2020 P2P Insurance. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
