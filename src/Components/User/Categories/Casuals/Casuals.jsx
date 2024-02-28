import React from 'react';
import './Casuals.css';
import ProductPage from '../../ProductPage/ProductPage';
import ShoesData from '../../../../Data/Shoes.json';

function Casuals() {
    const casuals = ShoesData.shoes.filter(shoe => shoe.category === 'Casuals')
  return (
    <>
      <div className="casuals">
        <div className="casualsHeading">
            <h1>Casuals</h1>
        </div>
        <ProductPage products={casuals}/>
      </div>
    </>
  )
}

export default Casuals
