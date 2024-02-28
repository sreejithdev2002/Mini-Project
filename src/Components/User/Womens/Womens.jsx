import React from 'react';
import './Womens.css';
import ProductPage from '../ProductPage/ProductPage';
import ShoesData from '../../../Data/Shoes.json';

function Womens() {
  const womens = ShoesData.shoes.filter(shoe => shoe.gender === 'Women');
  return (
    <>
      <div className="Womens">
        <div className="MensHeading">
          <h1>Womens Collections</h1>
        </div>
        <ProductPage products={womens}/>
      </div>
    </>
  )
}

export default Womens
