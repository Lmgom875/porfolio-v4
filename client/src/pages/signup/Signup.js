import React, { Component } from "react";
import RegisterForm from "../../components/registerForm/RegisterForm";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div className="form-row justify-content-center m-4">
          <div className="col-md-12 text-center">
            <h1>Sign Up</h1>
          </div>
        </div>
        <RegisterForm />
      </div>
    );
  }
}
