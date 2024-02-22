import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    // <footer>
    //   <div className="footer-content">
    //     <div className="logo">
    //       <a href="/">Shoooz.com</a>
    //     </div>
    //     <ul className="footer-nav-links">
    //       <li><a href="/about">About Us</a></li>
    //       <li><a href="/contact">Contact</a></li>
    //       <li><a href="/terms">Terms & Conditions</a></li>
    //       <li><a href="/privacy">Privacy Policy</a></li>
    //     </ul>
    //   </div>
    //   <div className="social-icons">
    //     <a href="#"><i className="fa fa-facebook"></i></a>
    //     <a href="#"><i className="fa fa-twitter"></i></a>
    //     <a href="#"><i className="fa fa-instagram"></i></a>
    //   </div>
    //   <div className="newsletter">
    //     <h3>Subscribe to our Newsletter</h3>
    //     <form>
    //       <input type="email" placeholder="Enter your email" />
    //       <button type="submit">Subscribe</button>
    //     </form>
    //   </div>
    // </footer>

    <>
      <div className="footer">
        <div className="footerContent1">
          <div className="footerBrand">
            <a href="/">
              <h2>SHOOOZ</h2>
            </a>
          </div>
          <div className="footerSupportLinks">
            <ul>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="#">
                <li>Terms & Conditions</li>
              </a>
              <a href="#">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
          <div className="footerMainLinks">
            <ul>
              <a href="#">
                <li>Latest Arrivals</li>
              </a>
              <a href="#">
                <li>Mens</li>
              </a>
              <a href="#">
                <li>Womens</li>
              </a>
              <a href="#">
                <li>Categories</li>
              </a>
              <a href="#">
                <li>Luxury</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footerContent2">
          <div className="footerSearch">
            <h3>Search</h3>
            <input type="search" placeholder="Type here to search..." />
          </div>
        </div>
        <div className="footerContent3">
          <p>This Website is created by <a href="#">SreejithDev2002</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
