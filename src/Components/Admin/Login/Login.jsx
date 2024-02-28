import React from "react";
import "./Login.css";
import loginImage from '../../../Assets/Images/login.jpg';

function Login() {
  return (
    <>
      <div className="loginAdmin">
        <h1 className="loginAdmh1">SHOOOZ</h1>
      <div className="loginAdm">
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
              <div className="loginOr"></div>
            </div>
          </form>
        </div>
        <div className="loginImageSection">
        <img src={loginImage} alt="" className="loginImage" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
