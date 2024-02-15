import React from "react";
import { WishlistIcon, CartIcon } from "../../../Assets/Icons";
// import '../Header/Header.css';
import "../Header/HeaderNew.css";

function Header() {
  return (
    <>
      {/* <div className="header">
      <div className="headerBrand">
        <h1>Shoooz</h1>
      </div>
      <div className="headerLinks">
        <ul>
          <li><a href="#">Latest Arrivals</a></li>
          <li><a href="#">Mens</a></li>
          <li><a href="#">Womens</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Luxury</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
      <div className="headerButtons">
        <input type="search" placeholder="Search..." id="searchBtn"/>
        <a href="#" className="Wishlist">
          <WishlistIcon/>
          <span className="headerBtnName">Wishlist</span>
        </a>
        <a href="#" className="Cart">
          <CartIcon/>
          <span className="headerBtnName">My Cart</span>
        </a>
      </div>
    </div> */}

      <div className="header">
        <div className="headerBrand">
          <h1>Shoooz</h1>
        </div>
        <div className="headerLinks">
          <ul>
            <li>
              <a href="#">Latest Arrivals</a>
            </li>
            <li>
              <a href="#">Mens</a>
            </li>
            <li>
              <a href="#">Womens</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Luxury</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
        <div className="headerButtons">
          <input type="search" placeholder="Search..." id="searchBtn" />
          <a href="#" className="Wishlist">
            <WishlistIcon/>
            <span className="headerBtnName">Wishlist</span>
          </a>
          <a href="#" className="Cart">
            <CartIcon/>
            <span className="headerBtnName">My Cart</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
