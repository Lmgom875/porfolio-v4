import React from "react";
import RegisterForm from "../../components/registerForm/RegisterForm";

export default function Login() {
  return (
    <div>
      <div className="form-row justify-content-center m-4">
        <div className="col-md-12 text-center">
          <h1>Log In</h1>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
}
