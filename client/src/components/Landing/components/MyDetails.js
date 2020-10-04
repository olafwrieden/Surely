import React, { useState, useEffect } from "react";

const MyDetails = () => {
  const [licencePlate, setLicencePlate] = useState("");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [hasDashcam, setHasDashcam] = useState(false);
  const toggleDashcam = () => setHasDashcam((value) => !value);

  const submitDetails = async () => {
    let details = {
      licencePlate,
      address,
      budget,
      hasDashcam,
    };
    console.log(details);
  };

  // Make api request....

  return (
    <section className="section email-section-gradient">
      <div className="container">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content has-text-centered">
                <p className="mb-2">
                  <strong>Calculate Your Cost</strong>
                </p>
                <div className="columns">
                  <div className="column has-text-centered">
                    <label className="label has-text-left">
                      My Licence Plate
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="eg. SWA123"
                        name="text"
                        onChange={(e) => setLicencePlate(e.target.value)}
                        value={licencePlate}
                      />
                    </div>
                  </div>
                  <div className="column has-text-centered">
                    <label className="label has-text-left">My Address</label>
                    <div className="control">
                      <input
                        className="input"
                        type="address"
                        placeholder="eg. 101 Pakenham Street W"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label has-text-left">
                        My Monthly Budget
                      </label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="currency"
                          placeholder="15.00"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                        <span className="icon is-left">
                          <i className="fa fa-money"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label has-text-left">Extras</label>
                      <div className="control">
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={hasDashcam}
                            onChange={toggleDashcam}
                          />{" "}
                          I have a Bluetooth Dashcam
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column has-text-left">
                    {/* <Link to="/">I have a quote code</Link> */}
                  </div>
                  <div className="column is-2 has-text-centered">
                    <div className="control">
                      <button
                        className="button is-primary is-fullwidth"
                        type="submit"
                      >
                        Next
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

export default MyDetails;
