import React, { useState, useEffect } from "react";
import { ProfileIcon } from "../../../Assets/Icons";
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
      <div className={isSolid ? "admHeader" : "admTransHeader"}>
        <div className="admHeaderName">
          <Link to="/admin">
            <h2>SHOOOZ <span style={{ fontFamily: 'sans-serif', fontSize: '20px' }}>Admin</span></h2>
          </Link>
        </div>
        <div className="admHeaderLinks">
          <Link to="/admin/view">
            <div className="admHeaderLinksIndividual" id="latestArrivals">
              <p>View Products</p>
            </div>
          </Link>
          <Link to="/admin/add">
            <div className="admHeaderLinksIndividual" id="Mens">
              <p>Add Products</p>
            </div>
          </Link>
          {/* <Link to="/admin/edit/:productId">
            <div className="headerLinksIndividual" id="Womens">
              <p>Edit Product</p>
            </div>
          </Link> */}
          <Link to="#">
            <div className="admHeaderLinksIndividual" id="categories">
              <p>Stats</p>
            </div>
          </Link>
        </div>
        <div className="admHeaderButtons">
          <div className="admHeaderProfileIcon" onClick={toggleDropdown}>
          <ProfileIcon />
          </div>
          {isDropdownOpen && (
            <div className="admDropdownContent">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
