import React from "react";
import { WishlistIcon, CartIcon} from '../../../Assets/Icons';
import '../Header/Header.css';

function Header() {
  return (
    <>
    <div className="header">
      <div className="headerBrand">
        <h1>Shoooz<span>.com</span></h1>
      </div>
      <div className="headerLinks">
        <ul>
          <li><a href="#">Latest Arrivals</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Mens</a></li>
          <li><a href="#">Womens</a></li>
          <li><a href="#">Luxury</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
      <div className="headerButtons">
        <a href="#" className="Wishlist">
          <WishlistIcon/>
          <span>Wishlist</span>
        </a>
        <a href="#" className="Cart">
          <CartIcon/>
          <span>My Cart</span>
        </a>
      </div>
    </div>
    </>
  );
}

export default Header;
