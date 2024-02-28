import React from 'react';
import './Sandals.css';
import ProductPage from '../../ProductPage/ProductPage';
import ShoesData from '../../../../Data/Shoes.json';

function Sandals() {
    const sandals = ShoesData.shoes.filter(shoe => shoe.category === 'Sandals');
  return (
    <>
      <div className="sandals">
        <div className="sandalsHeading">
            <h1>Sandals</h1>
        </div>
        <ProductPage products={sandals}/>
      </div>
    </>
  )
}

export default Sandals
