import React, { useState, useEffect } from "react";
import { CartIcon, ProfileIcon, WishlistIconTrue } from "../../../Assets/Icons";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
    // For example, you can clear local storage or log out from the server
  };

  return (
    <>
      <div className={isSolid ? "header" : "transHeader"}>
        <div className="headerName">
          <Link to="/admin">
            <h2>SHOOOZ <span style={{ fontFamily: 'sans-serif', fontSize: '20px' }}>Admin</span></h2>
          </Link>
        </div>
        <div className="headerLinks">
          <Link to="/admin/view">
            <div className="headerLinksIndividual" id="latestArrivals">
              <p>View Products</p>
            </div>
          </Link>
          <Link to="/admin/add">
            <div className="headerLinksIndividual" id="Mens">
              <p>Add Products</p>
            </div>
          </Link>
          <Link to="/admin/edit/:productId">
            <div className="headerLinksIndividual" id="Womens">
              <p>Edit Product</p>
            </div>
          </Link>
          <Link to="#">
            <div className="headerLinksIndividual" id="categories">
              <p>Stats</p>
            </div>
          </Link>
        </div>
        <div className="headerButtons">
          <Link to="#">
            <WishlistIconTrue />
          </Link>
          <Link to="#">
            <CartIcon />
          </Link>
          <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }} onClick={toggleDropdown}>
            <ProfileIcon />
          </button>
          {isDropdownOpen && (
            <div className="dropdownContent">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
