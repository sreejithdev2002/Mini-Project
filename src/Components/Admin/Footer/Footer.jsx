import React from "react";
import "../Footer/Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (

    <>
      <div className="footer">
        <div className="footerContent1">
          <div className="footerBrand">
            <Link to="/">
              <h2>SHOOOZ</h2>
              <h6>YOUR FOOTWEAR DESTINATION</h6>
              <p>Welcome to Shoooz, your ultimate destination for the latest and greatest in footwear. We are passionate about shoes and dedicated to bringing you an extensive collection of styles to suit every taste and occasion. From classic sneakers to trendy boots, and everything in between, Shoooz offers a curated selection of top brands and unique finds.

</p>
            </Link>
          </div>
          <div className="footerSupportLinks">
            <ul>
              <Link to="#">
                <li>About Us</li>
              </Link>
              <Link to="#">
                <li>Contact</li>
              </Link>
              <Link to="#">
                <li>Terms & Conditions</li>
              </Link>
              <Link to="#">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
          <div className="footerMainLinks">
            <ul>
              <Link to="#">
                <li>Latest Arrivals</li>
              </Link>
              <Link to="#">
                <li>Mens</li>
              </Link>
              <Link to="#">
                <li>Womens</li>
              </Link>
              <Link to="#">
                <li>Categories</li>
              </Link>
              <Link to="#">
                <li>Luxury</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* <div className="footerContent2">
          <div className="footerSearch">
            <h3>Search</h3>
            <input type="search" placeholder="Type here to search..." />
          </div>
        </div>
        <div className="footerContent3">
          <p>This Website is created by <a href="#">SreejithDev2002</a></p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
