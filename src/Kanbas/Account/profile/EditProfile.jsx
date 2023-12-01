import * as client from "../users/client";

const EditProfile = ({ user }) => {
  const updateUser = async (e) => {
    e.preventDefault();

    const updatedUser = await client.updateUser(user);
    // console.log(updatedUser);
  };
  return (
    <div className="col profile-details">
      <a href="." className="float-end">
        <button className="btn btn-light kanbas-btn-gray btn-border">
          <i className="fa fa-pencil" aria-hidden="true"></i>
          Cancel Editing
        </button>
      </a>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-12 col-lg-2 width-auto">
              <i
                className="fa fa-user avatar"
                aria-hidden="true"
                style={{ color: "#b2b4b7", display: "block" }}
              ></i>
            </div>

            <div className="col-md-12 col-lg-10">
              <label for="firstName-input" className=" fw-600">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName-input"
                name="firstName"
                value={user.firstName}
              />

              <label for="lastName-input" className="mt-2 fw-600">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName-input"
                name="lastName"
                value={user.lastName}
              />

              <label for="email-input" className="mt-2 fw-600">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email-input"
                name="email"
                value={user.email}
              />

              <label for="dob-input" className="mt-2 fw-600">
                Date of birth:
              </label>
              <input
                type="date"
                className="form-control"
                id="dob-input"
                name="dob"
                value={new Date(user.dob).toLocaleDateString("en-CA")}
              />

              <label for="role-input" className="fw-600 mt-2">
                Role:
              </label>
              <select id="ass-grp role-input" className="form-select">
                <option>STUDENT</option>
                <option>FACULTY</option>
                <option>ADMIN</option>
                <option>INSTRUCTOR</option>
              </select>

              <label for="password-input" className="mt-2 fw-600">
                Password:
              </label>
              <input
                disabled
                type="password"
                className="form-control"
                id="password-input"
                name="password"
                value={user.password}
              />

              {/* <label for="title-input" className="mt-2 fw-600">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title-input"
                value="Mr."
              /> */}

              {/* <h3 className="title mt-4">Contact</h3>
              <p>No regitered services</p>

              <h3 className="title mt-4">Biography</h3>
              <textarea className="form-control " rows="5"></textarea> */}

              <h3 className="title mt-4">Links</h3>
              <form>
                <div className="row center-align">
                  <div className="col tl-center fw-500">Title</div>
                  <div className="col tl-center fw-500">URL</div>
                </div>

                <div className="row center-align mt-1">
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="Youtube"
                    />
                  </div>
                  <div className="col-1 width-auto">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="https://www.youtube.com/@WebDevTV"
                    />
                  </div>
                  <div className="col-1 width-auto color-red">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="row center-align mt-1">
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="Github"
                    />
                  </div>
                  <div className="col-1 width-auto">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="https://github.com/supratikchaudhuri/kanbas-react-web-app"
                    />
                  </div>
                  <div className="col-1 width-auto color-red">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="row center-align mt-1">
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="LinkedIn"
                    />
                  </div>
                  <div className="col-1 width-auto">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                  <div className="col">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      value="https://www.linkedin.com/in/supratik-chaudhuri-69b064186/"
                    />
                  </div>
                  <div className="col-1 width-auto color-red">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
                <button className="btn btn-sm bg-light btn-border mt-1">
                  Add another link
                </button>
              </form>

              <hr />
              <div className="float-end mb-5">
                <a href="index.html">
                  <button type="button" className="btn btn-light btn-border">
                    Cancel
                  </button>
                </a>
                <a href="index.html">
                  <button
                    type="button"
                    className="btn btn-danger btn-border ms-2"
                    onClick={(e) => updateUser(e)}
                  >
                    Save Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
