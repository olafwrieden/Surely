import React from "react";

const HowItWorks = () => {
  return (
    <section id="features" className="section has-mustard-bg">
      <div className="container">
        <div className="columns reverse-row-order">
          <div className="column has-text-dark">
            <h3 className="is-size-3">Rewarding</h3>
            <p className="has-text-dark paragraph">
              Live journey reporting saves you money.
            </p>
          </div>
          <div className="column">
            <img
              className="feature-img"
              src="images/rewarding.png"
              alt="feature"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <img
              className="feature-img"
              src="images/lifering.png"
              alt="feature"
            />
          </div>
          <div className="column has-text-dark">
            <h3 className="is-size-3">Safe</h3>
            <p className="has-text-dark paragraph">
              Promotes safe driving behaviours through positive driving habits.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns reverse-row-order">
          <div className="column has-text-dark">
            <h3 className="is-size-3">Profitable</h3>
            <p className="has-text-dark paragraph">
              Exciting new investment portfolio with real-time risk assessment
              and analysis.
            </p>
          </div>
          <div className="column">
            <img
              className="feature-img"
              src="images/profit.png"
              alt="feature"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
