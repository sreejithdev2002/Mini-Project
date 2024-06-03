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
            <img className="categoriesName" id="casuals"/>
          </Link>
          <Link to="/categories/formals">
            <img className="categoriesName" id="formals"/>
          </Link>
          <Link to="/categories/sandals">
            <img className="categoriesName" id="sandals"/>
          </Link>
          <Link to="/categories/sneakers">
            <img className="categoriesName" id="sneaker"/>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
