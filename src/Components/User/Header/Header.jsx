import React from "react";
import { CartIcon, ProfileIcon, WishlistIcon } from "../../../Assets/Icons";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerName">
          <a href="/"><h2>SHOOOZ</h2></a>
        </div>
        <div className="headerLinks">
          <a href="/latestarrival">
            <div className="headerLinksIndividual" id="latestArrivals">
              <p>Latest Arrivals</p>
            </div>
          </a>
          <a href="/mens">
            <div className="headerLinksIndividual" id="Mens">
              <p>Mens</p>
            </div>
          </a>
          <a href="#">
            <div className="headerLinksIndividual" id="Womens">
              <p>Womens</p>
            </div>
          </a>
          <a href="#">
            <div className="headerLinksIndividual" id="categories">
              <p>Categories</p>
            </div>
          </a>
          <a href="#">
            <div className="headerLinksIndividual" id="Luxury">
              <p>Luxury</p>
            </div>
          </a>
        </div>
        <div className="headerButtons">
        <div className="headerSearchBox">
          <input type="search"  id="" placeholder="Search..." />
        </div>
          <a href="#">
            <WishlistIcon />
          </a>
          <a href="#">
            <CartIcon />
          </a>
          <a href="#">
            <ProfileIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
