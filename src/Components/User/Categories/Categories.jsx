import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="categoriesHeading">
          <h1>Categories</h1>
        </div>
        <div className="categoriesGrids">
          <Link to="/categories/casuals">
            <div className="categoriesName">
              <h1>Casuals</h1>
            </div>
          </Link>
          <Link to="/categories/formals">
            <div className="categoriesName">
              <h1>Formals</h1>
            </div>
          </Link>
          <Link to="/categories/sandals">
            <div className="categoriesName">
              <h1>Sandals</h1>
            </div>
          </Link>
          <Link to="/categories/sneakers">
            <div className="categoriesName">
              <h1>Sneakers</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
