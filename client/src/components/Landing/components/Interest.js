import React, { useState } from "react";

const Interest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Make api request....

  return (
    <section className="section email-section-gradient">
      <div className="container">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content has-text-centered">
                <p className="mb-2">
                  <strong>Interested?</strong>{" "}
                  <small>Express your Interest</small>
                </p>
                <div className="columns is-centered">
                  <div className="column has-text-centered">
                    <div className="control">
                      <input
                        className="input"
                        type="name"
                        placeholder="Your Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="column is-2 has-text-centered">
                    <div className="control">
                      <button
                        className="button is-primary is-fullwidth"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div
                        className="is-multiline field is-grouped"
                        style={{ marginTop: "1em" }}
                      >
                        
                        <div className="control columns is-expanded">
                          <input
                            className="input column mr-2"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                          />
                          <input
                            className="input column mr-2"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                          />
                        </div>
                        <p className="control">
                          <button className="button has-mustard-background">
                            Submit
                          </button>
                        </p>
                      </div> */}
              </div>
            </div>
          </article>
        </div>
        {/* <p className="is-size-7 has-text-centered">Come and talk with us</p> */}
      </div>
    </section>
  );
};

export default Interest;
