import React, { useState, useEffect } from "react";
import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../Assets/Icons";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={isSolid ? "header" : "transHeader"}>
        <div className="headerName">
          <Link to='/'>
          <h2>SHOOOZ</h2>
          </Link>
        </div>
        <div className="headerLinks">
          <Link to="/latestarrival">
            <div className="headerLinksIndividual" id="latestArrivals">
              <p>Latest Arrivals</p>
            </div>
          </Link>
          <Link to="/mens">
            <div className="headerLinksIndividual" id="Mens">
              <p>Mens</p>
            </div>
          </Link>
          <Link to="/womens">
            <div className="headerLinksIndividual" id="Womens">
              <p>Womens</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="headerLinksIndividual" id="categories">
              <p>Categories</p>
            </div>
          </Link>
          <Link to="/luxury">
            <div className="headerLinksIndividual" id="Luxury">
              <p>Luxury</p>
            </div>
          </Link>
        </div>
        <div className="headerButtons">
          {/* <div className="headerSearchBox">
            <input type="search" id="" placeholder="Search..." />
          </div> */}
          <Link to="/wishlist">
            <WishlistIconTrue />
          </Link>
          <Link to="#">
            <CartIcon />
          </Link>
          <Link to="#">
            <ProfileIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
