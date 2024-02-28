import React from "react";
import "./Mens.css";
import ProductPage from "../ProductPage/ProductPage";
import ShoesData from '../../../Data/Shoes.json';

function Mens() {
  const mens = ShoesData.shoes.filter(shoe => shoe.gender === 'Men');
  return (
    <>
      <div className="Mens">
        <div className="MensHeading">
          <h1>Mens Collections</h1>
        </div>
        <ProductPage products={mens}/>
      </div>
    </>
  );
}

export default Mens;
