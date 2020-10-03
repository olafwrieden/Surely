import React from "react";

const Pricing = () => {
  return (
    <section className="section">
      <div className="container has-text-centered py-4">
        <h2 className="title mb-6">Our Plans</h2>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4">Starter Pack</h3>
                <p className="block">
                  Join our network, but build and manage everything yourself.
                </p>
                <h4 className="title is-spaced is-5">
                  $10 <small>Per user / monthly</small>
                </h4>
                <button className="button is-primary" type="button">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4">Medium Pack</h3>
                <p className="block">
                  We build what you need, but you still need to manage your
                  data.
                </p>
                <h4 className="title is-spaced is-5">
                  $50 <small>Per user / monthly</small>
                </h4>
                <button className="button is-primary is-outlined" type="button">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4">Big Pack</h3>
                <p className="block">
                  We do everything for you, including managing your data.
                </p>
                <h4 className="title is-spaced is-5">
                  $100 <small>Per user / monthly</small>
                </h4>
                <button className="button is-primary is-outlined" type="button">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
