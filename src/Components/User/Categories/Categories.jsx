import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="flex flex-col pb-[50px] pt-[200px] bg-[#f0f0f045] lg:pt-[150px]">
        <div className="ml-[90px] lg:ml-[50px]">
          <h1 className="text-2xl">Categories</h1>
        </div>
        <div className="grid justify-evenly grid-cols-4 gap-y-[10px] gap-x-[10px] my-[50px] mx-14 lg:mx-32">
          <Link to="/categories/casuals">
            <img className="flex justify-center h-[80px] w-[100px] lg:h-[250px] lg:w-[250px] items-center bg-center bg-cover transition hover:scale-105 duration-300 rounded-full opacity-90 hover:opacity-100" id="casuals"/>
          </Link>
          <Link to="/categories/formals">
            <img className="flex justify-center h-[80px] w-[100px] lg:h-[250px] lg:w-[250px] items-center bg-center bg-cover transition hover:scale-105 duration-300 rounded-full opacity-90 hover:opacity-100" id="formals"/>
          </Link>
          <Link to="/categories/sandals">
            <img className="flex justify-center h-[80px] w-[100px] lg:h-[250px] lg:w-[250px] items-center bg-center bg-cover transition hover:scale-105 duration-300 rounded-full opacity-90 hover:opacity-100" id="sandals"/>
          </Link>
          <Link to="/categories/sneakers">
            <img className="flex justify-center h-[80px] w-[100px] lg:h-[250px] lg:w-[250px] items-center bg-center bg-cover transition hover:scale-105 duration-300 rounded-full opacity-90 hover:opacity-100" id="sneaker"/>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
