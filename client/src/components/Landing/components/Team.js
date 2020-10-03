import React from "react";

const Team = () => {
  const { PUBLIC_URL } = process.env;

  return (
    <section className="section">
      <div className="container has-text-centered py-4">
        <h2 className="title">The Team</h2>
        <p className="subtitle mb-6">We make insurance flexible.</p>
        <div className="columns is-centered is-multiline py-5">
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFlrCE6NQLcKA/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=8K9lhgtHblHPsDqCd1z2VvV72sy3NCsdpswB7z9nWPs"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Selena Butler</h5>
            <p className="subtitle is-6">Chief Talker</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQGL0Vgyk7LboQ/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=c1OK8oKvyxjzq5iW-WUayd1cmgh8MR2erdBZE2VLmNI"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Olaf Wrieden</h5>
            <p className="subtitle is-6">Coder</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQHnuPpmgxMajA/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=xo55xDzMy8kBPrs0zEatfZ_cpsaLp3D_WnyFX0c_IRI"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Anna Han</h5>
            <p className="subtitle is-6">Designer</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQG390GSn3H70A/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=gryAHasCuNt38RcR1K9JryD0xYULpZWMWddfAyEhQjk"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Ken Hendricks</h5>
            <p className="subtitle is-6">Ideas Guys</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={`${PUBLIC_URL}/images/ricky-profile.JPG`}
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Ricky Katafono</h5>
            <p className="subtitle is-6">The Man</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://media-exp1.licdn.com/dms/image/C5103AQEjIwTyVCJE4w/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=3MV-a7BVXrBicOL4m0bLHBpU8FBkznr6ljifXOSigW8"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Rick Hernandez</h5>
            <p className="subtitle is-6">General Dogs Body</p>
          </div>
          <div className="column is-6 is-3-widescreen mb-6">
            <div className="level">
              <div className="level-item">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="https://scontent.fakl7-1.fna.fbcdn.net/v/t1.0-1/p480x480/29472415_1734877046572529_3162833205472526336_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=R2RF46NrPN4AX_Jrf0W&_nc_ht=scontent.fakl7-1.fna&tp=6&oh=582d46f8aa8d817e725705c1e1d32453&oe=5F9CA5ED"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <h5 className="title is-5">Alex Koh</h5>
            <p className="subtitle is-6">The Data Guy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
