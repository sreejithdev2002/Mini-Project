import React from "react";
import './Loader.css';

function Loader() {
  return (
    <>
      <div className="spinner">
        <div className="loader"></div>
        <p className="loading">Loading...</p>
      </div>
    </>
  );
}

export default Loader;
