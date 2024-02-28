import React from "react";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="welcome">
        <h1 className="welcomeHeading">
          Welcome to <span id="shoooz">SHOOOZ</span>
        </h1>
        <h3 className="welcomeSubHeading">YOUR FOOTWEAR DESTINATION</h3>
        {/* <div className="welcomeLinks">
        <a href="/login"><p className="welcomeLogin">Login</p></a><span>|</span><a href="/signup"><p className="welcomeSignup">Sign Up</p></a>
        </div> */}
      </div>
    </>
  );
}

export default WelcomePage;
