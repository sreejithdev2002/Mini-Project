import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginSection">
          <form action="">
            <h1>Account Login</h1>
            <p>Please enter your email and password.</p>
            <div className="loginUserInput">
              <div className="loginUsername">
                <label htmlFor="email">Username *</label>
                <input
                  type="email"
                  name="email"
                  id="loginEmail"
                  className="loginInput"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <br />
              <div className="loginPassword">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  className="loginInput"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <br />
              <div className="loginSubmit">
                <button type="submit">Login</button>
              </div>
              <br />
              <div className="loginOr">
              <p>or</p>
              </div>
              <br />
              <div className="loginCreateAccount">
                <button type="submit">Create Account</button>
              </div>
            </div>
          </form>
        </div>
        <div className="loginImageSection">
          <div className="loginImage"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
