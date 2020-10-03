import React from "react";

const Profile = () => {
  const { PUBLIC_URL } = process.env;

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">My Profile</h1>
          <h2 className="subtitle">Manage your Surely identity.</h2>
        </div>
      </section>

      <section className="section">
        <div className="container is-vcentered">
          <div className="columns">
            {/* Sidebar */}
            <div className="column box">
              {/* Avatar */}
              <div className="columns is-flex is-centered">
                <div className="column has-text-centered">
                  <figure className="image is-128x128 is-inline-block img-edit">
                    <img
                      className="is-rounded avatar"
                      src={`${PUBLIC_URL}/images/selena-profile.jpeg`}
                      alt="Profile Avatar"
                    />
                    {/* <div className="middle has-text-dark">
                      <FiEdit size="25px" />
                    </div> */}
                  </figure>
                </div>
              </div>

              <div className="columns is-multiline">
                {/* Name */}
                <div className="column is-12">
                  <h3 className="is-size-4 has-text-centered">Jane Doe</h3>
                </div>
                {/* Account Type */}
                <div className="column is-12">
                  <div className="tags has-addons is-centered">
                    <span className="tag is-primary">Rating</span>
                    <span className="tag">GOOD</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer */}
            <div className="column is-1"></div>
            {/* Body */}
            <div
              className="column is-two-thirds box is-fullwidth"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="has-text-centered">
                {/* <FiEye size="4em" className="has-text-primary" /> */}
                <p className="subtitle has-text-centered">Coming Soon</p>
                <p className="has-text-centered">
                  Good things come to those who wait (or get early access{" "}
                  <span role="img" aria-label="emoji">
                    😉
                  </span>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
