import React from 'react';
import './Sneakers.css';
import ProductPage from '../../ProductPage/ProductPage';
import ShoesData from '../../../../Data/Shoes.json';

function Sneakers() {
    const sneakers = ShoesData.shoes.filter(shoe => shoe.category === 'Sneakers');
  return (
    <>
      <div className="sneakers">
        <div className="sneakersHeading">
            <h1>Sneakers</h1>
        </div>
        <ProductPage products={sneakers}/>
      </div>
    </>
  )
}

export default Sneakers
