import React from 'react';
import './Luxury.css';
import ProductPage from '../ProductPage/ProductPage';
import ShoesData from '../../../Data/Shoes.json';

function Luxury() {
  const luxury = ShoesData.shoes.filter(shoe => shoe.isLuxury === true);
  return (
    <>
      <div className="luxury">
        <div className="luxuryHeading">
          <h1>Luxury Collection</h1>
        </div>
        <ProductPage products={luxury}/>
      </div>
    </>
  )
}

export default Luxury
