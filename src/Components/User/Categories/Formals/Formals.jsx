import React from 'react';
import './Formals.css';
import ProductPage from '../../ProductPage/ProductPage';
import ShoesData from '../../../../Data/Shoes.json';

function Formals() {
    const formals = ShoesData.shoes.filter(shoe => shoe.category === 'Formals');
  return (
    <>
      <div className="formals">
        <div className="formalsHeading">
            <h1>Formals</h1>
        </div>
        <ProductPage products={formals}/>
      </div>
    </>
  )
}

export default Formals
