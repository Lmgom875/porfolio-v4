import React from "react";

export default function RegisterForm(props) {
  return (
    <div>
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-md-6 loginCol">
            <div className="form-row justify-content-center">
              <div className="form-group col-md-12">
                <label htmlFor="inputFirstName4">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="inputFirstName4"
                  onChange={props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-12">
                <label htmlFor="inputLastName4">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="inputLastName4"
                  onChange={props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-row justify-content-center m-5">
              <div className="form-group col-md-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  //onClick={this.onSubmit}
                >
                  Log In
                </button>
              </div>
              <div className="form-group col-md-1 d-flex align-items-center justify-content-center">
                <h5>or</h5>
              </div>
              <div className="form-group col-md-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
