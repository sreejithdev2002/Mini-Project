import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <>
      <div className="signup">
        <div className="signupSection">
          <form action="">
            <h1>Create your Account</h1>
            <p>Please enter your details.</p>
            <div className="signupUserInput">
              <div className="signupUsername">
                <label htmlFor="name">Username</label>
                <input
                  type="name"
                  name="name"
                  id="signupName"
                  className="signupInput"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <br />
              <div className="signupEmail">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="signupEmail"
                  className="signupInput"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <br />
              <div className="signupPassword">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="signupPassword"
                  className="signupInput"
                  placeholder="Enter password"
                  required
                />
              </div>
              <br />
              <div className="signupPassword">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  id="signupPassword"
                  className="signupInput"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <br />
              <div className="signupSubmit">
                <button type="submit">Sign Up</button>
              </div>
              <br />
              <div className="signupOr">
              <p>or</p>
              </div>
              <br />
              <div className="signupLoginAccount">
                <button type="submit">Go to Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className="signupImageSection">
          <div className="signupImage"></div>
        </div>
      </div>
    </>
  )
}

export default SignUp
