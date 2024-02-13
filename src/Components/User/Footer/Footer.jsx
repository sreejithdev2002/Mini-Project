import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <a href="/">Shoooz.com</a>
        </div>
        <ul className="footer-nav-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
