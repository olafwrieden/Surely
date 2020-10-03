import React from "react";

const HowItWorks = () => {
  return (
    <section id="features" className="section has-mustard-bg">
      <div className="container">
        <div className="columns reverse-row-order">
          <div className="column">
            <h3 className="is-size-3">How It Works</h3>
            <p className="has-text-green paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="column">
            {/* <img className="feature-img" src="img/feature1.png" alt="feature" /> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            {/* <img className="feature-img" src="img/feature2.png" alt="feature" /> */}
          </div>
          <div className="column">
            <h3 className="is-size-3">Feature 2</h3>
            <p className="has-text-green paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns reverse-row-order">
          <div className="column">
            <h3 className="is-size-3">Third Feature, Wow</h3>
            <p className="has-text-green paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="column">
            {/* <img className="feature-img" src="img/feature3.png" alt="feature" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
