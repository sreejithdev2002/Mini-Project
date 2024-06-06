import React, { useState, useEffect } from "react";
import { ProfileIcon } from "../../../Assets/Icons";
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

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
localStorage.removeItem("adminjwt");
navigate("/admin/login");    
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
            <div className="admHeaderLinksIndividual">
              <p>View Products</p>
            </div>
          </Link>
          <Link to="/admin/add">
            <div className="admHeaderLinksIndividual">
              <p>Add Products</p>
            </div>
          </Link>
          <Link to="/admin/orderlist">
            <div className="admHeaderLinksIndividual" >
              <p>Order List</p>
            </div>
          </Link>
          <Link to="/admin/dashboard">
            <div className="admHeaderLinksIndividual" >
              <p>Dashboard</p>
            </div>
          </Link>
        </div>
        <div className="admHeaderButtons">
          <div className="admHeaderProfileIcon" onClick={toggleDropdown}>
          <ProfileIcon />
          </div>
          {isDropdownOpen && (
            <div className="admDropdownContent">
              <button onClick={handleLogout} >Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
