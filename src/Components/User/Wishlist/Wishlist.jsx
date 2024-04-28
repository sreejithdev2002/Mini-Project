import React, { useState } from 'react';
import './Wishlist.css'
import ProductPage from '../ProductPage/ProductPage';
// import ShoesData from '../../../Data/Shoes.json';

function Wishlist() {
  const wishlist = ShoesData.shoes.filter(shoe => shoe.inWishlist === true);

  return (
    <>
      <div className="wishlist">
        <div className="wishlistHeading">
            <h1>Wishlist</h1>
        </div>
        <ProductPage products={wishlist}/>
      </div>
    </>
  )
}

export default Wishlist
