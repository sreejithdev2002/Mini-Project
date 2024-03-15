import React from "react";
import "./Login.css";
import loginImage from "../../../Assets/Images/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const handleLogin = () => {
    toast.success("Admin Login Successful")
  }

  return (
    <>
      <div className="loginUser">
        <h1 className="loginUsrh1">SHOOOZ</h1>
        <div className="loginUsr">
          <div className="loginSection">
            <form action="">
              <h1>Account Login</h1>
              <p>Please enter your username and password.</p>
              <div className="loginUserInput">
                <div className="loginUsername">
                  <label htmlFor="email">Username</label>
                  <input
                    type="name"
                    name="name"
                    id="loginName"
                    className="loginInput"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <br />
                <div className="loginPassword">
                  <label htmlFor="password">Password</label>
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
                  <button type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="loginImageSection">
            <img src={loginImage} alt="" className="loginImage" />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Login;
