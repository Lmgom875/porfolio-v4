import React, { Component } from "react";
import RegisterForm from "../../components/registerForm/RegisterForm";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChangeInput = (e) => {
    console.log("change: ", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="form-row justify-content-center m-4">
          <div className="col-md-12 text-center">
            <h1>Log In </h1>
          </div>
        </div>
        <RegisterForm  onChangeInput={this.onChangeInput} />
      </div>
    );
  }
}
